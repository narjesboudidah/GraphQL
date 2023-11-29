import express from "express" 
import schema from "./graphql/schema.js"
import resolvers from "./graphql/resolvers.js"
import { graphqlHTTP } from "express-graphql"

const app=express()
app.use(express.static("public"))

app.use("/graphql", graphqlHTTP({
    schema: schema,
    rootValue: resolvers,
    graphiql :true
}))
app.listen(8085,console.log('PORT 8085'))