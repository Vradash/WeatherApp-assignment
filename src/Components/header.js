import { useState , useEffect} from "react"
import axios from "axios";
// import barIcon from '../images/vertical-ellipsis.svg';
import NotePad from "./notePad";
import suggestions from "../suggestions"

export default function Header(props){
    const [input, setInput] = useState('');
    const [clicked,setClicked] = useState(false);
    const [showPad,setShowPad] = useState(false);
    // console.log(barIcon)

    useEffect(() => {
    if(input){
      axios.get(`https://geocoding-api.open-meteo.com/v1/search?name=${input}&count=1&language=en&format=json`)
      .then(res=>props.returnFunc(res.data))
      .catch(err=>console.log(err));
    }},[clicked]);

    // console.log(city);
    // console.log(input);

    return(
        <div id="navbar">
            <h3>WeatherCast</h3>
            <div className="wrapper">
                <div className="search-box ">
                    <input className="search-txt" type="text" placeholder="Enter city name" onChange={e=>setInput(e.target.value)} value={input}/>
                        <a className="icon" href="/#" onClick={()=>setClicked(!clicked)}>
                            <i className="fas fa-search" ></i>
                        </a>
                        <div className="sugg-box">
                            {   
                                suggestions.filter((val)=>{
                                if(input === ""){
                                    return 
                                }else if(val.toLowerCase().startsWith(input.toLowerCase())){
                                    return val;
                                }
                            }).sort().map((val, key)=>{
                                return <li key={key} onClick={()=>setInput(val)}>{val}</li>;
                            })}
                    </div>
                </div>
            </div>
            {/* <img src={require('../images/vertical-ellipsis.svg')} alt="no image" /> */}
            {(showPad)? <NotePad /> : null}
            {(showPad)? <svg className ="barIcon" onClick={()=>setShowPad(false)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M13.41,12l4.3-4.29a1,1,0,1,0-1.42-1.42L12,10.59,7.71,6.29A1,1,0,0,0,6.29,7.71L10.59,12l-4.3,4.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L12,13.41l4.29,4.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Z"/></svg>        
            : <svg className="barIcon" onClick={()=>setShowPad(true)} viewBox="0 0 192 512" xmlns="http://www.w3.org/2000/svg"><path d="m96 184c39.8 0 72 32.2 72 72s-32.2 72-72 72-72-32.2-72-72 32.2-72 72-72zm-72-104c0 39.8 32.2 72 72 72s72-32.2 72-72-32.2-72-72-72-72 32.2-72 72zm0 352c0 39.8 32.2 72 72 72s72-32.2 72-72-32.2-72-72-72-72 32.2-72 72z"/></svg>
            }
        </div>
    )
}