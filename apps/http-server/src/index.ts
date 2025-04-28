import express from "express";
import { prisma } from "@repo/db"

const app = express();
app.use(express.json());

app.post("/user", async (req, res) => {
    const { username, password } = req.body;

    const users = await prisma.user.create({
        data: {
            username,
            password
        }
    })

    res.json({
        message: "user created successfully",
        users
    })
})

app.listen(8000)