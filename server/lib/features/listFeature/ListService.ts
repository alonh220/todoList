import LowdbProvider from "../LowdbProvider"
import { Todo } from "./Todo"

const TODO_LIST = "todoList";
export class ListService {

    getList = (): Promise<any> => {
        return new Promise(function (resolve, reject) {
            try {
                let result = LowdbProvider.db.get(TODO_LIST)
                    .value()
                    .map((data) => new Todo(data.id, data.todo));
                return resolve(result);
            } catch (error) {
                reject(error);
            }
        });
    }

    addList = (todoList) => {
        return new Promise(function (resolve, reject) {
            try {
                let result = LowdbProvider.push(TODO_LIST, { todo: todoList });
                return resolve(result);
            } catch (error) {
                reject(error);
            }
        });
        // res.json(result); 
    }

    getById = (todoId): Promise<Todo> => {
        return new Promise(function (resolve, reject) {
            let result = LowdbProvider.db.get(TODO_LIST)
                // .find({ id: todoId})            
                .value()
                .filter((data) => data.id == todoId)
                .map((data) => new Todo(data.id, data.todo));
            if (result.length) {
                return resolve(result);
            } else {
                reject("not found user with  ${id}");
            }

        });
    }

    search = (term): Promise<Array<Todo>> => {
        return new Promise(function (resolve, reject) {
            try {
                let result = LowdbProvider.db.get(TODO_LIST)
                    // .find({ id: todoId})            
                    .value()
                    .filter((data) => data.todo.includes(term))
                    .map((data) => new Todo(data.id, data.todo));
                return resolve(result);
            } catch (error) {
                reject(error);
            }
        });
    }

    delete = (todoId): Promise<Boolean> => {
        return new Promise(function (resolve, reject) {
            try {
                let state = LowdbProvider.db.getState();
                state.todoList = state.todoList.filter((data) => data.id !== todoId);
                LowdbProvider.db.setState(state);

                return resolve(true);
            } catch (error) {
                reject(error);
            }

        });
    }
}