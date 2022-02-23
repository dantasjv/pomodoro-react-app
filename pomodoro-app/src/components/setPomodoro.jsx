import React from 'react';
import Button from './Button';

const setPomodoro = () => {
  return (
    <div className='form-container'>
      <form>
      <div className='input-wrapper'>
        <input className="input" name="work" onChange={handleChange} value={} />
        <input className="input" name="shortBreak" onChange={handleChange} value={} />
        <input className="input" name="longBreak" onChange={handleChange} value={} />
      </div>
      <Button title="Set Timer" _callback={handleSubmit} />
      </form>
    </div>
  )
}

export default setPomodoro;