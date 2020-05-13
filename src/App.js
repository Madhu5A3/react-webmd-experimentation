import React from 'react';
import HookComponent from './components/HookComponent';
// import UseEffect from './components/UseEffect';
import { BrowserRouter, Route, Switch, useParams } from 'react-router-dom';
import Navbar from './components/Navbar';
import UseLocation from './components/UseLocation';
// import UseParams from './components/UseParams';

function UseParams() {
  let {params} = useParams();
  return (
    <div className="params experimentation">
      <p>Displaying: {params}</p>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={HookComponent}></Route>
          <Route path="/useEffect/:params">
            <UseParams />
          </Route>
          <Route path="/useLocation" component={UseLocation}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
