// Server config File

// Import and initialize dotenv
const dotenv = require('dotenv')
dotenv.config()

const server = require('./app')

const server_ipAddress = process.env.SERVER_IPADDRESS;
const server_port = process.env.SERVER_PORT;

server.listen(server_port, () => console.log(`Server running on: http://${server_ipAddress}:${server_port}`));