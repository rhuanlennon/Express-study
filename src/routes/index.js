import express from "express";
import livros from "./LivroRoutes.js";

const routes = (app) => {
    app.route("/").get((req, res) => res.status(200).send("Curso de Node.js"));

    app.use(express.json(), livros); // livros são as rotas que foram criadas no LivroRoutes.js
}

export default routes;