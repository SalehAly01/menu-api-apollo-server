# Up and running

- Make sure you have [mongoDB](https://www.mongodb.com/) installed and active
- copy the `.env-example` file into `.env` and update it with your AWS credentials and S3 configured bucket for image uploading
- From the project root, run `yarn install` to install required packages
- Then, run `yarn dev` to run the development environment on your machine
- That's it. Wait until you get the `🚀 Server listening on port http://localhost:3001` log message.
- Open [http://localhost:3001](http://localhost:3001) for GraphQL playground

### Available commands

- `yarn dev` runs the app in the development mode.

- `yarn lint` lints javascript files and breaks on error.

- `yarn lint:fix` lints javascript files and fixes fixable errors.

- `yarn format` formatts javascript files based on prettier config.

- `yarn build` builds project files
