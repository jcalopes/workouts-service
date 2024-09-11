import express from "express";
import {port} from "./config/config";
import Logger from "./utils/Logger";

const app = express();

app
    .listen(port, () => {
        Logger.info(`server running on port : ${port}`);
    })
    .on('error', (e) => Logger.error(e));

