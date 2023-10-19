import { ToDo, ToDoUpdatedProps } from "../entities/ToDo";

export class ToDoRepository {
    private db: Array<ToDo>;

    constructor() {
        this.db = [];
    }

    insert(todo: ToDo): boolean {
        this.db.push(todo);

        return true;
    }

    findAll(): Array<ToDo> {
        return this.db;
    }

    delete(code: string): boolean {
        this.db = this.db.filter(todo => {
            return todo.getCode() != code
        });

        return true;
    }

    update(payload: ToDoUpdatedProps): boolean {
        this.db.map(todo => {
            if(todo.getCode() == payload.code) {
                todo.setTitle(payload.title);
                todo.setUpdatedAt(payload.updateAt);
                todo.setIsCompleted(payload.isCompleted);
            }
        });

        return true;
    }
}