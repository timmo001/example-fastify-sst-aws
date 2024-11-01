// import { Resource } from "sst";
// import { Cluster } from "ioredis";
import fastify from "fastify";

const PORT = 8080;

const server = fastify();

// const redis = new Cluster(
//   [
//     {
//       host: Resource.ExampleFastifyRedis.host,
//       port: Resource.ExampleFastifyRedis.port,
//     },
//   ],
//   {
//     dnsLookup: (address, callback) => callback(null, address),
//     redisOptions: {
//       tls: {},
//       username: Resource.ExampleFastifyRedis.username,
//       password: Resource.ExampleFastifyRedis.password,
//     },
//   }
// );

server.get("/", async (_request, _reply) => {
  // const counter = await redis.incr("counter");
  return {
    message: "Hello",
    // counter,
  };
});

server.get("/ping", async (_request, _reply) => {
  return "pong\n";
});

server.listen(
  {
    host: "0.0.0.0",
    port: PORT,
  },
  (err, address) => {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    console.log(`Server listening at ${address}`);
  }
);
