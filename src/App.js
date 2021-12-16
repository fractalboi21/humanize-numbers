import React, { useState, useEffect } from 'react';
import './style.css';
import HumanCardItem from './components/HumanCardItem';
import Error from './components/Error';
import WebFont from 'webfontloader';
let numToWords = require('number-to-words');
let approxNum = require('approximate-number');

function HumanCard() {
  return (
    <>
      <HumanCardItem
        title={'Human readable format:'}
        display={approxNum(props.number).toUpperCase()}
      />
      <HumanCardItem
        title={'Number of digits:'}
        display={props.number.toString().length}
      />
      <HumanCardItem
        title={'Numbers to words:'}
        display={numToWords.toWords(props.number)}
      />
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
          <HumanCardItem
            title={'Human readable format:'}
            display={approxNum(props.number).toUpperCase()}
            desc={
              'A simple way to format huge numbers as human readable strings.'
            }
          />
          <HumanCardItem
            title={'Number of digits:'}
            display={`${props.number.toString().length} digit`}
            desc={'Counts the number of digits entered by the user'}
          />
          <HumanCardItem
            title={'Numbers to words:'}
            display={numToWords.toWords(props.number)}
            desc={'Converts a number to a US English word representation.'}
          />
        </>
      )}
    </>
  );
}
export default function App() {
  const [number, setNumber] = useState(0);
  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Droid Sans', 'Chilanka'],
      },
    });
  }, []);
  return (
    <div style={{ fontFamily: 'Chilanka' }}>
      <h1
        style={{
          textAlign: 'center',
          backgroundColor: 'black',
          color: 'white',
          borderRadius: 5,
          paddingTop: 25,
          paddingBottom: 25,
        }}
      >
        Humanize numbers
      </h1>

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
      <p>App version: 0.0.10</p>
    </div>
  );
}
