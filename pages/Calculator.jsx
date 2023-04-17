import { useState } from 'react'

const Calculator = () => {

    const [output, setoutput] = useState("");
    
    const operationHandler = (inp) => {
        setoutput(output.concat(inp))
    }

    const ClearHandler = () => {
        setoutput(0)
    }

    const calculationHandler = (inp) => {
        setoutput(eval(output))
    }

    const deleteHandler = () => {
        // setoutput(pop())
    }
    
  return (
    <div className='calculator'>
        <div className='head'>
            <h1>Calculator</h1>
        </div>
        <div className="innercalculator">
            <div contenteditable="false" className="screencon">
                {output}
            </div>

            <div className="inputcon">
                <button onClick={()=> ClearHandler("AC")}>
                    <span>ac</span>
                </button>

                <button onClick={()=> deleteHandler("DE")}>
                    <span>de</span>
                </button>

                <button onClick={()=> operationHandler("%")}>
                    <span>%</span>
                </button>

                <button onClick={()=> operationHandler("/")}>
                    <span>/</span>
                </button>

                <button onClick={()=> operationHandler("7")}>
                    <span>7</span>
                </button>

                <button onClick={()=> operationHandler("8")}>
                    <span>8</span>
                </button>

                <button onClick={()=> operationHandler("9")}>
                    <span>9</span>
                </button>

                <button onClick={()=> operationHandler("*")}>
                    <span>*</span>
                </button>

                <button onClick={()=> operationHandler("4")}>
                    <span>4</span>
                </button>

                <button onClick={()=> operationHandler("5")}>
                    <span>5</span>
                </button>

                <button onClick={()=> operationHandler("6")}>
                    <span>6</span>
                </button>

                <button onClick={()=> operationHandler("-")}>
                    <span>-</span>
                </button>

                <button onClick={()=> operationHandler("1")}>
                    <span>1</span>
                </button>

                <button onClick={()=> operationHandler("2")}>
                    <span>2</span>
                </button>

                <button onClick={()=> operationHandler("3")}>
                    <span>3</span>
                </button>

                <button onClick={()=> operationHandler("+")}>
                    <span>+</span>
                </button>

                <button onClick={()=> operationHandler("00")}>
                    <span>00</span>
                </button>

                <button onClick={()=> operationHandler("0")}>
                    <span>0</span>
                </button>

                <button onClick={()=> operationHandler(".")}>
                    <span>.</span>
                </button>

                <button onKeyDown={calculationHandler} onClick={()=> calculationHandler()}>
                    <span>=</span>
                </button>
            </div>
        </div>
    </div>
  )
}

export default Calculator