# filemate

> filemate untuk membaca file secara asynchronous

_Dirancang untuk menangani operasi I/O file dengan aman menggunakan fitur modern seperti `async/await` dan `fs/promises`._

## Instalasi

```bash
npm install filemate
```

## API

### `filemate(filePath, encoding = 'utf8')`

#### Parameter:

- `filePath`: Jalur file yang akan dibaca (wajib).
- `encoding`: Encoding yang digunakan untuk membaca file, default adalah `'utf8'` (opsional).

#### Return Value:

- Promise yang menghasilkan konten file dalam bentuk string.

## Caontoh Penggunaan

### Menggunakan Fungsi Asynchronous (Rekomendasi)

Definisikan fungsi asynchronous untuk membaca file menggunakan `async/await`. Pastikan Anda menangani error menggunakan blok `try-catch`.

```js
import { filemate } from 'filemate' // ESM
const { filemate } = require('filemate') // CommonJS

async function readFileWithAsyncAwait(filePath) {
  try {
    const content = await filemate(filePath)
    console.log('File content:', content)
  } catch (error) {
    console.error('Error reading file:', error)
  }
}

readFileWithAsyncAwait('thefile.txt')
```

### Menggunakan `.then` dan `.catch`

Jika Anda tidak ingin menggunakan `async/await`, Anda dapat memanfaatkan chaining dengan `then` dan `catch`.

```js
import { filemate } from 'filemate' // ESM
const { filemate } = require('filemate') // CommonJS

function readFileWithCallback(filePath) {
  filemate(filePath)
    .then((content) => {
      console.log('File content:', content)
    })
    .catch((error) => {
      console.error('Error reading file:', error)
    })
}

readFileWithCallback('thefile.txt')
```
