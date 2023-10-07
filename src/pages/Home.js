
import { useState } from 'react';
import SeuNome from '../components/SeuNome';
import GerarSaudacao from '../components/GerarSaudacao';
import styles from '../components/layout/ConteudoPag.module.css'

function Home(){
    const [nome, setNome] = useState()
    return (
        <>
            <div className={styles.contentPag}>
                <h1>Home</h1>
                <p>__Conteúdo da página__</p>
                <br />
                <h3>Alterando JSX</h3>
                <p>Estou aprendendo...</p>
            </div>
            <br />
            <h3>Teste 05</h3>
            <SeuNome setNome={setNome}/>
            <br/>
            <GerarSaudacao nomeUsuario={nome}/>
        </>
    )
}

export default Home