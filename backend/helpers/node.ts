import createLnRpc, { LnRpc } from '@radar/lnrpc';
require("dotenv").config();

export let node: LnRpc;

export async function initNode() {
  node = await createLnRpc({
    server: process.env.LND_GRPC_URL,
    cert: Buffer.from(process.env.LND_TLS_CERT || "", 'base64').toString('ascii'),
    macaroon: Buffer.from(process.env.LND_MACAROON || "", 'base64').toString('hex'),
  });
}