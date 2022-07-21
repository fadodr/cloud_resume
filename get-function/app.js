const AWS = require('aws-sdk');
AWS.config.update({region:'us-east-1'});
const docClient = new AWS.DynamoDB.DocumentClient();

const params = {
    TableName: 'my-resume-challenge',
    Key: {
        'ID' : 'visitor'
    }
}

async function getItem(){
  try {
    const data = await docClient.get(params).promise()
    return data
  } catch (err) {
    return err
  }
}

exports.lambdaHandler = async (event, context) => {
    try {
        // const ret = await axios(url);
        const data = await getItem()
        response = {
            'statusCode': 200,
            headers: {
                "Access-Control-Allow-Credentials": true,
                "Access-Control-Allow-Headers" : "*",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "*",
                "Content-Type": "application/json",
            },
            'body': JSON.stringify({
                count : data
                // location: ret.data.trim()
            })
        }
    } catch (err) {
        return err;
    }

    return response
};
