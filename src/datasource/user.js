import { RESTDataSource } from 'apollo-datasource-rest';
import configuration from '../config/configuration';

export class UserApi extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = `${configuration.serviceUrl}/api/user`;
  }

  loginUser(payload) {
    return this.post('/login', payload);
  }
}
