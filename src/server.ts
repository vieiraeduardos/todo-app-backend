import "dotenv/config";

import { randomUUID } from "crypto";

import fastify from "fastify";
import { ToDo, ToDoProps, ToDoUpdatedProps } from "./entities/ToDo";
import ToDoHandler from "./handlers/ToDoHandler";
const app = fastify();

app.get("/", (request, reply) => {
    return reply.code(200).send({ "message": "Hello" })
});

app.get("/todos", async (request, reply) => {
    const todos: ToDo[] = await ToDoHandler.find();
    return reply.code(200).send(todos);
});

interface IBody {
    title: string
}

app.post("/todos", async (request, reply) => {
    const { title } = request.body as IBody;

    const payload: ToDoProps = {
        code: randomUUID(),
        title,
        createdAt: new Date(),
        updateAt: new Date(),
        isCompleted: false
    };
    
    await ToDoHandler.create(payload);
    return reply.code(200).send({ "message": "Created successfully" });
});

interface IPutBody {
    code: string,
    title: string,
    isCompleted: boolean
}

app.put("/todos", async (request, reply) => {
    const { code, title, isCompleted } = request.body as IPutBody;

    const payload: ToDoUpdatedProps = {
        code,
        title,
        updateAt: new Date(),
        isCompleted
    };
    
    await ToDoHandler.update(payload);
    return reply.code(200).send({ "message": "Updated successfully" });
});

interface IDeleteBody {
    code: string
}

app.delete("/todos", async (request, reply) => {
    const { code } = request.body as IDeleteBody;
    
    await ToDoHandler.delete(code);
    return reply.code(200).send({ "message": "Deleted successfully" });
});

const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;

app.listen({ 
    host: "0.0.0.0",
    port: PORT
}, (err, address) => {
    if(err) {
        console.error(err);
        process.exit(1);
    }
    console.log(`Server is running on ${address}`);
})