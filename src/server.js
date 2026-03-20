import express from "express";

import {tarefas} from "./index.js";

const app = express();

const PORT = 3000;

app.use(express.json());

app.get("/", (req, res) => {
    res.status(200).json(tarefas);
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);

});

app.post("/tarefas", (req, res) => {
    const { titulo } = req.body;

    if (!titulo || titulo.trim() === "") {
        return res.status(400).json({
            erro:"Título obrigatório."
        })
    }
res.status(200).json(titulo);
});