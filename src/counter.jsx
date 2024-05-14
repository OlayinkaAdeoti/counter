 import { useState } from 'react'


function Counter() {


   
    const [count, setCounter] = useState(0);
   
    const addCountNum = () => {
        setCounter(count + 1);
    };
    const subCountNum = () => {
        setCounter(count - 1);
    };
    const CountNum = () => {
        setCounter(0);
    };
   

    return(<div className='a-new-counter'>
        <p className='count-display'>{count}</p>
       <button className='counter-btn' onClick={addCountNum}>Add</button>
       <button className='counter-btn' onClick={CountNum}>Reset</button>
       <button className='counter-btn' onClick={subCountNum}>subtract</button>
     
      </div>);

}

export default Counter