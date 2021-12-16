import React, { useState } from 'react';
import './style.css';

let converter = require('number-to-words');
let human = require('human-number');

function Error() {
  return (
    <>
      <h3>Enter some valid number 😭😔!</h3>

      <p>
        Note: dont use extremely large numbers. cuz, the application currently
        does not support extremely huge number. dont use numbers above 15 digits
        😭.
      </p>
      <h3>This app does not support any other datatypes other than numbers.</h3>
      
    </>
  );
}

function Output(props) {
  return (
    <>
      {props.number === '' ? (
        <Error />
      ) : (
        <>
          <h3>👁️Human readable format:</h3>
          <h1 style={{ textAlign: 'center' }}> {human(props.number)}</h1>
          <hr />

          <h3>#️⃣Number of digits:</h3>
          <h4 style={{ textAlign: 'center' }}>
            <h3>{props.number.toString().length}</h3>
          </h4>
          <hr />

          <h3>🔤Numbers to words :</h3>
          <h4 style={{ textAlign: 'center' }}>
            {converter.toWords(props.number)}
          </h4>
          <hr />
        </>
      )}
    </>
  );
}

export default function App() {
  const [number, setNumber] = useState(0);

  console.log(number);
  return (
    <div>
      <h1 style={{ textAlign: 'center',backgroundColor:"black",color:"white",borderRadius:5, paddingTop:25, paddingBottom:25}}>Humanize numbers</h1>
      <p style={{ backgroundColor: ' #D1D1D1', borderRadius: 15, padding: 15 }}>
        This application converts huge numbers into human readable format.
      </p>

      <input
        className={'input'}
        type={'number'}
        placeholder={'only enter numbers..'}
        onChange={(e) => {
          if (e.target.value === '') {
            setNumber(0);
          }
          setNumber(e.target.value);
        }}
        min={-99999999}
        max={9999999}
        val={0}
      />
      <Output number={number} />
    </div>
  );
}
