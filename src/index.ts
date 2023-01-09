import {app} from './app';

import {infoMessage} from "./middleware/logger";

const port = process.env.PORT;

app.listen(port, () => infoMessage(`Settings service listening on port: ${port}`))