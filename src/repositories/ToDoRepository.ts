import { ToDo, ToDoUpdatedProps } from "../entities/ToDo";

import sql from "./db";
export class ToDoRepository {
    private db: ToDo[] = [];

    async insert(todo: ToDo): Promise<boolean> {
        await sql`insert into todos values (
            ${todo.getCode()},
            ${todo.getTitle()},
            ${todo.getCreatedAt().toISOString()},
            ${todo.getUpdatedAt().toISOString()},
            ${todo.isCompleted()}
        )`;

        return true;
    }

    async findAll(): Promise<Array<any>> {
        return await sql`select * from todos`;
    }

    async delete(code: string): Promise<boolean> {
        await sql`delete from todos where code=${code}`;

        return true;
    }

    async update(payload: ToDoUpdatedProps): Promise<boolean> {
        await sql`update todos set title=${payload.title}, updated_at=${payload.updateAt}, is_completed=${payload.isCompleted} where code=${payload.code}`;

        return true;
    }
}