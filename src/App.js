import React from "react";
import { useState } from "react";
import orangsch from './orange.jpg';
import gaelb from './gelb.png';


export default function App() {
const [isChecked, setIdChecked] = useState(false)
const [zaehlerOrange, setZaehlerOrange] = useState(0)
const [zaehlerGelb, setZaehlerGelb] = useState(0)
const [isWritten, setIsWritten] = useState("")

  return (
    <div className="App">
      <div id="Header">
        <div className="BoxSeiten">
          <img className="Bilder"
          src={orangsch}
          alt="orangsch"
          />
          <div>so viele habe ich schon getrunken: {zaehlerOrange}</div>
          <button className="kleinerKnopf" onClick={() => setZaehlerOrange(zaehlerOrange + 1)} 
            style={{backgroundColor: "orange", border: "black"}}>+ 1</button>
          <button className="kleinerKnopf" onClick={() => setZaehlerOrange(zaehlerOrange - 1)} 
            style={{backgroundColor: "red", border: "black"}}>- 1</button>
        </div>  
        <div className="Mittelbox"
         style={{backgroundColor: isChecked ? "darkorange" : "yellow"}}>
          <div> Klick doch mol druf: </div>
          <input  id="checkbox" type="checkbox" checked={isChecked} 
          onChange={ (e) => setIdChecked(e.target.checked)} />
          <p>{isChecked ? true : false}</p>
          <p style={{backgroundColor: isChecked ? "orange" : "yellow"}}></p>
          <div>Was isch dis Lieblingsgetränk?</div>
          <input type="text" 
          value={isWritten}
          onChange={ (e) => setIsWritten(e.target.value)}
          />
        </div>
        <div className="BoxSeiten">
          <img className="Bilder"
          src={gaelb}
          alt="gälb"
          />
          <div>so viele habe ich schon getrunken: {zaehlerGelb}</div>
          <button className="kleinerKnopf" onClick={() => setZaehlerGelb(zaehlerGelb + 1)} 
            style={{backgroundColor: "yellow", border: "black"}}>+ 1</button>
          <button className="kleinerKnopf" onClick={() => setZaehlerGelb(zaehlerGelb - 1)} 
            style={{backgroundColor: "red", border: "black"}}>- 1</button>
        </div>
      </div>
    <div style={{fontSize: 20, color: "darkorange"}}>So gerne habe ich das orange Getränk: </div>
    <div>trinke ich gar nicht - neutral - trinke ich sehr gerne</div>
    <input type="range" style={{width: '300px'}}/>
    <div style={{fontSize: 20, color: "#F3C62C"}}>So gerne habe ich das gelbe Getränk: </div>
    <div>trinke ich gar nicht - neutral - trinke ich sehr gerne</div>
    <input type="range" style={{width: '300px'}}/>
    <div>Dein Lieblingsgetränk: {isWritten}</div>
    </div>
  );
}
