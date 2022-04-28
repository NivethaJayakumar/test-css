import { Checkbox } from '@momentum-ui/react';
import '@momentum-ui/core/css/momentum-ui.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Checkbox
          value='mute-video-im'
          name='meeting-controls'
          label='mute-video'
          htmlId='testCheckbox2'
          checked={true}   
      />   
      </header>
    </div>
  );
}

export default App;
