/* eslint-disable no-console */
import Express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { createServer } from 'http';
import { UserApi } from './datasource/user';

class Server {
  constructor(config) {
    this.config = config;
    this.app = Express();
  }

  bootstrap() {
    this.setupRoutes();
    return this;
  }

  setupRoutes() {
    const { app } = this;
    app.get('/', (req, res) => {
      res.send('Running Express app, Add "/graphql" to url to redirect to PLAYGROUND');
    });
  }

  async setApollo(schema) {
    try {
      const { app } = this;
      this.Server = new ApolloServer({
        ...schema,
        dataSources: () => {
          const userApi = new UserApi();
          return { userApi };
        },
        onHealthCheck: () => new Promise((resolve) => {
          resolve('I am OK');
        }),
      });
      this.Server.applyMiddleware({ app });
      this.httpServer = createServer(app);
      this.Server.installSubscriptionHandlers(this.httpServer);
      this.run();
    } catch (err) {
      console.log(err);
    }
  }

  run() {
    const { config: { PORT } } = this;
    this.httpServer.listen(PORT, (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log(`App is runing on port ${PORT}`);
      }
      return this;
    });
  }
}
export default Server;
