import { useState } from 'react'

import './style.css'

function Home() {


  return (
    <div className='container'>
        <form >
          <h1>Cadastro de Usuários</h1>
          <input name='nameInput' type='text'/>
          <input name='ageInput' type='number'/>
          <input name='emailInput' type='email'/>

        </form>
    </div>
  )
}

export default Home
