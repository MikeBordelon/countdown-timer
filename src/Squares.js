import React from 'react';
import './Squares.css';


const Squares = ({days, hours, minutes, seconds}) => {

    return (
      <div  className='container'>
        <div className='squares'>
          <div className='numbers'>{days}</div>
          <div className='DHMS'>{days > 1 || days === 0 ? 'Days' : 'Day'}</div>
        </div>
        <div className='squares'>
          <div className='numbers'>{hours}</div>
          <div className='DHMS'>{hours > 1 || hours === 0 ? 'Hours' : 'Hour'}</div>
        </div>
        <div className='squares'>
          <div className='numbers'>{minutes}</div>
          <div className='DHMS'>{minutes > 1 || minutes === 0 ? 'Minutes' : 'Minute'}</div>
        </div>
        <div className='squares'>
          <div className='numbers'>{seconds}</div>
          <div className='DHMS'>{seconds > 1 || seconds === 0 ? 'Seconds' : 'Second'}</div>
        </div>
      </div>
    );
}


export default Squares;
