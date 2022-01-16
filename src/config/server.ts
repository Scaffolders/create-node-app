import * as dotenv from 'dotenv';

dotenv.config();

export const serverConfig: {
    readonly Server: string
    readonly Host: string
}= {
    Server: process.env.SERVER,
    Host: process.env.PORT
}