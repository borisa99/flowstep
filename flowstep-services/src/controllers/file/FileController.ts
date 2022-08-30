import { Service } from 'typedi'
import { Response, Request } from 'express'
import fileUpload from 'express-fileupload'
import { FileService } from '@/services/file/FileService'
import { serviceResponseHandler } from '@/shared/serviceResponseHandler'
import { fork } from 'child_process'
import { ServiceResponse } from '@/models/ServiceResponse'

@Service()
export class FileController {
  constructor(private readonly fileService: FileService) {}
  uploadOptimizeVideo = async (req: Request, res: Response): Promise<void> => {
    try {
      const file = <fileUpload.UploadedFile | undefined>(
        Object.values(req.files ?? {})[0]
      )
      if (!file) {
        res.status(400).send('No file')
      } else {
        // Create a new child process
        const child = fork('src/controllers/file/video.ts')
        // Send message to child process
        child.send({
          tempFilePath: file.tempFilePath,
          name: file.name,
          mimetype: file.mimetype,
        })
        // Listen for message from child process
        child.on('message', (response: ServiceResponse<string>) => {
          serviceResponseHandler(res, response)
        })
      }
    } catch (error: any) {
      res.status(500).send({ message: error.message })
    }
  }
  upload = async (req: Request, res: Response): Promise<void> => {
    try {
      const file = <fileUpload.UploadedFile | undefined>(
        Object.values(req.files ?? {})[0]
      )
      serviceResponseHandler(res, await this.fileService.upload(file))
    } catch (error: any) {
      res.status(500).send({ message: error.message })
    }
  }
}
