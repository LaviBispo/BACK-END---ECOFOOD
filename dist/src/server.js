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
const listaCompraRoutes_1 = __importDefault(require("./router/listaCompraRoutes"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use("/api/user", userRoutes_1.default);
app.use("/api/login", loginRoutes_1.default);
app.use("/api/produto", produtoRoutes_1.default);
app.use("/api/telaInicio", telaInicioRoutes_1.default);
app.use("/api/impacto", impactoRoutes_1.default);
app.use("/api/listaCompra", listaCompraRoutes_1.default);
app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
});
