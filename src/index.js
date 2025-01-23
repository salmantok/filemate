import { open } from 'node:fs/promises'

export async function filemate(filePath) {
  let filehandle
  try {
    filehandle = await open(filePath, 'r')
    const content = await filehandle.readFile({ encoding: 'utf8' })
    return content // Mengembalikan isi file
  } finally {
    await filehandle?.close()
  }
}
