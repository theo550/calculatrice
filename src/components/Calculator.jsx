import React, { useState } from 'react'
import './calculator.css'

function Calculator() {

  const [firstNumber, setFirstNumber] = useState([])
  const [secondNumber, setSecondNumber] = useState([])
  const [finalNumber, setFinalNumber] = useState(null)
  const [operator, setOperator] = useState('')


  const clicked = (e) => {
    setFinalNumber(null)
    setFirstNumber(firstNumber.concat(e.target.innerHTML))
  }

  const del = () => {
    const newNumber = [...firstNumber]
    newNumber.pop()
    setFirstNumber(newNumber)
  }

  const reset = () => {
    setFirstNumber([])
    setSecondNumber([])
    setFinalNumber(null)
  }

  const operation = (e) => {
    setSecondNumber(finalNumber != null ? secondNumber.concat(finalNumber) : firstNumber)
    setFirstNumber([])
    setFinalNumber(null)
    setOperator(e.target.innerHTML)
  }

  const result = () => {
    if (operator === '+') {
      setFinalNumber(Number(firstNumber.join('')) + Number(secondNumber.join('')))
      setFirstNumber([])
      setSecondNumber([])
    } else if(operator === '-') {
      setFinalNumber(Number(secondNumber.join('')) - Number(firstNumber.join('')))
      setFirstNumber([])
      setSecondNumber([])
    } else if(operator === '/') {
      setFinalNumber(Number(secondNumber.join('')) / Number(firstNumber.join('')))
      setFirstNumber([])
      setSecondNumber([])
    } else if(operator === '*') {
      setFinalNumber(Number(firstNumber.join('')) * Number(secondNumber.join('')))
      setFirstNumber([])
      setSecondNumber([])
    }
  }

  return (
    <div className='calculator'>
      <div className="header">
        <h1>calc</h1>
      </div>
      <div className="screen">
        <p className='result'>{finalNumber != null ? finalNumber : firstNumber}</p>
      </div>
      <div className="buttons">
        <div className="wrapper">
          <div onClick={clicked} className="number">7</div>
          <div onClick={clicked} className="number">8</div>
          <div onClick={clicked} className="number">9</div>
          <div onClick={del} className="number blue">del</div>
          <div onClick={clicked} className="number">4</div>
          <div onClick={clicked} className="number">5</div>
          <div onClick={clicked} className="number">6</div>
          <div onClick={operation} className="number">+</div>
          <div onClick={clicked} className="number">1</div>
          <div onClick={clicked} className="number">2</div>
          <div onClick={clicked} className="number">3</div>
          <div onClick={operation} className="number">-</div>
          <div onClick={clicked} className="number">.</div>
          <div onClick={clicked} className="number">0</div>
          <div onClick={operation} className="number">/</div>
          <div onClick={operation} className="number">*</div>
          <div onClick={reset} className="number reset blue">reset</div>
          <div onClick={result} className="number equal">=</div>
        </div>
      </div>
    </div>
  )
}

export default Calculator
