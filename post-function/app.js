const AWS = require('aws-sdk')
AWS.config.update({region:'us-east-1'});
const docClient = new AWS.DynamoDB.DocumentClient()

var params = {
    TableName: "my-resume-challenge",
    Key:{
        "ID": "visitor"
    },
    UpdateExpression: "ADD visitor :val",
    ExpressionAttributeValues:{
        ":val": 1
    },
  };

async function updateItem(){
  try {
    await docClient.update(params).promise();
  } catch (err) {
    return err;
  }
}

exports.lambdaHandler = async (event, context) => {
    try {
        // const ret = await axios(url);
        await updateItem()
        response = {
            'statusCode': 200,
            headers: {
                "Access-Control-Allow-Credentials": true,
                "Access-Control-Allow-Headers" : "*",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "*",
                "Content-Type": "application/json",
            },
        }
    } catch (err) {
        console.log(err.message);
        return err;
    }

    return response
};
