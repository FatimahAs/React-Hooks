import React, { useState } from 'react';

function App() {
  const [value1, setValue1] = useState(1);
  const [value2, setValue2] = useState(2);
  const [result, setResult] = useState(null);



  const incrementValue1 = () => setValue1(value1 + 1);
  const decrementValue1 = () => setValue1(value1 - 1);
  const incrementValue2 = () => setValue2(value2 + 1);
  const decrementValue2 = () => setValue2(value2 - 1);
  
  function add() {
    setResult(value1 + value2);
  }

  function subtract() {
    setResult(value1 - value2);
  }

  function multiply() {
    setResult(value1 * value2);
  }

  function division() {
    setResult(value1 / value2);
  }



  return (
    <div className='flex flex-col justify-center items-center mt-5  gap-4 ml-40 mr-40'>
      <h4 className='text-4xl'> value1 : {value1}</h4>
      <div className='text-center flex flex-row gap-5'>
        
        <button className='text-center bg-amber-950 text-white  rounded-xl pointer-coarse text-xl w-8 h-8' onClick={incrementValue1}>+</button>
     
        <button className='text-center bg-amber-950 text-white rounded-xl pointer-coarse text-xl w-8 h-8'  onClick={decrementValue1}>-</button>
      </div>

       <h4 className='text-4xl'>value2 : {value2}</h4>
      <div className=' text-center flex flex-row gap-5'>
        <button className='text-center bg-amber-950 text-white  rounded-xl pointer-coarse text-xl w-8 h-8' onClick={incrementValue2}>+</button>
        <button className='text-center bg-amber-950 text-white  rounded-xl pointer-coarse text-xl w-8 h-8' onClick={decrementValue2}>-</button>
      </div>

      <div className='flex flex-row gap-5 mt-10'>
        <button className='text-center bg-amber-950 text-white  rounded-xl pointer-coarse text-xl w-8 h-8' onClick={add}> +</button>
        <button className="text-center bg-amber-950 text-white  rounded-xl pointer-coarse text-xl w-8 h-8" onClick={subtract}> -</button>
        <button className="text-center bg-amber-950 text-white  rounded-xl pointer-coarse text-xl w-8 h-8" onClick={multiply}> *</button>
        <button className="text-center bg-amber-950 text-white  rounded-xl pointer-coarse text-xl w-8 h-8" onClick={division}> /</button>
      </div>

      <div className='text-center mt-10'>
        <h3 className='bg-amber-500 text-4xl rounded-3xl w-40 text-center flex-wrap'> Result : {result !== null ? result : ''}</h3>
      </div>
    </div>
  );
}

export default App;
