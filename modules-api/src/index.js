const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema');
const resolvers = require('./resolvers');
const { buildSubgraphSchema } = require("@apollo/federation");

const ModulesAPI = require('./datasources/modules-api');

const server = new ApolloServer({
  dataSources: () => ({
      modulesAPI: new ModulesAPI(),
    }),
  schema: buildSubgraphSchema([
    {
      typeDefs,
      resolvers,
    }
  ])
});

server.listen({
  port: 4002
}).then(() => {
  console.log(`
    🚀  Modules server is running!
    🔉  Listening on port 4002
  `);
});
