import * as aws from 'aws-sdk';
import { DocumentClient } from 'aws-sdk/clients/dynamodb';
import { JobRecord } from '@shared/entities/job-record';
import { JobStagingRecord } from '@shared/entities/job-staging-record';
import ExpressionAttributeValueMap = DocumentClient.ExpressionAttributeValueMap;
import { map, result, values, xor } from 'lodash';
const credentials = new aws.SharedIniFileCredentials({ profile: 'sand' });
aws.config.credentials = credentials;
aws.config.update({ region: 'us-east-1' });
const ddb = new aws.DynamoDB();
const listOfFiles: string[] = ['payment-issued-response-rejected#2022-06-22T07:00:25.124Z',
    'payment-issued-response-accepted#2022-06-22T07:00:25.929Z',
    'payment-paid-rejected-response#2022-06-22T09:00:49.708Z',
    'payment-paid-response#2022-06-22T09:00:48.134Z',
    'payment-request-response-rejected#2022-06-22T07:00:24.747Z',
    'payment-request-response-accepted#2022-06-22T07:00:34.608Z',
    'payment-paid-file-creation#2022-07-14T09:00:48.134Z'
];


/**
   * creates map of properties and new values for the properties by combining the attributes to update,
   * and the values
   * of those attributes taken from updateItem
   *
   * @example
   * returns {':prop1':'val1', ':prop2':'val2} in the form of an array
   * buildExpressionAttributeValues([{'prop1':'val1', 'prop2':'val2', 'prop3': 'val3});
   *
   * @param attributesToUpdate array of attribute names to use in the expression map
   * @param updateDataFields containing attributes named in attributesToUpdate, along with values
   *
   * @return { ExpressionAttributeValueMap } map of property/updated value string pairs
*/
function buildExpressionAttributeValues<K, V>(
    attributesToUpdate: Map<K, V> // key array for specific type
): ExpressionAttributeValueMap {

    const attributeValues: { [key: string]: any } = {};

    attributesToUpdate.forEach((value, key, map2) => {
        console.log(`values ${value}, ${key}`);
        attributeValues[`${key}`] = value;
    });


    return attributeValues;
}

const getJobTableRequest = async (filename) => {

    // with error covers aws outage
    const params: DocumentClient.QueryInput = {
        TableName: process.env.JOB_TABLE!, // from  lambda process
        KeyConditionExpression: `batch_name = :batch_name_e`,
        ExpressionAttributeValues: {
            ':batch_name_e': filename
        }
    };

    //
    const documentClient = new DocumentClient({ convertEmptyValues: true });
    const resultQ = await documentClient.query(params).promise();

    const records: JobRecord[] = (resultQ.Items as JobRecord[]) || [];

    if (records.length === 0) {
        const error_message = 'no records on the job table';
        throw new Error(error_message);
    }

    if (records.length > 1) {
        const error_message = 'too many records returned from job table';
        throw new Error(error_message);
    }

    return records[0].job_name;

};

const getJobStagingTableRecordsOutputAllRefIDs = async function (batchNameInput: string) {

    process.env.STAGING_TABLE = 'aws_ph_job_staging';
    const params: DocumentClient.QueryInput = {
        TableName: process.env.STAGING_TABLE,
        IndexName: 'batch_name-id-index',
        KeyConditionExpression: 'batch_name = :batch_name_e',
        ExpressionAttributeValues: { ':batch_name_e': `${batchNameInput}` }
    };


    console.log(`{':batch_name_e': '${batchNameInput}'`);

    const documentClient = new DocumentClient({ convertEmptyValues: true });

    const resultQ = await documentClient.query(params).promise(); // as soon as await hits control is released to calling

    const records: JobStagingRecord[] = (resultQ.Items as JobStagingRecord[]) || [];

    if (records.length === 0) {
        const error_message = 'no records on the job table';
        console.log(error_message);
        console.log('response is later2');
        return []; // throw new Error(error_message);
    }


    records.forEach(function (x) { console.log(x); });
    console.log('response is later');
    const arrayOfReferenceIds = records.map(({ reference_id }) => reference_id);

    return arrayOfReferenceIds;

};


interface JobStagingRecordIndex {
    id: string;
    batch_name: string;
    reference_id: string;
}
const getJobStagingTableRecordsForResponses = async function (listReferenceIDs?: string[]) {

    // let stringReferenceList = '[';

    // key array ,  object array
    const map1 = new Map<string, string>;
    let builtExpressionTokens = ' reference_id IN (';

    const keysArray = Object.keys(listReferenceIDs);

    listReferenceIDs.forEach((val, idx, arr) => {
        console.log(`values ${idx}, ${val}`);
        builtExpressionTokens = builtExpressionTokens.concat(` :${idx}  ,`);
        map1.set(`:${idx}`, val);
    });
    builtExpressionTokens = builtExpressionTokens.replace(/,*$/, '').concat(' ) And contains (batch_name , :batch_name)');

    map1.forEach((v, k, map2) => console.log('map z', v, k));

    const builtExpressionAttributeValuesA = buildExpressionAttributeValues(map1);
    builtExpressionAttributeValuesA[':batch_name'] = 'response';
    process.env.STAGING_TABLE = 'aws_ph_job_staging';
    const params: DocumentClient.ScanInput = {
        TableName: 'aws_ph_job_staging',
        FilterExpression: builtExpressionTokens,
        ExpressionAttributeValues: builtExpressionAttributeValuesA
    };

    const documentClient = new DocumentClient({ convertEmptyValues: true });

    const resultQ = await documentClient.scan(params).promise(); // as soon as await hits control is released to calling code

    const records: JobStagingRecord[] = (resultQ.Items as JobStagingRecord[]) || [];

    if (records.length === 0) {
        const error_message = 'no records on the job table';
        console.log(error_message);
        console.log('response is later2'); // payment-paid-response#2022-07-14T09:00:48.134Z
        return [];
    }

    const arrayOfReferenceIds = records.map(({ reference_id }) => reference_id);

    return arrayOfReferenceIds;

};

const findRequestsForWhichWeHaveNoResponses = async function (resultsOfRequests?: string[]) {

    const resultsOfResonses = await getJobStagingTableRecordsForResponses(resultsOfRequests);

    resultsOfRequests.forEach(element => console.log(element));
    const missing: string[] = resultsOfRequests.filter(item => resultsOfResonses.indexOf(item) < 0);
    missing.forEach(function (x) { console.log('missing records ' + x); });

    return missing;

};

getJobStagingTableRecordsOutputAllRefIDs('payment-paid-file-creation#2022-07-14T09:00:48.134Z').
    then(resultsOfRequests => findRequestsForWhichWeHaveNoResponses(resultsOfRequests)).
    then(missingEntries => {
        (missingEntries.length === 0) ? console.log(' no missing records:  ' + missingEntries.length) :
        console.log(' no missing records:  ' + missingEntries.length); console.log('--end--');
    });



    console.log('--end of code--');