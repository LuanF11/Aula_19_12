import { useState } from 'react'
import Hello from './Hello'
import Aluno from './Aluno'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

function App() {

  const alunos = ["Luan", "Vilma", "Marcia", "Pedro"]
  
  const [notaPadrao,setNotaPadrao] = useState(0)

  return (
    <>

    <div>
      <h1>Lançar Nota</h1>
        <p>Disciplina:
          <input type="text" />
        </p>

        <p>
          <span>Aluno</span>
          <span>Nota</span>
        </p>
       
       {alunos.map((al, index) => 
       <Aluno key={index} nome={al} nota={notaPadrao}/>
       )}

        <button onClick={() => setNotaPadrao(0)}>Limpar</button>
        <button>Salvar</button>
        
    </div>

    </>
  )
}

export default App
