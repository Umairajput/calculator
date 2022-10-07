import React, { useState } from 'react'
const Calculator = () => {
    if ("serviceWorker" in navigator) {
        window.addEventListener("load", function () {
            navigator.serviceWorker
                .register("../component/serviceWorker")
                .then((res) => console.log("service worker registered"))
                .catch((err) => console.log("service worker not registered", err));
        });
    }
    const [btnValue, setBtnValue] = useState([])
    const [symbols, setSymbols] = useState(true)
    const False=()=>{
        setSymbols(false)
    }
    const True =()=>{
        setSymbols(true)
    }
    const Clear = () => {
        setBtnValue([])
    }
    const Calculation = () => {
        setBtnValue(eval(btnValue)?.toString())
    }
    return (
        <>
            <div className='container'>
                <h1 className='heading'>Calculator</h1>
                <div className="calculator">
                    <div className='div'>{btnValue}</div>
                    <table>
                        <tbody>
                            <tr>
                                <td onClick={True}><button onClick={Clear} className='btn'>C</button></td>
                                {symbols === true ?
                                    <td onClick={False}><button className='btn' value={'%'} onClick={(e) => {
                                        setBtnValue(btnValue + e?.target?.value)
                                    }}>%</button></td>
                                    :
                                    <td><button className='btn'>%</button></td>
                                }
                                <td onClick={True}><button className='btn' onClick={(e) => {
                                    setBtnValue(btnValue?.slice(0, -1) + e?.target?.value)
                                }}>D</button></td>
                                {symbols === true ?
                                    <td onClick={False}><button className='btn' value={'/'} onClick={(e) => {
                                        setBtnValue(btnValue + e?.target?.value)
                                    }} >/</button></td>
                                    :
                                    <td><button className='btn'>/</button></td>
                                }
                            </tr>
                            <tr>
                                <td onClick={True}><button onClick={(e) => {
                                    setBtnValue(btnValue + e?.target?.value)
                                }} value='7' id='btn' className='bttn'>7</button></td>
                                <td onClick={True}><button onClick={(e) => {
                                    setBtnValue(btnValue + e?.target?.value)
                                }} value='8' className='bttn'>8</button></td>
                                <td onClick={True}><button
                                    onClick={(e) => {
                                        setBtnValue(btnValue + e?.target?.value)
                                    }} value='9' className='bttn'>9</button></td>
                                {symbols === true ?
                                        <td onClick={False}><button className='btn' value={'*'} onClick={(e) => {
                                            setBtnValue(btnValue + e?.target?.value)
                                        }}>X</button></td>
                                        :
                                        <td><button className='btn'>X</button></td>
                                }
                            </tr>
                            <tr>
                                <td onClick={True}><button onClick={(e) => {
                                    setBtnValue(btnValue + e?.target?.value)
                                }} value='4' className='bttn'>4</button></td>
                                <td onClick={True}><button onClick={(e) => {
                                    setBtnValue(btnValue + e?.target?.value)
                                }} value='5' className='bttn'>5</button></td>
                                <td onClick={True}><button onClick={(e) => {
                                    setBtnValue(btnValue + e?.target?.value)
                                }} value='6' className='bttn'>6</button></td>
                                {symbols === true?
                                    <td onClick={False}><button className='btn' value={'-'} onClick={(e) => {
                                        setBtnValue(btnValue + e?.target?.value)
                                    }}>-</button></td>
                                    :
                                    <td><button className='btn'>-</button></td>
                                }
                            </tr>
                            <tr>
                                <td onClick={True}><button onClick={(e) => {
                                    setBtnValue(btnValue + e?.target?.value)
                                }} value='1' className='bttn'>1</button></td>
                                <td onClick={True}><button onClick={(e) => {
                                    setBtnValue(btnValue + e?.target?.value)
                                }} value='2' className='bttn'>2</button></td>
                                <td onClick={True}><button onClick={(e) => {
                                    setBtnValue(btnValue + e?.target?.value)
                                }} value='3' className='bttn'>3</button></td>
                                {symbols === true?
                                    <td onClick={False}><button className='btn' value={'+'} onClick={(e) => {
                                        setBtnValue(btnValue + e?.target?.value)
                                    }}>+</button></td>
                                    :
                                    <td><button className='btn'>+</button></td>
                                }
                            </tr>
                            <tr>
                                <td onClick={True}><button onClick={(e) => {
                                    setBtnValue(btnValue + e?.target?.value)
                                }} value='00' className='bttn'>00</button></td>
                                <td onClick={True}><button onClick={(e) => {
                                    setBtnValue(btnValue + e?.target?.value)
                                }} value='0' className='bttn'>0</button></td>
                                {symbols === true ?
                                    <td onClick={False}><button onClick={(e) => {
                                        setBtnValue(btnValue + e?.target?.value)
                                    }} value='.' className='bttn'>.</button></td>
                                    :
                                    <td><button className='bttn'>.</button></td>
                                }
                                <td onClick={True}><button className='btn' onClick={Calculation} >=</button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}
export default Calculator
