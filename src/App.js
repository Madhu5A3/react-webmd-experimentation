import React from 'react';
import HookComponent from './components/HookComponent';
import UseEffect from './components/UseEffect';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import EmotionExperimentation from './components/EmotionExperimentation';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={HookComponent}></Route>
          <Route path="/useEffect" component={UseEffect}></Route>
          <Route path="/emotion" component={EmotionExperimentation}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
