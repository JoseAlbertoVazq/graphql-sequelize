const { gql } = require('apollo-server');

const typeDefs = gql`
    type User {
        id: Int!
        name: String!
        email: String!
        posts: [Post]!
    }

    type Post {
        id: Int!
        title: String!
        subtitle: String!
        description: String!
        user: User!
    }

    type Query {
        oneUser(id: Int!): User
        allPosts: [Post!]!
        onePost(id: Int!): Post
    }

    type Mutation {
        createUser(name: String!, email: String!, password: String!, confirmPassword: String!): User!
        createPost(userId: Int!, title: String!, subtitle: String!, description: String!): Post!
        updatePost(id: Int!, title: String, subtitle: String, description: String): Post!
        deletePost(id: Int): Post!
    }
`
module.exports = typeDefs;