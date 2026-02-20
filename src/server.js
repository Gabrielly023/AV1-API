import express from "express";

const app = express();

const PORT = 3000;

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Olá gaby!");
    res.status(200).json(tarefas);
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);

});

app.post("/tarefas", (req, res) => {
    const { titulo } = req.body;
})