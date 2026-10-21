
import express from 'express'
import userRouter from "./router/userRoutes"
import loginRouter from "./router/loginRoutes"
import produtoRouter from "./router/produtoRoutes"
import listaCompraRouter from "./router/listaCompraRoutes"
import telaInicioRouter from "./router/telaInicioRoutes"
import impactoRouter from "./router/impactoRoutes"
import detalhesProdutoRouter from "./router/detalhes-produtoRoutes"
import statusProdutosRouter from "./router/status-produtosRoutes"
import perfilRouter from "./router/perfilRoutes"
import notificacoesRouter from "./router/notificacoesRoutes"
import { authenticate } from "./middlewares/auth"
import "dotenv/config";
import cors from "cors"

const app = express()
app.use(cors())

app.use(express.json())
app.use("/api/user", userRouter)
app.use("/api/login", loginRouter)
app.use("/api/produto", authenticate, produtoRouter)
app.use("/api/listaCompra", authenticate, listaCompraRouter)
app.use("/api/telaInicio", authenticate, telaInicioRouter)
app.use("/api/impacto", authenticate, impactoRouter)
app.use("/api/detalhes-produto", authenticate, detalhesProdutoRouter)
app.use("/api/status-produtos", authenticate, statusProdutosRouter)
app.use("/api/perfil", authenticate, perfilRouter)
app.use("/api/notificacoes", authenticate, notificacoesRouter)

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000")
})
