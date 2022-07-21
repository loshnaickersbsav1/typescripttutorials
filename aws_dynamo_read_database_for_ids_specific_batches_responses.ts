import * as aws from 'aws-sdk';
import { DocumentClient } from 'aws-sdk/clients/dynamodb';
// import { unmarshall } from '@aws-sdk/util-dynamodb';
// import * as staging_table from './allstaging_table_exports.json';
// import * as payments from "./all_payments.json";
// set region
// aws.config.update({region: 'REGION'});
// list of Payment events
// payment-paid-file-creation#2022-06-22T02:00:44.584Z
// payment-request-file-creation#2022-06-22T02:00:24.421Z
// payment-issued-file-creation#2022-06-22T02:00:23.347Z
// payment-reversal-file-creation#2022-06-30T02:00:42.120Z
const credentials = new aws.SharedIniFileCredentials({ profile: 'test' });
aws.config.credentials = credentials;
aws.config.update({ region: 'us-east-1' });
const ddb = new aws.DynamoDB();
const listOfFiles: string[] = ['payment-issued-response-rejected#2022-06-22T07:00:25.124Z',
    'payment-issued-response-accepted#2022-06-22T07:00:25.929Z',
    'payment-paid-rejected-response#2022-06-22T09:00:49.708Z',
    'payment-paid-response#2022-06-22T09:00:48.134Z',
    'payment-request-response-rejected#2022-06-22T07:00:24.747Z',
    'payment-request-response-accepted#2022-06-22T07:00:34.608Z'
];


const getJobStagingRequest = async (filename) => {

    // IndexName: 'batch_name-index',
    const params: DocumentClient.QueryInput = {
        TableName: `paymenthub-tdu-service-infrastructure-test-job-staging-notif-table-v2`,
        KeyConditionExpression: `batch_name = :batch_name_e`,
        ExpressionAttributeValues: {
            ':batch_name_e': filename
        }
    };

    const documentClient = new DocumentClient({ convertEmptyValues: true });
    const resultQ = await documentClient.query(params).promise();

    if (resultQ) {
        // console.log('items found');
        // unmarshalled
        // const unmarshalled = resultQ.Items.map((i) => unmarshall(i));
        // const ids = resultQ.Items.forEach(element => element.id);
        resultQ.Items.forEach(async function (element, index, array) {
            const out = await getPaymentsTable(element.id).then(pay => pay);
            console.log(element.id + '|' + element.batch_name + '|' + out);
        }
        );
        // console.log(` unmarshalled ${unmarshalled}`);
        // return unmarshalled;
    } else {
        console.log('No - items found');
        return `${filename}`;
    }

};


const getPaymentsTable = async (idInput) => {

    // IndexName: 'GSI_PAYMENT_NUMBER', all fields not projected.
    //  KeyConditionExpression: `payment_number = :id_e`,

    const params: DocumentClient.QueryInput = {
        TableName: `paymenthub-tdu-service-infrastructure-test-payment`,
        FilterExpression: 'payment_number = :id_e',
        ExpressionAttributeValues: {
            ':id_e': idInput
        }
    };

    const documentClient = new DocumentClient({ convertEmptyValues: true });
    const resultQ = await documentClient.scan(params).promise();

    if (resultQ.Count > 0) {
        // promise result can come accross into items
        // const paymentpaid: BasePaymentRecord[] = (resultQ.Items as BasePaymentRecord[]) || [];
        // console.log(` items found ${paymentpaid[0].tdu_correlation_id}`);
        // console.log(` items found ${resultQ.Count}`);
        let output;
        resultQ.Items.forEach(async function (element, index, array) {
            // array.map(function (val, idx) {

            //     // printing element
            //     console.log(' key : ', idx, 'value : ', val);
            // });
            // console.log(` elements ${newArr}`);
            output = element.tdu_correlation_id;
        });
        return output;
    } else {
        return `No - items found : ${idInput} `;
    }

};


listOfFiles.forEach(x => {
    console.log(` x is ${x}`);

    // read dynamo staging table for these records

    getJobStagingRequest(x).then()
        .catch(err => console.log(` error with data retrieval ${err}`));
    // read payment records to get the correlation id s
    // write to an output file json - id , correlation id Or write
});
// getPaymentsTable('NAVIGATOR-0d43a1b0-ed77-11ec-9d50-1378505ad6b0-PAYMENT_PAID');
