require("dotenv").config();
import express, { Request, Response } from "express";
import morgan from "morgan";
import bodyParser from 'body-parser';
import routes from './routes';
import cors from 'cors';
import {initNode, node} from "./helpers/node";
import http from 'http';
const socketIo = require('socket.io')



//Database Connection
const db = require('./models');
const app = express();

const server = http.createServer(app)
const io = socketIo(server,{
    cors: {
      origin: 'http://localhost:3000'
    }
})


// App middlewares
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

if (process.env.NODE_ENV === "development") app.use(morgan("dev"));


// Router files
app.use('/', routes);

app.get("/api/ping", (req: Request, res: Response) => {
  res.status(200).json({
    status: "success",
    message: "Pong",
  });
});

app.all("*", (req: Request, res: Response) => {
  res.status(404).json({
    status: "fail",
    message: `Route: ${req.originalUrl} does not exist on this server`,
  });
});

const PORT = 3001;


// Initialize node & server
console.log('Initializing Lightning node...');
initNode().then(() => {
  console.log('Lightning node initialized!');
  console.log('Starting server...');
  io.on('connection', (socket:any) => {
    console.log('a user connected');
    let stream = node.subscribeInvoices({})
    stream.on('data', (data) => {
      if (data.settled === true) {
        socket.emit('payment-completed', data);
      }
    });
});
  server.listen(PORT, async () => {
    console.log("🚀Server started Successfully");
  });
});
