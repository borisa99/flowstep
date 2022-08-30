import { ServiceResponse } from '@/models/ServiceResponse'
import { UploadedFile } from 'express-fileupload'
export interface IFileService {
  upload(file: UploadedFile | undefined): Promise<ServiceResponse<string>>
}
