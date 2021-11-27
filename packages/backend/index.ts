import express from 'express';
import cors from 'cors';
import companies from './data/companies.json';

const DEFAULT_PORT = 3000;

const app = express();

app.use(cors());

app.get('/company', (req, res, next) => {
  res.json(companies);
  next();
})
app.get('/specialty', (req, res, next) => {
  res.json(
    [...new Set(companies.reduce<string[]>((acc, company) => ([...acc, ...company.specialties]), []))]
  );
  next();
})

const port = process.env.port || DEFAULT_PORT;

app.listen(port, () => {
  console.log(`🚀 Construction Company API running in port ${port}`)
})