import * as express from "express";

class AuthenticateMiddleware{
    
    constructor() {
        
    }
    public loggerMiddleware(request: express.Request, response: express.Response, next) {
        console.log(`${request.method} ${request.path}`);
        next();
      }
}

export default new AuthenticateMiddleware();