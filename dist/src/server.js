"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userRoutes_1 = __importDefault(require("./router/userRoutes"));
const loginRoutes_1 = __importDefault(require("./router/loginRoutes"));
const produtoRoutes_1 = __importDefault(require("./router/produtoRoutes"));
const telaInicioRoutes_1 = __importDefault(require("./router/telaInicioRoutes"));
const impactoRoutes_1 = __importDefault(require("./router/impactoRoutes"));
const perfilRoutes_1 = __importDefault(require("./router/perfilRoutes"));
const auth_1 = require("./middlewares/auth");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use("/api/user", userRoutes_1.default);
app.use("/api/login", loginRoutes_1.default);
app.use("/api/produto", auth_1.authenticate, produtoRoutes_1.default);
app.use("/api/telaInicio", auth_1.authenticate, telaInicioRoutes_1.default);
app.use("/api/impacto", auth_1.authenticate, impactoRoutes_1.default);
app.use("/api/perfil", auth_1.authenticate, perfilRoutes_1.default);
app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
});
