import { ApolloServer } from '@apollo/server'
import { resolvers } from './resolvers.js'
import { schema } from './schema.js'

export const apolloServer = new ApolloServer({
  typeDefs: schema,
  resolvers: resolvers,
  introspection: true,
})
