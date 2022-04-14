import { useState } from 'react'
import "./styles.css"

export function ToDoList() {
  const [tarefa, setTarefa] = useState("")
  const [listaDeTarefas, setListaDeTarefas] = useState([])
  
  // A função abaixo é chamada sempre que for digitado algo no input
  function alteracaoDoNomeDaTarefa(evento) {
    const digitoDoUsuario = evento.target.value;

    setTarefa(digitoDoUsuario);
  }

  function adicionaTarefa(evento) {
    evento.preventDefault(); // impede que o navegador recarregue a página ao clicar no botão
    
    if (tarefa && tarefa.length > 2) {
      setListaDeTarefas([
        ...listaDeTarefas,
        {
          titulo: tarefa,
          concluida: false,
        },
      ]);
    }

    setTarefa("");
  }

  function alterarStatusDaTarefa(idTarefa) {
    const novaListaDeTarefas = listaDeTarefas.map((tarefa, index) => {
      // Se o índice da tarefa marcada for igual ao id da tarefa que está sendo percorrida
      if (idTarefa === index) {
        return {
          titulo: tarefa.titulo,
          concluida: !tarefa.concluida, // Invertendo status da tarefa
        };
      }

      return tarefa;
    });

    // Atualizando lista de tarefas com a inversão do status da tarefa cujo id é idTarefa
    setListaDeTarefas(novaListaDeTarefas);
  }

  function removerTarefa(idTarefa) {
    // Filtrando pelas tarefas que não têm o id da tarefa que está sendo removida (idTarefa)
    const novaListaDeTarefas = listaDeTarefas.filter(
      (_, index) => index !== idTarefa
    );

    // Atualizando a lista de tarefas, mantendo apenas aquelas que foram filtradas, ou seja, excluindo a tarefa
    // cujo id é idTarefa
    setListaDeTarefas(novaListaDeTarefas);
  }


  return (
    <>
      <section id="todo-list">
        <h2>Minhas Tarefas</h2>
        <form className="formulario">
          <input type="text" placeholder="digite a tarefa" value={tarefa} onChange={alteracaoDoNomeDaTarefa} />
          <button onClick={adicionaTarefa}>Adicionar</button>
        </form>
          <ul className="lista-de-tarefas">
            {listaDeTarefas.map((tarefa, id) => (
              <li key={id}>
                <input
                  type="checkbox"
                  checked={tarefa.concluida}
                  onClick={() => alterarStatusDaTarefa(id)}
                />
                <span className={tarefa.concluida ? "tarefa-concluida" : ""}>
                  {tarefa.titulo}
                </span>
                <button onClick={() => removerTarefa(id)}>Remover</button>
              </li>
            ))}
          </ul>
      </section>
    </>
  )
}