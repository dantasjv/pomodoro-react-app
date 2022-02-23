import { useContext } from "react";
import SetPomodoro from "./components/SetPomodoro";
import { SettingContext } from "./context/settingsContext";


function App() {
  const {pomodoro} = useContext(SettingContext);
  return (
    <div className="container">
     <h1>Pomodoro</h1>
     <small>Be productive the right way.</small>
      {pomodoro === 0 ? 
        <SetPomodoro /> : 
        <>
        <h3>Testing if set is 0</h3>
        </>
      }
     

    </div>
  );
}

export default App;
