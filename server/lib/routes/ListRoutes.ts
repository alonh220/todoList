import { Request, Response } from "express";
import { ListController } from "../features/listFeature/ListController";
import AuthenticateMiddleware from '../Middleware/AuthenticateMiddleware';

export class ListRoutes {

    public listController: ListController = new ListController();

    public router(app): void {
        //app.use(AuthenticateMiddleware.loggerMiddleware.bind(AuthenticateMiddleware));
        app.route('/')
            .get((req: Request, res: Response) => {
                res.status(200).send({
                    message: 'GET request successfulll!!!!'
                })
            });

        app.route('/list')
            .get([AuthenticateMiddleware.loggerMiddleware], this.listController.getList);

        app.route('/list')
            .post([AuthenticateMiddleware.loggerMiddleware], this.listController.addList);

        app.route('/list/:id')
            .get([AuthenticateMiddleware.loggerMiddleware], this.listController.getById);

        app.route('/list/search/:term')
            .get([AuthenticateMiddleware.loggerMiddleware], this.listController.search);

        app.route('/list/:id')
            .delete([AuthenticateMiddleware.loggerMiddleware], this.listController.delete);


    }
}