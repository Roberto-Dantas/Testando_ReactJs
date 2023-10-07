function GerarSaudacao({nomeUsuario}){

    function Saudaçao(nome){
        return `Olá, ${nome}, tudo bem?`
    }
    return(
        <>
            {nomeUsuario && <p>{Saudaçao(nomeUsuario)}</p>}
        </>
    )
}

export default GerarSaudacao