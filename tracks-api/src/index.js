const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema');
const resolvers = require('./resolvers');
const { buildSubgraphSchema } = require('@apollo/federation');

const TrackAPI = require('./datasources/track-api');

const server = new ApolloServer({
  dataSources: () => {
    return {
      trackAPI: new TrackAPI(),
    };
  },
  schema: buildSubgraphSchema([
    {
      typeDefs,
      resolvers,
    }
  ])
});

server.listen({
  port: 4001
}).then(() => {
  console.log(`
    🚀  Track server is running!
    🔉  Listening on port 4001
  `);
});
