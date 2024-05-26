import { useState } from "react"
import suggestions from "../suggestions"

export default function Header(){
    const [input, setInput] = useState('');
    // console.log(input);
    // console.log(suggestions);

    return(
        <div id="navbar">
            <h3>WeatherCast</h3>
            <div className="wrapper">
                <div className="search-box ">
                    <input className="search-txt" type="text" placeholder="Enter Country name" onChange={e=>setInput(e.target.value)} value={input}/>
                        <a className="icon" href="/#">
                            <i className="fas fa-search"></i>
                        </a>
                    <div className="sugg-box">
                        {   
                            suggestions.filter((val)=>{
                            if(input === ""){
                                return 
                            }else if(val.toLowerCase().startsWith(input.toLowerCase())){
                                return val
                            }
                        }).sort().map((val, key)=>{
                            return <li key={key} onClick={()=>setInput(val)}>{val}</li>;
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}