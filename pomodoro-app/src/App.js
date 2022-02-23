import { useContext } from "react";
import Button from "./components/Button";
import SetPomodoro from "./components/SetPomodoro";
import { SettingContext } from "./context/settingsContext";


function App() {
  const {
    pomodoro,
    executing,
    setCurrentTimer,
    SettingBtn,
  } = useContext(SettingContext);
  return (
    <div className="container">
     <h1>Pomodoro</h1>
     <small>Be productive the right way.</small>
      {pomodoro !== 0 ? 
        <SetPomodoro /> : 
        <>
        <ul className="labels">
          <li>
            <Button
              title='Work'
              activeClass={executing.active === 'work' ? 'active-label' : undefined}
              _callback={() => setCurrentTimer('work')}
            />
          </li>
          <li>
            <Button
              title='Short Break'
              activeClass={executing.active === 'short' ? 'active-label' : undefined}
              _callback={() => setCurrentTimer('short')}
            />
          </li>
          <li>
            <Button
              title='Long Break'
              activeClass={executing.active === 'long' ? 'active-label' : undefined}
              _callback={() => setCurrentTimer('long')}
            />
          </li>
        </ul>
        <Button 
          title='Settings'
          _callback={SettingBtn}
        />
        </>
      }
     

    </div>
  );
}

export default App;
