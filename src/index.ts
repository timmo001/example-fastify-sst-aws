import fastify from "fastify";
// import { Resource } from "sst";
// import { Cluster } from "ioredis";

const PORT = 8080;

const server = fastify();

// const redis = new Cluster(
//   [{ host: Resource.MyRedis.host, port: Resource.MyRedis.port }],
//   {
//     dnsLookup: (address, callback) => callback(null, address),
//     redisOptions: {
//       tls: {},
//       username: Resource.ExampleFastifyService.username,
//       password: Resource.MyRedis.password,
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

server.listen({ port: PORT }, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server listening at ${address}`);
});
