const resolvers = {
  Query: {
    // get a single module by ID, for the module detail page
    module: (_, { id }, { dataSources }) => {
      return dataSources.modulesAPI.getModule(id);
    },
  },
  Module: {
    __resolveReference({ id }, { dataSources }) {
      return dataSources.modulesAPI.getModule(id);
    }
  }
};

module.exports = resolvers;
