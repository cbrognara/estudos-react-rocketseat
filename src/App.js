import React, { useState } from 'react'
import Header from './Header'

function App() {
  // desestruturação da const anterior 'projects'
  let [projects, setProjects] = useState([
    'Desenvolvimento de App',
    'Web Front-End'
  ])
  // useState retonar um array com 2 posições ^^^
  //
  // 1. Variável com o seu valor inicial
  // 2. Função para atualizarmos esse valor

  // Função com evento de click vv
  function handleAddProject() {
    // projects.push('teste') anteriormente <<
    //
    // criar um novo array: copiar o original com spread e acrescentar o novo item
    setProjects([...projects, 'novoProjeto'])
    console.log(projects)
  }

  return (
    <>
      <Header title="Projects" />
      <ul>
        {projects.map((project, index) => (
          <li key={index}>{project}</li>
        ))}
      </ul>
      <button type="button" onClick={handleAddProject}>
        Adicionar projeto
      </button>
    </>
  )
}

export default App
