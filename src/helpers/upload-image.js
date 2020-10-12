import AWS from 'aws-sdk';
import { v4 as uuidv4 } from 'uuid';

require('dotenv').config();

AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_ID,
  secretAccessKey: process.env.AWS_SECRET_KEY,
  region: process.env.AWS_REGION,
});

const s3 = new AWS.S3({ region: process.env.AWS_REGION });

const s3DefaultParams = {
  ACL: 'public-read',
  Bucket: process.env.S3_BUCKET_NAME,
  Conditions: [
    ['content-length-range', 0, 1024000], // 1 Mb
    { acl: 'public-read' },
  ],
};

const handleImageUpload = async (file) => {
  const { createReadStream, filename } = await file;

  const key = uuidv4();

  return new Promise((resolve, reject) => {
    s3.upload(
      {
        ...s3DefaultParams,
        Body: createReadStream(),
        Key: `${key}/${filename}`,
      },
      (err, data) => {
        if (err) {
          // eslint-disable-next-line no-console
          console.log('error uploading...', err);
          reject(err);
        } else {
          // eslint-disable-next-line no-console
          console.log('successfully uploaded file...', data);
          resolve(data);
        }
      }
    );
  });
};

export default handleImageUpload;
