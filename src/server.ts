import express from 'express'
import userRouter from "./router/userRoutes"
import loginRouter from "./router/loginRoutes"
import produtoRouter from "./router/produtoRoutes"
import listaCompraRouter from "./router/listaCompraRoutes"
import telaInicioRouter from "./router/telaInicioRoutes"
import impactoRouter from "./router/impactoRoutes"
import { authenticate } from "./middlewares/auth"
import "dotenv/config";

const app = express()

app.use(express.json())
app.use("/api/user", userRouter)
app.use("/api/login", loginRouter)
app.use("/api/produto", authenticate, produtoRouter)
app.use("/api/listaCompra", authenticate, listaCompraRouter)
app.use("/api/telaInicio", authenticate, telaInicioRouter)
app.use("/api/impacto", authenticate, impactoRouter)
    
app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000")
})