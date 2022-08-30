import fs from 'fs'
import ffmpeg from 'fluent-ffmpeg'
import { s3 } from '@/shared/aws'
import { ServiceResponse } from '@/models/ServiceResponse'

process.on('message', (payload: any) => {
  const response = new ServiceResponse<string>()

  const { tempFilePath, name, mimetype } = payload

  const fileDestination = `temp/${name}`
  const endProcess = () => {
    // Remove temp file
    fs.unlink(tempFilePath, err => {
      if (err) {
        process.send && process.send({ statusCode: 500, text: err.message })
      }
    })
    // if success remove  file
    if (response.status === 200) {
      fs.unlink(fileDestination, err => {
        if (err) {
          process.send && process.send({ statusCode: 500, text: err.message })
        }
      })
    }
    // Format response so it fits the api response
    process.send && process.send(response)
    // End process
    process.exit()
  }
  // Process video and send back the result
  ffmpeg(tempFilePath)
    .fps(30)
    .addOptions(['-crf 28'])
    .on('end', async () => {
      const fileContent = fs.readFileSync(fileDestination)

      // // Uplaod to S3
      const params = {
        Bucket: <string>process.env.AWS_S3_BUCKET_NAME,
        Key: Math.floor(+new Date() / 1000) + name, // File name you want to save as in S3
        Body: fileContent,
        ACL: 'public-read',
        ContentType: mimetype,
      }

      const { Location } = await s3.upload(params).promise()

      response.payload = Location
      response.status = 200
      endProcess()
    })
    .on('error', (err: any) => {
      response.statusCode = 500
      response.error = err.message
      endProcess()
    })
    .save(fileDestination)
})
