# Exmaple Fastify API App with SST Deployment to AWS

This is an example Fastify API app that is deployed to AWS using [SST](https://sst.dev/).

## Development

### Pre-requisites

- [Node.js](https://nodejs.org/en/)
- [pnpm](https://pnpm.io/)

### Setup

1. Clone the repository.
1. Run `pnpm install` to install the dependencies.
1. Make changes to the repository.
1. Run `pnpm compile` to compile the TypeScript files.

### SST

This project uses [SST](https://sst.dev/) for local testing and deployment.

#### Local Testing

Run `pnpm dlx sst@latest dev` to start the local testing environment.

#### Deployment

This application is configured to deploy when changes are pushed to the `dev` and `main` branches.

Run `pnpm dlx sst@latest deploy --stage [environment]` to deploy the application.

##### Deploy to Development

Changes to the `dev` branch will trigger a deployment to the `development` environment.

You can also manually deploy to the `development` environment by running:

```bash
pnpm dlx sst@latest deploy --stage development`
```

##### Deploy to Production

Changes to the `main` branch will trigger a deployment to the `production` environment.

You can also manually deploy to the `production` environment by running:

```bash
pnpm dlx sst@latest deploy --stage production
```

#### Removing a Deployment

To remove a deployment, run `pnpm dlx sst@latest remove --stage [environment]`.

By default `pnpm dlx sst@latest remove` will remove your personal environment. See the [SST documentation](https://sst.dev/docs/reference/cli#remove) for more information.
