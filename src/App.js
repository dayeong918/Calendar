// App.js 

import { useState } from 'react';
import Calendar from 'react-calendar';
import './styles.css';

function App() {
  const [date, setDate] = useState(new Date());
  // const [result, setResult] =useState([]);

  // const formatShortWeekdaySun = (locale, date) => {
  //   result(date.toDateString().substr(0, 4))
  //   return result[0]
  // };
  // const formatShortWeekdaySat = (locale, data) => {
  //   result(date.toDateString).substr(0,4)
  //   return result[-1]
  // }



  return (
    <div className='app'>
      {/* <h1 className='text-center'>React Calendar</h1> */}
      <div className='calendar-container'>
        <Calendar 
          onChange={setDate} value={date} 
          formatDay={(locale, date) => date.toLocaleString('en', { day: 'numeric' })}
          formatShortWeekday={(locale, date) => date.toDateString().substr(0, 4)}
          calendarType="US"
          defaultView="decade"
          showNavigation={true}
          showNeighboringMonth={true}
          // currentMonthIndex={Number.isrequired}
        />
      </div>
      {/* <button id="bu1">333</button>
      <p className='text-center'>
        <span className='bold'>Selected Date:</span>{' '}
        {date.toDateString()}
      </p> */}
    </div>
  );
}


export default App;
