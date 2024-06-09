import express from "express";

// JSON Parser Middleware
const jsonParser = express.json();

// URL-encoded Parser Middleware
const urlEncodedParser = express.urlencoded({ extended: true });

export { jsonParser, urlEncodedParser };
