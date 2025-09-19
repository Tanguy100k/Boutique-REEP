import express from 'express';
import cors from 'cors';
import Stripe from "stripe";
import createCheckoutSession from './router/create-checkout-session.ts'
import verifyPayment from './router/verify-payment.ts'
import { getDownloadEntry, generateDownloadLink } from './router/generate-download-link.ts';

const app = express();
const port = 3000;
const stripe = new Stripe('***REMOVED***');

app.use(cors({ origin: "http://localhost:4200" }));
app.use(express.json());

app.get('/api/test', (req, res) => {
  console.log('Le serveur a été contacté !');
  res.status(200).send("API is running")
});

app.use('/stripe', createCheckoutSession(stripe));
app.use('/stripe', verifyPayment(stripe));

app.get('/download/:sessionID', (req, res) => {
  const filePath = 'public/Sample.wav';
  const url = generateDownloadLink(filePath);
  res.json({ downloadUrl: url });
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});

app.get('/download/token/:token', (req, res) => {
  const entry = getDownloadEntry(req.params.token);
  if (!entry || entry.expires < Date.now()) return res.status(403).send('Lien expiré');
  res.download(entry.filePath);
});

