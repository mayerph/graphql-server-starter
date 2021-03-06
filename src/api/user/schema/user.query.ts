import { gql } from 'apollo-server-express'

/**
 * GraphQL schema --> all queries related to the user.
 */
const userQuery = gql`
    extend type Query {
        users: [User!] @hasPermission(requiredPermission: adminDefault)
        user(id: ID!): User @hasPermission(requiredPermission: adminDefault)
        me: User @hasPermission(requiredPermission: readDefault)
    }
`

export { userQuery }
