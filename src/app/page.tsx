"use client"
import styles from "@/app/globals.module.css"
import List from "./components/List";
import Link from 'next/link';
import { useState } from 'react'
import { clientType } from '@/app/commons/types'


export default function Page() {

    // lista de clientes
    const [clientList , setClientList ] =  useState<Array<clientType>>([])

    //Variavel do input Name
    const [inputName , setInputName] = useState("")

    //Variavel do input Idade
    const [inputIdade , setInputIdade] = useState("")

    // variavel do Estado
    const [inputEstado , setInputEstado] = useState("")

  return (
    <main >

      <Link href='/'>Home</Link>

      <div className={styles.inputsHeader}>

        <div>
          <label> Nome: </label>
          <input type="text" value={inputName}/>



          <label htmlFor="idade"> Idade: </label>
          <select name="idade" id="idade" value={inputIdade}>
            <option value="17">abaixo de 18</option>
		        <option value="18">acima de 18</option>
		        <option value="30">acima de 30</option>
            <option value="60">acima de 60</option>
          </select>

        </div>

        <div>

        <label htmlFor="estado"> Estado: </label>
          <select name="estado" id="estado" value={inputEstado}>
            <option value="SP">SP</option>
		        <option value="FOR">FOR</option>
		        <option value="RJ">RJ</option>
            <option value="MG">MG</option>
          </select>

        </div>

      </div>

      <div className={styles.components}>

        <List clientList={clientList}/>

      </div>

    </main>
  )
}
