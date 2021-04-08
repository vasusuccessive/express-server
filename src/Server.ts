import * as bodyParser from 'body-parser'
import * as  express from 'express';


export default class Server {
    private app: express.Express;
  
    constructor(private config: any) {
      this.app = express();
    }
  
    get application() {
      return this.app;
    }


  public bootstrap() {

    this.initJsonParser();
    this.setupRoutes();

    return this.app;
  }

  private initJsonParser() {
   this.app.use(bodyParser.json())
   this.app.use(bodyParser.urlencoded({ extended: true }));
  }

   /**
   * This will Setup all the routes in the system
   *
   * @returns -Instance of Current Object
   * @memberof Server
   */
    public setupRoutes() {
      const { env, apiPrefix } = this.config;
    }
    public run() {
      // open Database & listen on port config.port
      const { port, env } = this.config;
        this.app.listen(port, () => {
          const message = `App is running at port '${port}' in '${env}' mode `;
          console.log(message)
        });
        return this;
      }    
 
}
 