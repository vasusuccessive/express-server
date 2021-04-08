import config from './congfig/configuration';
import Server from './Server';


const server = new Server(config);
server.bootstrap();
server.run();