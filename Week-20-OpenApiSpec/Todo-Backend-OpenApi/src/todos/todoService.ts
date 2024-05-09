//Before we start defining our Controller, it's usually a good idea to create a Service that handles interaction with our Models instead of shoving all that logic into the controller layer.

//This service should connect to the database eventually but right now it just returns mock data, which returns two functions and will basically acts as a mongoDB wrapper eventually in the future. 

import { Todo } from "./todo";


export type TodoCreationParams= Pick<Todo, "title" | "description">

//get function hits the database
export class TodoService{
    public get(todoId: string): Todo{
        return{
            id: todoId,
            title: "mocked todo",
            description: "mocked todo",
            done: false
        }
    }

    //create function creates an entry in the datbase
    public create(todoCreationParams: TodoCreationParams): Todo{
        console.log("mock db call");
        return{
            id: "1",
            title: "mocked todo",
            description: "mocked todo",
            done: false
        }
    }
}