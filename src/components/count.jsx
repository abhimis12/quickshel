import { useState, useEffect } from "react";
import "./count.css"
export const Counter = () => {
  const [counter, setcounter1] = useState(1);
 
  return (
    <div className="num">
      <div className='buttonGroup'>
        <button className='buttonGroup_btn' onClick={() =>setcounter1(counter- 1)}>-</button>
        <input className='buttonGroup_btnvalue'  value={counter} />
        <button className='buttonGroup_btnp' onClick={() => setcounter1(counter + 1)}>+</button>
      </div>
    </div>
  );
};
