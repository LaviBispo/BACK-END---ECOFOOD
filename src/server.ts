import express from 'express'
import userRouter from "./router/userRoutes"
import loginRouter from "./router/loginRoutes"
import produtoRouter from "./router/produtoRoutes"
import telaInicioRouter from "./router/telaInicioRoutes"
import impactoRouter from "./router/impactoRoutes"
import perfilRouter from "./router/perfilRoutes"
import { authenticate } from "./middlewares/auth"

const app = express()

app.use(express.json())
app.use("/api/user", userRouter)
app.use("/api/login", loginRouter)
app.use("/api/produto", authenticate, produtoRouter)
app.use("/api/telaInicio", authenticate, telaInicioRouter)
app.use("/api/impacto", authenticate, impactoRouter)
app.use("/api/perfil", authenticate, perfilRouter)

    
app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000")
})