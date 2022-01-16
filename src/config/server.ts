import * as dotenv from 'dotenv';

dotenv.config();

export const serverConfig: {
    readonly Server: string
    readonly Port: string
}= {
    Server: process.env.SERVER,
    Port: process.env.PORT
}