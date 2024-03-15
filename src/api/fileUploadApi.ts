import axios from 'axios'

export class FileUploadService {
  /**
   * @param fileGuid
   * @returns any OK
   * @throws ApiError
   */
  public static downloadFile(fileGuid: string) {
    return axios.get<Blob>('/download-file', {
      headers: {
        Accept: 'application/octet-stream'
      },
      params: { fileGuid },
      responseType: 'blob'
    })
  }
}
