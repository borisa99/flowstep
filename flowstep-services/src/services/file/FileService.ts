import fs from 'fs'
import { ServiceResponse } from '@/models/ServiceResponse'
import { s3 } from '@/shared/aws'
import { UploadedFile } from 'express-fileupload'
import { Service } from 'typedi'
import { IFileService } from './IFileService'

@Service()
export class FileService implements IFileService {
  async upload(
    file: UploadedFile | undefined
  ): Promise<ServiceResponse<string>> {
    const response: ServiceResponse<string> = new ServiceResponse<string>()
    try {
      if (!file) {
        response.status = 400
        response.error = 'No file was uploaded'
        return response
      }
      const fileContent = fs.readFileSync(file.tempFilePath)

      // Setting up S3 upload parameters
      const params = {
        Bucket: <string>process.env.AWS_S3_BUCKET_NAME,
        Key: Math.floor(+new Date() / 1000) + file.name, // File name you want to save as in S3
        Body: fileContent,
        ACL: 'public-read',
        ContentType: file.mimetype,
      }

      const { Location } = await s3.upload(params).promise()

      response.payload = Location
      return response
    } catch (error: any) {
      response.status = 500
      response.error = error.message
    }
    return response
  }
}
