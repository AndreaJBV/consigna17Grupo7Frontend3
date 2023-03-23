import React from 'react'

const Form = ({handleClick}) => {
  return (
    <div>
        <h1>Formulario grupo 7</h1>
        <form>
            <input data-testid="noNumbers" type="text" />
            <button onClick={handleClick}>Enviar</button>
        </form>
    </div>
  )
}

export default Form