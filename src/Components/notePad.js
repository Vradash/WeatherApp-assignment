import { useState } from "react";

export default function NotePad(){
    const [input,setInput] = useState('');
    const [array,setArray] = useState([]);
    // console.log(input);
    // console.log('arr',array);
    return(
        <>
        <div id="notePad">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M13.41,12l4.3-4.29a1,1,0,1,0-1.42-1.42L12,10.59,7.71,6.29A1,1,0,0,0,6.29,7.71L10.59,12l-4.3,4.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L12,13.41l4.29,4.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Z"/></svg>
            <h4>Vikram Singh</h4>
            <h4>singhvikramrajan111@gmail.com</h4>
            <div className="note-wrapper">
                <div className="note-list">
                    <ul>
                        {array?.map((val,key)=><li key={key}>{val}</li>)}
                    </ul>
                </div>
                <div className="note-box">
                    <input className="note-txt" placeholder="Enter note" onChange={e=>setInput(e.target.value)} value={input} />
                    {/* <textarea className="note-txt" placeholder="Enter note"></textarea> */}
                    <button className="note-btn" onClick={()=>setArray([...array,input])}>Save</button>
                </div>
            </div>
        </div>
        </>
    );
}