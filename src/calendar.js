import './App.css'
import React,{useState} from 'react'
import Calendar from 'react-calendar'
function Calen(){
const [date,setDate]=useState(new Date())
const [list,setList]=useState("")
const [state,setState]=useState(false)
let value;
let d;
const [i,setI]=useState("")
const add=()=>{
    localStorage.setItem(d,list)
    setState(true)
    setI("Your event on "+d+" is added")
    const speechSynthesis = window.speechSynthesis;
    const mess = new SpeechSynthesisUtterance("Your event is added");
        speechSynthesis.speak(mess);
        setList("")
}
const getValue=()=>{
    value=localStorage.getItem(d)
    setState(true)
    if(value){
        setI("Your Event it to "+value+" on date"+d)
        const speechSynthesis = window.speechSynthesis;
        const mess = new SpeechSynthesisUtterance("Your Event it to "+value);
        speechSynthesis.speak(mess);
    }
    else{
        setI("You have no event on "+d)
        const speechSynthesis = window.speechSynthesis;
        const mess = new SpeechSynthesisUtterance("You have no event");
        speechSynthesis.speak(mess);
    }
}
const del=()=>{
    setState(true)
    localStorage.removeItem(d)
    setI("Your event is deleted on "+d)
    const speechSynthesis = window.speechSynthesis;
    const mess = new SpeechSynthesisUtterance("Your event is deleted on ");
    speechSynthesis.speak(mess);
}
    return(
        <>
        <h1 id="name">Calendar</h1>
        <div className="calendar-container packing">
            <Calendar className={"bill"} onChange={setDate} value={date} />
        </div>
        <div className='touch'>
            <h1>Selected Date:{d=date.toDateString()} </h1>
        </div>
        <div className='form'>
        <input type='text' placeholder='Enter your checklist' value={list} onChange={(e)=>{setList(e.target.value)}} />
        <br />
        <div className='text'>
            {state &&
                <h1>{i}</h1>
            }
        </div>
        <button onClick={add}>Add it</button>
        <button onClick={getValue}>Check for checklist</button>
        <button onClick={del}>Delete checklist</button>
        </div>
        </>
    )

}
export default Calen