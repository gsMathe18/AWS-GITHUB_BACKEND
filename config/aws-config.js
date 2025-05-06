// const AWS = require('aws-sdk');

// AWS.config.update({
//   region: 'ap-south-1'});

// const s3 = new AWS.S3();
// const S3_BUCKET = "sampleebuckt";

// module.exports = { s3, S3_BUCKET };


// aws-config.js
const AWS = require('aws-sdk');

// The AWS SDK automatically uses the credentials set up via the AWS CLI
AWS.config.update({ region: 'ap-south-1' }); // Update with your region

const s3 = new AWS.S3();
const S3_BUCKET = 'sampleebuckt'; // Replace with your S3 bucket name

module.exports = { s3, S3_BUCKET };





