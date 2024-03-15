export function createErrorMessage(errorData: any) {
  let errorMessage = ''

  if (errorData?.body?.message) {
    errorMessage = errorData.body.message
    if (errorMessage.split(':')[1]) errorMessage = errorMessage.split(':')[1].trim()
  } else {
    errorMessage = errorData.toString()
  }

  return errorMessage
}

export function downloadBlob(blob: Blob, filename: string) {
  const url = URL.createObjectURL(blob)
  let a = document.createElement('a')
  a.href = url
  a.download = filename
  a.click()
  URL.revokeObjectURL(url)
}
