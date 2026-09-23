import express from 'express'
import userRouter from "./router/userRoutes"
import loginRouter from "./router/loginRoutes"
import produtoRouter from "./router/produtoRoutes"
import telaInicioRouter from "./router/telaInicioRoutes"
import impactoRouter from "./router/impactoRoutes"
import listaCompraRouter from "./router/listaCompraRoutes"

const app = express()

app.use(express.json())
app.use("/api/user", userRouter)
app.use("/api/login", loginRouter)
app.use("/api/produto", produtoRouter)
app.use("/api/telaInicio", telaInicioRouter)
app.use("/api/impacto", impactoRouter)
app.use("/api/listaCompra", listaCompraRouter)



app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000")
})