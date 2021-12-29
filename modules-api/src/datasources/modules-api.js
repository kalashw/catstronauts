const { RESTDataSource } = require('apollo-datasource-rest');

class ModulesApi extends RESTDataSource {
  constructor() {
    super();
    // the Catstronauts catalog is hosted on this server
    this.baseURL = 'https://odyssey-lift-off-rest-api.herokuapp.com/';
  }

  getModule(moduleId) {
    return this.get(`module/${moduleId}`);
  }
}

module.exports = ModulesApi;
