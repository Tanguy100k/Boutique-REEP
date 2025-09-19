import crypto from 'crypto'
import express from 'express'

const app = express();

const downloadLinks: Record<string, { filePath: string, expires: number }> = {};

export function generateDownloadLink(filePath: string) {
    const token = crypto.randomBytes(16).toString('hex');
    downloadLinks[token] = {filePath, expires: Date.now() + 500000};
    return `http://localhost:3000/download/token/${token}`;
}

export function getDownloadEntry(token: string) {
  return downloadLinks[token];
}