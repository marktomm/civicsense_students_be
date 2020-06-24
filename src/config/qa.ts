
const qa = {
    port: process.env.PORT,
    covidTracker: process.env.COVID_TRACKER,
    db: {
        connectionString: process.env.MONGO_CONNECTION
    },
    otp: {
        mobile: {
            expiry: '',
            length: '',
            templateId: process.env.OTP_TEMPLATE_ID,
            authKey: process.env.OTP_AUTHKEY,
            invisible: '',
            baseUrl: process.env.OTP_URL
        }
    },
    s3: {
        taskBucketName : process.env.TASK_BUCKET_NAME,
        assetBucketName : process.env.ASSET_BUCKET_NAME,
        publicBucketName: process.env.PUBLIC_BUCKET_NAME,
        kmlId: process.env.KMLID,
        healthkmlId: process.env.HEALTH_KMLID,
        testkmlId: process.env.TEST_KMLID
    },
    aws: {
        accessKey :  process.env.ACCESS_KEY,
        secretAccessKey : process.env.SECRETACCESSKEY
    },
    sns: {
        applicationArn: process.env.APPLICATION_ARN,
        region: process.env.REGION
    },
    static: {
        campaignId: process.env.POSITIVE_TRACKER_CAMP_ID,
        photoHost: process.env.PHOTO_HOST
    }
};
export default qa;
