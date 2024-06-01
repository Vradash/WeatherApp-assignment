import { useState } from "react";

export default function NotePad() {
    const [input, setInput] = useState('');
    const [array, setArray] = useState([]);

    function removeItem(index) {
        let temp = array;
        temp.splice(index, 1);
        setArray([...temp]);
    }

    // console.log(input);
    // console.log('arr',array);
    return (
        <>
            <div id="notePad">
                <h4>Vikram Singh</h4>
                <h4>singhvikramrajan111@gmail.com</h4>
                <div className="note-wrapper">
                    <div className="note-list">
                        <ul>
                            {array?.map((val, key) => <li key={key} onClick={()=>removeItem(key)}>{val}</li>)}
                        </ul>
                    </div>
                    <div className="note-box">
                        <input className="note-txt" placeholder="Enter note" onChange={e => setInput(e.target.value)} value={input} />
                        <button className="note-btn" onClick={() => { setArray([...array, input]); setInput('') }}>Save</button>
                    </div>
                </div>
            </div>
        </>
    );
}