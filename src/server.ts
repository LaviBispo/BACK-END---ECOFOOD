
import express from 'express'
import userRouter from "./router/userRoutes"
import loginRouter from "./router/loginRoutes"
import produtoRouter from "./router/produtoRoutes"
<<<<<<< HEAD
import listaCompraRouter from "./router/listaCompraRoutes"
=======
>>>>>>> 251f91ccce7377705d559fac702aeaba32c9b237
import telaInicioRouter from "./router/telaInicioRoutes"
import impactoRouter from "./router/impactoRoutes"
import detalhesProdutoRouter from "./router/detalhes-produtoRoutes"
import statusProdutosRouter from "./router/status-produtosRoutes"
import perfilRouter from "./router/perfilRoutes"
import notificacoesRouter from "./router/notificacoesRoutes"
import { authenticate } from "./middlewares/auth"
<<<<<<< HEAD
import "dotenv/config";
=======
>>>>>>> 251f91ccce7377705d559fac702aeaba32c9b237

const app = express()

app.use(express.json())
app.use("/api/user", userRouter)
app.use("/api/login", loginRouter)
app.use("/api/produto", authenticate, produtoRouter)
<<<<<<< HEAD
app.use("/api/listaCompra", authenticate, listaCompraRouter)
=======
>>>>>>> 251f91ccce7377705d559fac702aeaba32c9b237
app.use("/api/telaInicio", authenticate, telaInicioRouter)
app.use("/api/impacto", authenticate, impactoRouter)
app.use("/api/detalhes-produto", authenticate, detalhesProdutoRouter)
app.use("/api/status-produtos", authenticate, statusProdutosRouter)
app.use("/api/perfil", authenticate, perfilRouter)
app.use("/api/notificacoes", authenticate, notificacoesRouter)

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000")
})
