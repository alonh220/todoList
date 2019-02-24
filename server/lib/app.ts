import * as express from "express";
import * as bodyParser from "body-parser";
import {Routes} from "./routes/Routes";
import * as cors from "cors";
import * as cookieParser from 'cookie-parser';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
//import AuthenticateMiddleware from './Middleware/AuthenticateMiddleware';
class App {

    public app: express.Application;
    public route: Routes = new Routes();

    constructor() {
        this.app = express();
        this.config();     
        this.route.routes(this.app);    
    }
   

    private config(): void{
        // support application/json type post data
        this.app.use(bodyParser.json());
        //support application/x-www-form-urlencoded post data
        this.app.use(bodyParser.urlencoded({ extended: false }));
        this.app.use(cors());
        this.app.options("*", cors());
        this.app.use(cookieParser());
        // this.app.use(AuthenticateMiddleware.loggerMiddleware.bind(AuthenticateMiddleware));
    }

}

export default new App().app;