import express from 'express'
import userRouter from "./router/userRoutes"

const app = express()

app.use(express.json())
app.use("/api/user", userRouter)

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000")
})