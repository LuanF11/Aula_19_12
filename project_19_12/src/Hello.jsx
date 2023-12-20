import { useState } from "react"

function Hello({
    name = "informe",
    children
}){

    const [idade, setIdade] = useState(18)
    const [profi, setProfi] = useState("Caixa")
    return (
        <>
        <h1>Clique no {name}</h1>
        <h1>Seu filho é {children}</h1>
        <p>sua idade é {idade}</p>
        
        
        <button
            onMouseMove={() => setIdade(i => i+= 5000000000000000000000000000000000000000000000000000000000)}
            
            
        >
            Adiciona um ano
            </button>
        
        <p>Sua profissão é {profi}</p>

        <input type="text" value={profi} onChange={(e) => setProfi(e.target.value)}/>
        </>

        
    )

}

export default Hello