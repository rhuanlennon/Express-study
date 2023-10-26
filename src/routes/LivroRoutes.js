import express from "express";
import livroController from "../controllers/livroController.js";

const routes = express.Router();

routes.get("/livros", livroController.listarLivros);
routes.get("/livros/:id", livroController.listaLivrosPorId);
routes.post("/livros", livroController.cadastraLivro);
routes.put("/livros/:id", livroController.atualizarLivro);
routes.delete("/livros/:id", livroController.excluirLivro);

// Mesmas rotas mas métodos diferentes

export default routes;
