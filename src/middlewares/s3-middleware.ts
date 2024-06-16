import { S3 } from "@aws-sdk/client-s3";
import { Upload } from "@aws-sdk/lib-storage";

export const s3 = new S3({
    region: process.env.AWS_REGION!,
    credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!
    }
})


export const listBuckets = async () => {
    await s3
        .listBuckets()
        .then((res) => console.log(res.Buckets))
        .catch((error) => console.log(`Error listing buckets: ${error.Code}`))
}

export const createBucket = async (bucketName : string) => {
    await s3
        .createBucket({Bucket : bucketName})
        .then((res) => console.log(res))
        .catch((error) => console.log(`Error listing buckets: ${error.Code}`))
}

export const uploadFile = async (bucketName: string, file: Buffer, key: string) => {
    const upload = new Upload({
        client: s3,
        params: {
            Bucket: bucketName,
            Key: key,
            Body: file,
            ACL : "public-read"
        }
    })

    await upload
        .done()
        .then((response) => {console.log(response)})
        .catch((error) => {console.log(error.Code)})
}



export const deleteBucket = async (bucketName: string) => {
    await s3
        .deleteBucket({Bucket: bucketName})
        .then((response) => {console.log(response)})
        .catch((error) => {console.log(error.Code)})
}