import { WebSocketServer } from "ws";
import { prisma } from "@repo/db";

const server = new WebSocketServer({
    port: 8080
});

server.on("connection", async (socket) => {
    await prisma.user.create({
        data: {
            username: Math.random().toString(),
            password: Math.random().toString()
        }
    })
    socket.send("Hi there you are connected to the server");
})