import React from 'react';
import HookComponent from './components/HookComponent';
import UseEffect from './components/UseEffect';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={HookComponent}></Route>
          <Route path="/useEffect" component={UseEffect}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
