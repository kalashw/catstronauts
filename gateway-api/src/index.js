const { ApolloServer } = require('apollo-server');
const { ApolloGateway } = require('@apollo/gateway');

let gateway;

try {
    gateway = new ApolloGateway({
        serviceList: [
            { name: 'tracks', url: 'http://tracks-api:4001/' },
            { name: 'modules', url: 'http://modules-api:4002/' },
        ],
    });
} catch (err) {
    console.log(err);
}

(async () => {
    const server = new ApolloServer({
        gateway,
        engine: false,
        subscriptions: false,
    });

    server.listen().then(({ url }) => {
        console.log(`
    🚀  Modules server is running!
    🔉  Listening at ${url}
    `);
    });
})();