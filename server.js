import http from 'http';
import app from './App/app.js';


const PORT = process.env.PORT;
const server = http.createServer(app);
server.listen(PORT, console.log(`Server is running on ${PORT}`));