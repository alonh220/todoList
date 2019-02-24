import {Request, Response} from "express";
import {ListRoutes} from './ListRoutes';
import {LoginRoutes} from './LoginRoutes';

export class Routes {  
    
    public list: ListRoutes = new ListRoutes();
    public login: LoginRoutes = new LoginRoutes();
   
    public routes(app): void {      
        this.list.router(app);    
        this.login.router(app);    

    }   
}