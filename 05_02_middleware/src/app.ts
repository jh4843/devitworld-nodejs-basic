import express from "express";
import checkAuth from "./middlewares/checkAuth";
import { jsonParser, urlEncodedParser } from "./middlewares/dataParsers";
import errorHandler from "./middlewares/errorHandler";
import requestLogger from "./middlewares/requestLogger";
import router from "./routes";

const app = express();

// Use middlewares
app.use(requestLogger);
app.use(jsonParser);
app.use(urlEncodedParser);

// Auth middleware
app.use("/secure", checkAuth);

// Set up routes
app.use("/", router);

// Error handler middleware should be the last one
app.use(errorHandler);

export default app;
