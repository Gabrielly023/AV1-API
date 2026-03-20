export const tarefas = [
    {id: 1, titulo: "estudar node", concluida: false},
    {id: 2, titulo:"fazer banco de dados", concluida: false}
];

function adicionarTarefas(titulo) {
    const novaTarefa = {
        id: tarefas.length + 1,
        titulo: titulo,
        concluido: false
    };

    tarefas.push(novaTarefa);
}

console.log(tarefas);