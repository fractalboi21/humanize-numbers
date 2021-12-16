import React from 'react';

const stylesheet = {
  heading: {
    border: '2px solid black',
    borderRadius: 15,
    padding: 15,
    margin: 5,
    textStyle: 'bold',
  },
  errorCard: {
    display: 'flex',
    flexDirection: 'column',
    border: '2px solid black',
    borderRadius: 15,
    margin: 5,
    marginTop: 15,
    padding: 15,
  },
  info: {
    border: '2px solid black',
    borderRadius: 15,
    padding: 15,
    backgroundColor: '#ff9999',
  },
};

function Error() {
  return (
    <div style={stylesheet.errorCard}>
      <h3 style={stylesheet.heading}>Error!</h3>

      <p style={stylesheet.info}>
        Note: dont use extremely large numbers. cuz, the application currently
        does not support extremely huge numbers.Dont use numbers above 14digits
        😭.
      </p>
      <p style={stylesheet.info}>
        New update: 
        code has been refactored,
        new design has been implenented.


      </p>
      <p>This app does not support any other datatypes other than numbers.</p>
    </div>
  );
}

export default Error;
