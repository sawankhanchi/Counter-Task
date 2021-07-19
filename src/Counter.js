import React, { useState } from 'react';

function Counter() {

    const [counter, setCounter] = useState(0);
     
        setTimeout(() => {
            setCounter(counter + 1);
        }, 1000);


    return (
        <div>
           <h1>Counter</h1>

           {counter}
            
        </div>
    )
}

export default Counter;
