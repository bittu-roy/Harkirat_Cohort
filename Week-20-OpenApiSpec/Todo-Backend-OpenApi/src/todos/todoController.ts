import {
    Body,
    Controller,
    Get,
    Path,
    Post,
    Query,
    Route,
    SuccessResponse,
  } from "tsoa";
  import { Todo } from "./todo";
  import { TodoCreationParams, TodoService } from "./todoService";
   
   //on the route "/todo"
   @Route("todo")
   export class TodoController extends Controller{
      @Get("{todoId}")
      public async getTodo(
        @Path() todoId: string
      ): Promise<Todo>{
        let todoService= new TodoService();
        return todoService.get(todoId);
      }
   }


   // Path-> tells the openApI file generator that 'todoId' is a input parameter that we expect from the user and if we don't use Path then the input 'todoId' which we are giving needs to be a part of the OpenAPI file.
   //So basically on the route "/todo/{todoId}" the control should reach at todoService and it calls a get function and return the response to the end user. This much is enough to create a HTTP server.