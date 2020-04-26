import React, { useState } from 'react';
import App from 'next/app';
import GoalContext from '../components/goal/goalContext';

function MyApp({ Component, pageProps }) {
  const [goal, setGoal] = useState('');
  const [firstKeyResults, setFirstKeyResults] = useState([
    {
      text: '',
    },
  ]);
  const [secondKeyResults, setSecondKeyResults] = useState([
    {
      text: '',
    },
  ]);
  const [thirdKeyResults, setThirdKeyResults] = useState([
    {
      text: '',
    },
  ]);
  const [fourthKeyResults, setFourthKeyResults] = useState([
    {
      text: '',
    },
  ]);
  const [firstQuarterKeyResult, setfirstQuarterKeyResult] = useState([
    {
      text: '',
    },
  ]);
  const [secondQuarterKeyResult, setsecondQuarterKeyResult] = useState([
    {
      text: '',
    },
  ]);
  const [thirdQuarterKeyResults, setThirdQuarterKeyResults] = useState([
    {
      text: '',
    },
  ]);
  const [firstMonthKeyResults, setFirstMonthKeyResults] = useState([
    {
      text: '',
    },
  ]);
  const [secondMonthKeyResults, setSecondMonthKeyResults] = useState([
    {
      text: '',
    },
  ]);
  const [thirdMonthKeyResults, setThirdMonthKeyResults] = useState([
    {
      text: '',
    },
  ]);
  const [fourthMonthKeyResults, setFourthMonthKeyResults] = useState([
    {
      text: '',
    },
  ]);
  const [monday, setMonday] = useState([
    {
      text: '',
    },
  ]);
  const [tuesday, setTuesday] = useState([
    {
      text: '',
    },
  ]);
  const [wednesday, setWednesday] = useState([
    {
      text: '',
    },
  ]);
  const [thursday, setThursday] = useState([
    {
      text: '',
    },
  ]);
  const [friday, setFriday] = useState([
    {
      text: '',
    },
  ]);
  const [saturday, setSaturday] = useState([
    {
      text: '',
    },
  ]);
  const [sunday, setSunday] = useState([
    {
      text: '',
    },
  ]);
  return (
    <>
      <GoalContext.Provider
        value={{
          goal,
          setGoal,
          firstKeyResults,
          setFirstKeyResults,
          secondKeyResults,
          setSecondKeyResults,
          thirdKeyResults,
          setThirdKeyResults,
          fourthKeyResults,
          setFourthKeyResults,
          firstQuarterKeyResult,
          setfirstQuarterKeyResult,
          secondQuarterKeyResult,
          setsecondQuarterKeyResult,
          thirdQuarterKeyResults,
          setThirdQuarterKeyResults,
          firstMonthKeyResults,
          setFirstMonthKeyResults,
          secondMonthKeyResults,
          setSecondMonthKeyResults,
          thirdMonthKeyResults,
          setThirdMonthKeyResults,
          fourthMonthKeyResults,
          setFourthMonthKeyResults,
          monday,
          setMonday,
          tuesday,
          setTuesday,
          wednesday,
          setWednesday,
          thursday,
          setThursday,
          friday,
          setFriday,
          saturday,
          setSaturday,
          sunday,
          setSunday,
        }}
      >
        <Component {...pageProps} />
      </GoalContext.Provider>
    </>
  );
}

export default MyApp;
