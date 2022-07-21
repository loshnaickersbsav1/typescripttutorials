"use strict";
exports.__esModule = true;
var aws = require("aws-sdk");
// import { DynamoDB } from 'aws-sdk/clients/';
// import * as DynamoDB from 'aws-sdk/clients/dynamodb';
// let ddb;
// let documentClient;
var dynamoDb;
try {
    var credentials = new aws.SharedIniFileCredentials({ profile: 'sand' });
    aws.config.credentials = credentials;
    aws.config.update({ region: 'us-east-1' });
    dynamoDb = new aws.DynamoDB();
    // documentClient = new DocumentClient({ convertEmptyValues: true });
    // dynamoDb = new DynamoDB();
}
catch (error) {
    console.log('error with connection');
}
var tableName = 'aws_ph_job_staging';
var listOfFiles = ['payment-issued-response-rejected#2022-06-22T07:00:25.124Z',
    'payment-issued-response-accepted#2022-06-22T07:00:25.929Z',
    'payment-paid-rejected-response#2022-06-22T09:00:49.708Z',
    'payment-paid-response#2022-06-22T09:00:48.134Z',
    'payment-request-response-rejected#2022-06-22T07:00:24.747Z',
    'payment-request-response-accepted#2022-06-22T07:00:34.608Z'
];
var staging_input_records = [
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
var addAllDataElements = function (stagingRecords) {
    try {
        var params = {
            TableName: "".concat(tableName),
            Item: {
                'id': { S: stagingRecords.id },
                'batch_name': { S: stagingRecords.batch_name },
                'batch_start_time': { S: stagingRecords.batch_start_time },
                'ttl': { N: '1656143065219' },
                'reference_id': { S: stagingRecords.reference_id }
            }
        };
        console.log("".concat(stagingRecords.reference_id, " and ").concat(stagingRecords.batch_name, "\n"));
        dynamoDb.putItem(params);
        console.log("".concat(params));
    }
    catch (error) {
        console.log("".concat(error, "\n"));
    }
};
console.log(" Start \n");
for (var _i = 0, staging_input_records_1 = staging_input_records; _i < staging_input_records_1.length; _i++) {
    var jobStagingRecord = staging_input_records_1[_i];
    //  console.log(` record ${jobStagingRecord.reference_id} and ${jobStagingRecord.batch_name} and  \n`);
    addAllDataElements(jobStagingRecord);
}
console.log(" End \n");
//  partiql shows duplicate
// aws dynamodb execute-statement --statement "INSERT INTO aws_ph_job_staging VALUE
// { 'id': 'loshEntry2', 'ttl': 1656143065219, 'batch_start_time': '2022-06-25T07:00:35.476Z',
// 'batch_name': 'payment-paid-response#2022-07-14T09:00:48.134Z', 'reference_id': 'x0001' }" --profile=sand

// other doesn't 
// aws dynamodb put-item --table  aws_ph_job_staging --item  file://item.json --profile=sand
