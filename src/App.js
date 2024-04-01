import styles from './App.module.css';
import React, { useState } from 'react';
import axios from "axios";

const App = () => {
  const [display, setDisplay] = useState('0');
  const [firstOperand, setFirstOperand] = useState("");
  const [secondOperand, setSecondOperand] = useState("")
  const [operator, setOperator] = useState("");

  

  const clearDisplay = () => {
    setFirstOperand("");
    setOperator("");
    setSecondOperand("");
    setDisplay('0');
  };

  const handleoperand = (e) => {
    if (operator === "") {
      setDisplay(firstOperand+e.target.value)
      setFirstOperand(firstOperand+e.target.value)
      
    } else {
      setDisplay(secondOperand + e.target.value)
      setSecondOperand(secondOperand+e.target.value)
      
    }
    
  }

  const handleOperator = (e) => {
    if (operator === "") {
      setOperator(e.target.value)
    setDisplay("")
    } else {
      setDisplay(eval(firstOperand+operator+secondOperand))
      setFirstOperand(eval(firstOperand+operator+secondOperand))
      setOperator(e.target.value)
      setSecondOperand("")
    }
    
  }

  // return (
  //   <div className={styles.container}>
  //   <div>
  //     <input type="text" value={display} disabled />
  //     <div>
  //       <button onClick={clearDisplay}>C</button>
  //       <button value="7" onClick={handleoperand}>7</button>
  //       <button value="8" onClick={handleoperand}>8</button>
  //       <button value="9" onClick={handleoperand}>9</button>
  //       <button value="/" onClick={handleOperator}>/</button>
  //     </div>
  //     <div>
  //       <button value="4" onClick={handleoperand}>4</button>
  //       <button value="5" onClick={handleoperand}>5</button>
  //       <button value="6" onClick={handleoperand}>6</button>
  //       <button value="*" onClick={handleOperator}>*</button>
  //     </div>
  //     <div>
  //       <button value="1" onClick={handleoperand}>1</button>
  //       <button value="2" onClick={handleoperand}>2</button>
  //       <button value="3" onClick={handleoperand}>3</button>
  //       <button value="-" onClick={handleOperator}>-</button>
  //     </div>
  //     <div>
  //       {/* <button onClick={inputDecimal}>.</button> */}
  //       <button value="0" onClick={handleoperand}>0</button>
  //       <button value="=" onClick={() => {

  //         console.log(eval(firstOperand+operator+secondOperand)); 
          
          
  //         clearDisplay()
  //         setDisplay(eval(firstOperand+operator+secondOperand))
  //         }}>=</button>
  //       <button value="+" onClick={handleOperator}>+</button>
  //     </div>
  //   </div>
  //   </div>
  // );




  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100vw",
      height: "100vh"
    }}>
      <div style={{
        height: "50vh",
        width: "20vw",
        background: "#FFD8D8",

        display: "grid",
        gridTemplateRows: "20% 80%"
      }}>
        <div style={{
          width: "100%",
          background: "#DDDDDD",
          display: "flex",
          justifyContent:"center",
          alignItems: "center"
        }}>
          <div style={{
            background: "#CAC8C8",
            width: "90%",
            height: "80%",
            display: "flex",
            alignItems: "center",
            
          }}>
            {display}
          </div>
        </div>
        <div>
          <div style={{
            fontFamily: "Inter, sans-serif",
            fontOpticalSizing: "auto",
            fontWeight: "100",
            fontStyle: "normal",
            width: "100%",
          }}>David</div>
          <div style={{
            display: "grid",
            gridTemplateRows: "1fr 1fr 1fr 1fr",
            gridTemplateColumns: "1fr 1fr 1fr 1fr",
            height: '88%'
          }}>
            <button value="9" className={styles.myButton} onClick={handleoperand}>9</button>
            <button value="8" className={styles.myButton} onClick={handleoperand}>8</button>
            <button value="7" className={styles.myButton} onClick={handleoperand}>7</button>
            <button value="/" className={styles.myButton} onClick={handleOperator}>/</button>
            <button value="6" className={styles.myButton} onClick={handleoperand}>6</button>
            <button value="5" className={styles.myButton} onClick={handleoperand}>5</button>
            <button value="4" className={styles.myButton} onClick={handleoperand}>4</button>
            <button value="*" className={styles.myButton} onClick={handleOperator}>*</button>
            <button value="3" className={styles.myButton} onClick={handleoperand}>3</button>
            <button value="2" className={styles.myButton} onClick={handleoperand}>2</button>
            <button value="1" className={styles.myButton} onClick={handleoperand}>1</button>
            <button value="-" className={styles.myButton} onClick={handleOperator}>-</button>
            <button value="0" className={styles.myButton} onClick={handleoperand}>0</button>
            <button value="=" className={styles.myButton} onClick={e => {
              axios({
            method: 'post',
            url: 'http://127.0.0.1:8000/calculate',
            data: {
              'string' : `${firstOperand}${operator}${secondOperand}`
            }
          }).then(res => {

            setDisplay(res.data.result)
          });
            }}>=</button>
            <button value="" className={styles.myButton} onClick={e => {

              console.log(`${firstOperand}${operator}${secondOperand}`)

              setFirstOperand("");
              setOperator("");
              setSecondOperand("");
            }}>out</button>
            <button value="+" className={styles.myButton} onClick={handleOperator}>+</button>

          </div>
        </div>

      </div>
    </div>
  )


};

export default App;
