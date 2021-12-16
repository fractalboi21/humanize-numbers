import React, { useState } from 'react';

let stylesheet = {
  humanCardItem: {
    border: '2px solid black',
    borderRadius: 15,
    margin: 5,
    marginTop: 15,
    padding:15
  },
  display: {
    textAlign: 'center',
    backgroundColor: "black",
    color:"white",
    padding:10,
    borderRadius:15
  },
};

function HumanCardItem(props) {
  return (
    <div style={stylesheet.humanCardItem}>
      <h3>{props.title}</h3>
      <h1 style={stylesheet.display}>{props.display}</h1>
    </div>
  );
}

export default HumanCardItem;
