import express  from "express";
import conectaNaDatabase from "./config/dbConnect.js";
import routes from "./routes/index.js";


const conexao = await conectaNaDatabase();

conexao.on("error", (error) => {
    console.error("Erro de conexão", error)
});

conexao.once("open", () => {
    console.log("Conexão com o banco feita com o sucesso");
})

const app = express();
routes(app);

export default app
// Passamos a responsabilidade para o express de criar e receber as rotas