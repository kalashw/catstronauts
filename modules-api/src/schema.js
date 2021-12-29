const { gql } = require('apollo-server');

const typeDefs = gql`
  extend type Query {
    "Fetch a specific module, provided a module's ID"
    module(id: ID!): Module!
  }
  "A Module is a single unit of teaching. Multiple Modules compose a Track"
  type Module @key(fields: "id") {
    id: ID!
    "The module's title"
    title: String
    "The module's length in minutes"
    length: Int
    "The module's text-based description, can be in markdown format. In case of a video, it will be the enriched transcript"
    content: String
    "The module's video url, for video-based modules"
    videoUrl: String
  }
`;

module.exports = typeDefs;
