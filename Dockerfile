FROM node:20-bullseye-slim

WORKDIR /app/

COPY package.json /app
RUN corepack install \
    pnpm install --frozen-lockfile

COPY dist/* /app

ENTRYPOINT ["node", "dist/index.js"]
