"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var aws_sdk_1 = require("aws-sdk");
var dynamodb_1 = require("aws-sdk/clients/dynamodb");
var uuid = require("uuid");
//const AWS = require('aws-sdk')
var AWS = require("aws-sdk");
var credentials = new AWS.SharedIniFileCredentials({ profile: 'sand' });
AWS.config.credentials = credentials;
AWS.config.update({
    region: "us-east-1"
});
var tableName = "AWSTESTTable";
var documentClient = new dynamodb_1.DocumentClient({ convertEmptyValues: true });
var dynamoDb = new aws_sdk_1.DynamoDB();
var numberz = 123;
var addSong = function (Artist, SongTitle) { return __awaiter(void 0, void 0, void 0, function () {
    var params, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                params = {
                    TableName: "".concat(tableName),
                    Item: {
                        SongId: uuid.v4(),
                        Artist: Artist,
                        SongTitle: SongTitle
                    }
                };
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, documentClient.put(params).promise()];
            case 2:
                _a.sent();
                return [3 /*break*/, 4];
            case 3:
                error_1 = _a.sent();
                console.log("".concat(error_1, "\n"));
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
var listSongs = function () { return __awaiter(void 0, void 0, void 0, function () {
    var documentClient, params, scanResults, items;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                documentClient = new dynamodb_1.DocumentClient({ convertEmptyValues: true });
                params = {
                    TableName: "".concat(tableName)
                };
                scanResults = [];
                _a.label = 1;
            case 1: return [4 /*yield*/, documentClient.scan(params).promise()];
            case 2:
                items = _a.sent();
                items.Items.forEach(function (item) { return scanResults.push(item); });
                params.ExclusiveStartKey = items.LastEvaluatedKey;
                _a.label = 3;
            case 3:
                if (typeof items.LastEvaluatedKey != 'undefined') return [3 /*break*/, 1];
                _a.label = 4;
            case 4:
                scanResults.forEach(function (song) { return console.log("Artist: ".concat(song.Artist, " \t\t Song: ").concat(song.SongTitle, "\n")); });
                return [2 /*return*/];
        }
    });
}); };
var init = function (dynamoDb) { return __awaiter(void 0, void 0, void 0, function () {
    var tables;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, dynamoDb.listTables().promise()
                //if (!tables.TableNames!.find(table => table === `${tableName}`)) {
            ];
            case 1:
                tables = _a.sent();
                //if (!tables.TableNames!.find(table => table === `${tableName}`)) {
                console.log("Initialising ".concat(tableName, " table in local DynamoDB\n"));
                //await createTable(dynamoDb)
                return [4 /*yield*/, addSong('Tailor Swift', 'I knew you were Trousers')];
            case 2:
                //await createTable(dynamoDb)
                _a.sent();
                return [4 /*yield*/, addSong('Billie Radish', 'Bad root')];
            case 3:
                _a.sent();
                return [4 /*yield*/, listSongs()
                    //} else {
                    //    console.log(`Table already found - skipping init. (Check shared-local-instance.db file)\n`)
                    //}
                ];
            case 4:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); };
var createTable = function (dynamodb) { return __awaiter(void 0, void 0, void 0, function () {
    var params, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                params = {
                    AttributeDefinitions: [
                        {
                            AttributeName: "Artist",
                            AttributeType: "S"
                        }
                    ],
                    KeySchema: [
                        {
                            AttributeName: "Artist",
                            KeyType: "HASH"
                        }
                    ],
                    ProvisionedThroughput: {
                        ReadCapacityUnits: 5,
                        WriteCapacityUnits: 5
                    },
                    TableName: "".concat(tableName)
                };
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, dynamodb.createTable(params).promise()];
            case 2:
                _a.sent();
                console.log("Table created : ".concat(tableName));
                return [3 /*break*/, 4];
            case 3:
                error_2 = _a.sent();
                console.log(error_2);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
var updateSong = function (artist, oldTitle, newTitle) { return __awaiter(void 0, void 0, void 0, function () {
    var paramsUpdate, error_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                paramsUpdate = {
                    TableName: "".concat(tableName),
                    Key: {
                        Artist: artist
                    },
                    ConditionExpression: 'SongTitle = :st',
                    UpdateExpression: 'set SongTitle = :attrValue',
                    ExpressionAttributeValues: {
                        ':attrValue': newTitle,
                        ':st': oldTitle
                    }
                };
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, documentClient.update(paramsUpdate).promise()];
            case 2:
                _a.sent();
                return [3 /*break*/, 4];
            case 3:
                error_3 = _a.sent();
                console.log(error_3);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
var getSong = function (Artist, SongTitle) { return __awaiter(void 0, void 0, void 0, function () {
    var params, documentClient, result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                params = {
                    TableName: "".concat(tableName),
                    KeyConditionExpression: '',
                    ExpressionAttributeValues: {
                        ':at': Artist,
                        ':st': SongTitle
                    }
                };
                documentClient = new dynamodb_1.DocumentClient({ convertEmptyValues: true });
                return [4 /*yield*/, documentClient.query(params).promise()];
            case 1:
                result = _a.sent();
                if (result.Items[0]) {
                    return [2 /*return*/, result.Items[0]];
                }
                else {
                    return [2 /*return*/, "Song '".concat(SongTitle, "' by ").concat(Artist, " not found.\n")];
                }
                return [2 /*return*/];
        }
    });
}); };
init(dynamoDb);
