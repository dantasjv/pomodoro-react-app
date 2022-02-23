import React, { useState } from 'react';
import { createContext } from 'react';

export const SettingContext = createContext()

function SettingsContextProvider(props) {

  const [pomodoro, setPomodoro] = useState(0);
  const [executing, setExecuting] = useState({});
  const [startAnimate, setStartAnimate] = useState(false);

  function startTimer() {
    setStartAnimate(true);
  }

  function pauseTimer() {
    setStartAnimate(false);
  }

  function stopTimer() {
    setStartAnimate(false);
  }

  const updateExecute = (updatedSettings) => {
    setExecuting(updatedSettings);
  }

  return (
    <SettingContext.Provider value={{stopTimer, updateExecute}}>
        {props.children}
    </SettingContext.Provider>

    
  )
}

export default SettingsContextProvider;