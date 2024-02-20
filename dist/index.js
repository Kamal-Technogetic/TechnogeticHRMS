import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { resolvers } from "../graphQL/resolvers/index.js";
import { typeDefs } from "../graphQL/typeDefs.js";
import dotenv from "dotenv";
dotenv.config();
const startServer = async () => {
    try {
        const server = new ApolloServer({
            typeDefs,
            resolvers,
        });
        const { url } = await startStandaloneServer(server, {
            listen: { port: 4000 },
        });
        console.log(`🚀🚀  Server ready at: ${url} 🚀🚀`);
    }
    catch (error) {
        console.error("Error On Server Starting: ", error.message);
    }
};
startServer();
