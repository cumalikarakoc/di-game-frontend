# Di-game front

This project is the front-end for the di game.

## Setup

1. First setup the [API project](https://github.com/cumalikarakoc/di-game-backend) to be able to interact with the login and game.
2. `npm install`
3. `npm start`

## Environment

The assumes that the API and websocket run on `http://localhost:3001` by default. If your setup differs, use `API_URL` and `SOCKET_URL` environment variables to override the default.

## Deployment

The current project is getting deployed to s3, this happens manually because time limitations. It is now hard coded to a bucket name, change this in `package.json` to deploy to a other bucket.A better solution would be to use travis or code-deploy to ship to ECS on AWS.
