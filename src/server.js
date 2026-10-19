require("dotenv").config();
const express = require("express");
const cors = require("cors");

const authRoutes = require("./routes/auth.routes");
const productRoutes = require("./routes/product.routes");
const shoppingListRoutes = require("./routes/shoppingList.routes");
const dashboardRoutes = require("./routes/dashboard.routes");
const restaurantRoutes = require("./routes/restaurant.routes");
const impactRoutes = require("./routes/impact.routes");

const app = express();

app.use(cors());
app.use(express.json());

// Cada "gaveta" de rotas fica com seu próprio caminho (prefixo).
// Ex: POST /auth/login, GET /products, GET /dashboard, etc.
app.use("/auth", authRoutes);
app.use("/products", productRoutes);
app.use("/shopping-list", shoppingListRoutes);
app.use("/dashboard", dashboardRoutes);
app.use("/restaurant", restaurantRoutes);
app.use("/impact", impactRoutes);

// Rota simples só pra testar se o servidor está de pé
app.get("/", (req, res) => {
  res.json({ status: "Ecofood API rodando 🌱" });
});

const PORT = process.env.PORT || 3333;
app.listen(PORT, () => {
  console.log(`Servidor Ecofood rodando na porta ${PORT}`);
});
