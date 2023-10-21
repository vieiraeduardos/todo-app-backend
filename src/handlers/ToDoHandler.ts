import { ToDo, ToDoProps, ToDoUpdatedProps } from "../entities/ToDo";
import { ToDoRepository } from "../repositories/ToDoRepository";

class ToDoHandler {
    private repository: ToDoRepository;

    constructor() {
        this.repository = new ToDoRepository();
    }

    async create(payload: ToDoProps): Promise<boolean> {
        const todo = new ToDo(payload);
        
        this.repository.insert(todo);
        
        return true;
    }

    async find(): Promise<ToDo[]> {        
        const todos = this.repository.findAll();
        
        return todos;
    }

    async delete(code: string): Promise<boolean> {
        return this.repository.delete(code);
    }

    async update(payload: ToDoUpdatedProps): Promise<boolean> {
        return this.repository.update(payload);
    }
}

export default new ToDoHandler();