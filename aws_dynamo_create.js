"use strict";
exports.__esModule = true;
/* import express = require('express'); vs var AWS = require('aws-sdk'); javascript*/
var aws = require("aws-sdk");
//set region
//aws.config.update({region: 'REGION'});
var credentials = new aws.SharedIniFileCredentials({ profile: 'local' });
aws.config.credentials = credentials;
var ddb = new aws.DynamoDB();
//aws.config.dynamodb({endp})
/*

Scalars
--------
Numbers − They are limited to 38 digits, and are either positive, negative, or zero.
String − They are Unicode using UTF-8, with a minimum length of >0 and maximum of 400KB.
Binary − They store any binary data, e.g., encrypted data, images, and compressed text. DynamoDB views its bytes as unsigned.
Boolean − They store true or false.
Null − They represent an unknown or undefined state.


Parttion key  and sort key,

*/
//aws.config.update({ region: 'ap-southeast-1', endpoint: 'http://localhost:8000' });
//key below is composite ke
var params = {
    AttributeDefinitions: [
        {
            AttributeName: 'Customer_Id',
            AttributeType: 'N'
        },
        { AttributeName: 'Customer_Name',
            AttributeType: 'N'
        }
    ],
    KeySchema: [
        {
            AttributeName: 'Customer_Id',
            KeyType: 'HASH'
        },
        {
            AttributeName: 'Customer_Id',
            KeyType: 'RANGE'
        }
    ],
    ProvisionedThroughput: {
        ReadCapacityUnits: 1,
        WriteCapacityUnits: 1
    },
    TableName: 'Customer_List',
    StreamSpecification: {
        StreamEnabled: false
    }
};
ddb.createTable(params, function (err, data) {
    if (err) {
        console.log("error", err);
    }
    else {
        console.log("Table Created", data);
    }
});
//DocDB.createTable(params, function)
