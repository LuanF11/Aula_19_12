import { useState } from "react"

function Aluno({
    nome = "Luan",
    nota = 0
}){
    const [notaIndividual, setnotaIndividual] = useState(nota)

    function handleNotaIndividual(e){

        let n = e.target.value
        n = n < 0 ? 0.0 : n
        n = n > 10 ? 10.0 : n

        setnotaIndividual(n)
    }

    return(
        <div>
            <span>{nome}</span>
            <input onChange={handleNotaIndividual} value={notaIndividual} type="number" step={0.1} min={0.0} max={10}/>
        </div>
    )



}

export default Aluno