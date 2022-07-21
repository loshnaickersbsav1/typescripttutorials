"use strict";
exports.__esModule = true;
/* import express = require('express'); vs var AWS = require('aws-sdk'); javascript*/
var aws = require("aws-sdk");
//import * as staging_table from './allstaging_table_exports.json';
//import * as payments from "./all_payments.json";
var readfile_1 = require("./readfile");
//set region
//aws.config.update({region: 'REGION'});
var credentials = new aws.SharedIniFileCredentials({ profile: 'test' });
aws.config.credentials = credentials;
aws.config.update({ region: "us-east-1" });
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
//DocDB.createTable(params, function)
// list of Payment events
//payment-paid-file-creation#2022-06-22T02:00:44.584Z
//payment-request-file-creation#2022-06-22T02:00:24.421Z
//payment-issued-file-creation#2022-06-22T02:00:23.347Z
//retrieve all the requests records , using the batchname
//loop through retrieve all the responses using the correlation id - if not found send an email or slack
//payment-reversal-file-creation#2022-06-30T02:00:42.120Z
// if error found 
// cr
// Read input file of records 
//const file1  = JSON.parse (payments ) ;
(0, readfile_1["default"])('./payments.json', function (err, data) {
    if (err) {
        console.log('Error reading file !');
    }
    else {
        console.log(data);
    }
});
