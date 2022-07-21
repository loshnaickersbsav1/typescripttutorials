import * as dynamodb from '@aws-sdk/client-dynamodb';
import * as PutCommand from '@aws-sdk/lib-dynamodb';
import * as aws from 'aws-sdk';

let dynamoDb;
try {
    const credentials = new aws.SharedIniFileCredentials({ profile: 'sand' });
    aws.config.credentials = credentials;
    aws.config.update({ region: 'us-east-1' });
    dynamoDb = new dynamodb.DynamoDB({ region: 'us-east-1' });
} catch (error) {
    console.log('error with connection');
}

const tableName = 'aws_ph_job_staging';

const listOfFiles: string[] = ['payment-issued-response-rejected#2022-06-22T07:00:25.124Z',
    'payment-issued-response-accepted#2022-06-22T07:00:25.929Z',
    'payment-paid-rejected-response#2022-06-22T09:00:49.708Z',
    'payment-paid-response#2022-06-22T09:00:48.134Z',
    'payment-request-response-rejected#2022-06-22T07:00:24.747Z',
    'payment-request-response-accepted#2022-06-22T07:00:34.608Z'
];

interface JobStagingRecord {
    id: string;
    missing_record?: string;
    missing_record_error?: string;
    batch_name: string;
    batch_start_time: string;
    error?: string;
    ttl?: number;
    reference_id?: string;
}


const staging_input_records: JobStagingRecord[] = [
    { id: 'sloshEntry1', ttl: 1656143065219, batch_start_time: '2022-06-25T07:00:35.476Z', batch_name: 'payment-paid-response#2022-07-14T09:00:48.134Z', reference_id: 'x0001' },
    { id: 'sUlyses2a', ttl: 1656143065219, batch_start_time: '2022-06-25T07:00:35.476Z', batch_name: 'payment-paid-response#2022-07-14T09:00:48.134Z', reference_id: 'x0002' },
    { id: 'sUlyses3a', ttl: 1656143065219, batch_start_time: '2022-06-25T07:00:35.476Z', batch_name: 'payment-paid-response#2022-07-14T09:00:48.134Z', reference_id: 'x0003' },
    { id: 'sUlyses4a', ttl: 1656143065219, batch_start_time: '2022-06-25T07:00:35.476Z', batch_name: 'payment-paid-response#2022-07-14T09:00:48.134Z', reference_id: 'x0004' },
    { id: 'sUlyses5a', ttl: 1656143065219, batch_start_time: '2022-06-25T07:00:35.476Z', batch_name: 'payment-paid-response-rejection#2022-07-14T09:00:48.134Z', reference_id: 'x0005' },
    { id: 'sUlyses6a', ttl: 1656143065219, batch_start_time: '2022-06-25T07:00:35.476Z', batch_name: 'payment-paid-file-creation#2022-07-14T09:00:48.134Z', reference_id: 'x0001' },
    { id: 'sUlyses7a', ttl: 1656143065219, batch_start_time: '2022-06-25T07:00:35.476Z', batch_name: 'payment-paid-file-creation#2022-07-14T09:00:48.134Z', reference_id: 'x0002' },
    { id: 'sUlyses7b', ttl: 1656143065219, batch_start_time: '2022-06-25T07:00:35.476Z', batch_name: 'payment-paid-file-creation#2022-07-14T09:00:48.134Z', reference_id: 'x0003' },
    { id: 'sUlyses9c', ttl: 1656143065219, batch_start_time: '2022-06-25T07:00:35.476Z', batch_name: 'payment-paid-file-creation#2022-07-14T09:00:48.134Z', reference_id: 'x0004' },
    { id: 'sUlyses10a', ttl: 1656143065219, batch_start_time: '2022-06-25T07:00:35.476Z', batch_name: 'payment-paid-file-creation#2022-07-14T09:00:48.134Z', reference_id: 'x0004' }
];
const addAllDataElements =  (stagingRecords: JobStagingRecord) => {

    try {
    const params: aws.DynamoDB.PutItemInput = {
        TableName: `${tableName}`,
        Item: {
            'id': {S: stagingRecords.id},
            'batch_name': {S: stagingRecords.batch_name},
            'batch_start_time': {S: stagingRecords.batch_start_time},
            'ttl': { N : '1656143065219'},
            'reference_id' : {S: stagingRecords.reference_id}
        }
    };


        console.log(`${stagingRecords.reference_id} and ${stagingRecords.batch_name}\n`);
        dynamoDb.pt(params);
        console.log(`${params}`);
    } catch (error) {
        console.log(`${error}\n`);
    }
};
console.log(` Start \n`);
for (const jobStagingRecord of staging_input_records) {
    //  console.log(` record ${jobStagingRecord.reference_id} and ${jobStagingRecord.batch_name} and  \n`);
    addAllDataElements(jobStagingRecord);

}
console.log(` End \n`);

// aws dynamodb execute-statement --statement "INSERT INTO aws_ph_job_staging VALUE
// { 'id': 'loshEntry2', 'ttl': 1656143065219, 'batch_start_time': '2022-06-25T07:00:35.476Z',
// 'batch_name': 'payment-paid-response#2022-07-14T09:00:48.134Z', 'reference_id': 'x0001' }" --profile=sand


aws dynamodb put-item --table  aws_ph_job_staging --item  file://item.json --profile=sand
