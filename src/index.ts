import {app} from './app';

import pino from "pino";

const logger = pino();

const port = process.env.PORT;

app.listen(port, () => logger.info(`Settings service listening on port: ${port}`))