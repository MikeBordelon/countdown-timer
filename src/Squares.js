import React from 'react';

const styles = {

  container: {
        display:  'flex',
        margin: '0 auto',
        alignItems: 'center',
        justifyContent: 'space-around',
        height: '100px',
        width: '400px',
        fontFamily: 'helvetica'
      },

      squares: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        border: '1px solid gray',
        borderRadius: '3px',
        height: '90px',
        width: '90px'
      },

      numbers: {
        fontSize: '30px'
      },

      DHMS: {
        fontSize: '15px',
        color: 'gray'
      }
    }

const Squares = ({days, hours, minutes, seconds}) => {

    return (
      <div style={styles.container}>
        <div style={styles.squares} >
          <div style={styles.numbers}>{days}</div>
          <div style={styles.DHMS}>Days</div>
        </div>
        <div style={styles.squares} >
          <div style={styles.numbers}>{hours}</div>
          <div style={styles.DHMS}>Hours</div>
        </div>
        <div style={styles.squares} >
          <div style={styles.numbers}>{minutes}</div>
          <div style={styles.DHMS}>Minutes</div>
        </div>
        <div style={styles.squares} >
          <div style={styles.numbers}>{seconds}</div>
          <div style={styles.DHMS}>Seconds</div>
        </div>
      </div>
    );
}


export default Squares;
