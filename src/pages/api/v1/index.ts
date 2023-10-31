/* eslint-disable no-console */
import zlib from 'zlib'
import fs from 'fs-extra'
import type { NextApiRequest, NextApiResponse } from 'next'
import logger from '@server/helper/logger'

const zipFile = () => {
  const inputFile = process.cwd() + '/storage/a.pdf' // Đường dẫn của file bạn muốn nén
  const outputFile = process.cwd() + '/storage/a.zip' // Đường dẫn

  const readStream = fs.createReadStream(inputFile)
  const writeStream = fs.createWriteStream(outputFile)
  const zip = zlib.createGzip()

  readStream.pipe(zip).pipe(writeStream)

  writeStream.on('finish', () => {
    console.log('zip done')
    logger.info('zip done')
  })

  writeStream.on('error', () => {
    console.log('zip failed')
  })
}

async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const JWT_SECRET = process.env.JWT_SECRET
    const DB_PASSWORD = process.env.DB_PASSWORD

    zipFile()
    res.status(200).send({ JWT_SECRET, DB_PASSWORD })
  } catch (err) {
    res.status(500).send({ error: 'Failed to fetch data' })
  }
}
export default handler
