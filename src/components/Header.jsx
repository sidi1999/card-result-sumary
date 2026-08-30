import Data from '../data.json'
 import React from 'react';


  
  


export default function Header(){





function average() {
  const total = Data.reduce((sum, e) => sum + e.score, 0);
  
  return Math.trunc(total / Data.length);
}

const averagecalc = average();

const califiction = (averagecalc  < 50) ? 'Very bad': 
                    (averagecalc < 75) ? 'good':
                    (averagecalc < 80 ) ? 'Great'
                    : 'Excelent';

  


  
  return (
    <header>
        <h3>Your Result</h3>
        <div className="score">
          <p className='score-title'>{averagecalc} <span>of 100</span></p>
          
        </div>
        <h2>{califiction}</h2>
        <p>You score is higher than variable of people who have taken these test</p>
     </header>
      )
}