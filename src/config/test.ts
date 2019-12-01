const test =  {
    port: process.env.PORT,
    db: {
        connectionString: process.env.MONGO_CONNECTION
    },
    s3: {
        bucketName : process.env.BUCKET_NAME
    },
    aws: {
        accessKey :  process.env.ACCESS_KEY,
        secretAccessKey : process.env.SECRETACCESSKEY
    },
    sns: {
        applicationArn: process.env.APPLICATION_ARN,
        region: process.env.REGION
    }
};
export default test;
