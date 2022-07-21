import { DynamoDB } from 'aws-sdk';
import { DocumentClient } from 'aws-sdk/clients/dynamodb';
import * as uuid from 'uuid';

// const AWS = require('aws-sdk')
import * as AWS from 'aws-sdk';

const credentials = new AWS.SharedIniFileCredentials({ profile: 'sand' });
AWS.config.credentials = credentials;

AWS.config.update({ region: 'us-east-1' });

const tableName: string = "AWSTESTTable";
const documentClient = new DocumentClient({ convertEmptyValues: true })
const dynamoDb = new DynamoDB();
let numberz = 123;

const addSong = async (Artist, SongTitle) => {

  // let nump:number  = numberz + 1;
  // console.log(` here s the id : ${nump}`,);
  const params: DocumentClient.PutItemInput = {

    TableName: `${tableName}`,
    Item: {
      SongId: uuid.v4(),
      Artist,
      SongTitle
    }
  }
  try {
    await documentClient.put(params).promise()
  } catch (error) {
    console.log(`${error}\n`)
  }
}

const listSongs = async () => {
  const documentClient = new DocumentClient({ convertEmptyValues: true })
  const params: DocumentClient.ScanInput = {
    TableName: `${tableName}`
  }
  let scanResults: any[] = []
  let items
  do {
    items = await documentClient.scan(params).promise()
    items.Items.forEach((item) => scanResults.push(item))
    params.ExclusiveStartKey = items.LastEvaluatedKey
  } while (typeof items.LastEvaluatedKey != 'undefined')
  scanResults.forEach(song => console.log(`Artist: ${song.Artist} \t\t Song: ${song.SongTitle}\n`))
}

const init = async (dynamoDb: DynamoDB) => {
  const tables = await dynamoDb.listTables().promise();
  //if (!tables.TableNames!.find(table => table === `${tableName}`)) {
  console.log(`Initialising ${tableName} table in local DynamoDB\n`);
  //await createTable(dynamoDb)
  await addSong('Tailor Swift', 'I knew you were Trousers');
  await addSong('Billie Radish', 'Bad root');
  await listSongs()
  
}




const createTable = async (dynamodb: DynamoDB) => {
  var params = {
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
    TableName: `${tableName}`
  }
  try {
    await dynamodb.createTable(params).promise();
    console.log(`Table created : ${tableName}`);

  } catch (error) {
    console.log(error);

  }

}

const updateSong = async (artist, oldTitle, newTitle) => {
  const paramsUpdate: DocumentClient.UpdateItemInput = {
    TableName: `${tableName}`,
    Key: {
      Artist: artist
    },
    ConditionExpression: 'SongTitle = :st',
    UpdateExpression: 'set SongTitle = :attrValue',
    ExpressionAttributeValues: {
      ':attrValue': newTitle,
      ':st': oldTitle
    }
  }
  try {
    await documentClient.update(paramsUpdate).promise()
  } catch (error) {
    console.log(error)
  }
}


const getSong = async (Artist, SongTitle) => {
  const params: DocumentClient.QueryInput = {
    TableName: `${tableName}`,
    KeyConditionExpression: '',
    ExpressionAttributeValues: {
      ':at': Artist,
      ':st': SongTitle
    }
  }
  const documentClient = new DocumentClient({ convertEmptyValues: true })
  const result = await documentClient.query(params).promise()
  if (result.Items![0]) {
    return result.Items![0]
  } else {
    return `Song '${SongTitle}' by ${Artist} not found.\n`
  }
};


init(dynamoDb);