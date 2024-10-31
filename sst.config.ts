/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
  app(input) {
    return {
      name: "example-fastify-sst-aws",
      removal: input?.stage === "production" ? "retain" : "remove",
      home: "aws",
      providers: {
        aws: {
          region: "eu-west-2",
        },
      },
    };
  },
  console: {
    autodeploy: {
      target(event) {
        if (event.type === "branch" && event.action === "pushed") {
          switch (event.branch) {
            case "main":
              return {
                stage: "production",
                runner: { engine: "codebuild", compute: "large" },
              };
            case "dev":
              return {
                stage: "development",
                runner: { engine: "codebuild", compute: "large" },
              };
            default:
              throw new Error(`Unsupported branch: ${event.branch}`);
          }
        }
      },
    },
  },
  async run() {
    const vpc = new sst.aws.Vpc("ExampleFastifyVpc", { bastion: true });
    const cluster = new sst.aws.Cluster("ExampleFastifyCluster", { vpc });
    // const redis = new sst.aws.Redis("ExampleFastifyRedis", { vpc });

    cluster.addService("ExampleFastifyService", {
      loadBalancer: {
        // domain: {
        //   name: "example.com",
        //   dns: sst.cloudflare.dns(),
        // },
        public: true,
        ports: [
          { listen: "80/http", forward: "8080/http" },
          // { listen: "443/https", forward: "8080/http" },
        ],
      },
      dev: {
        command: "node --watch dist/index.js",
      },
      // link: [redis],
    });
  },
});
