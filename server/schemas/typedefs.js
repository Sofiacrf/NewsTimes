const { gql } = require("apollo-server-express");

const typeDefs = gql`
type Stocks {
    _id: ID
    title: String
    description: String
  }
`

module.exports = typeDefs;