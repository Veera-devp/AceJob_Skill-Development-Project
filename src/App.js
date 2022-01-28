/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}


export default App;*/
/*import React, {useState} from 'react'
import photo from './1.jpg';
import './App.css';
function App() {
const card = {
position: "middle",
width: "400px",
border: '1px solid black',
margin: 'auto',
boxShadow: '2px 1px 3px black',
color: 'green',
fontStyle: 'Tw Cen MT',
fontSize: 16
}
const ts={
margintop: '-100px',
position: "middle",
color: "black"
}
return (
<div className="App" style={card}>
<br></br>
<img src={photo} alt="LOGO" width="300" height="300s"/>
<div style={ts}>
<p>S. Veera Raghava Sai Varma</p>
<p>CSE Department, KL University</p>
<p>Vaddeswaram</p>
<p>2000030902</p>
<p></p>
</div>
</div>
);
}
export default App*/











/*import React, { useState } from 'react';

 
const App = () => {
  const [count, setCount] = useState(0);
  return (
    
  <div className='leader'>
       <h1>Counter</h1>    
      <button onClick={() => setCount(count + 1)}>
        INCREMENT
      </button>
      
      
      <button className='two' onClick={() => setCount(count - 1)}>
        DECREMENT
      </button>
     <h2>Counter Value</h2> 
    <p>   {count}  </p>
    
  </div>
  )}
export default App*/


/*import React, { useState } from 'react';
 
const App = () => {
return(
  <div>
<form>
  <label>
     Name:
     <input type="text" name="name"/>
  </label>
  <input type="Submit" value="Submit"/>
</form>
<br/>
Notes:
<textarea>
Avul Pakir Jainulabdeen Abdul Kalam 15 October 1931 – 27 July 2015) was an Indian aerospace scientist who served as the 11th president of India from 2002 to 2007. He was born and raised in Rameswaram, Tamil Nadu and studied physics and aerospace engineering. He spent the next four decades as a scientist and science administrator, mainly at the Defence Research and Development Organisation (DRDO) and Indian Space Research Organisation (ISRO) and was intimately involved in India's civilian space programme and military missile development efforts.
He thus came to be known as the Missile Man of India for his work on the development of ballistic missile and launch vehicle technology.
He also played a pivotal organisational, technical, and political role in India's Pokhran-II nuclear tests in 1998, the first since the original nuclear test by India in 1974.[5]
Kalam was elected as the 11th president of India in 2002 with the support of both the ruling Bharatiya Janata Party and the then-opposition Indian National Congress. Widely referred to as the "People's President",[6] he returned to his civilian life of education, writing and public service after a single term. He was a recipient of several prestigious awards, including the Bharat Ratna, India's highest civilian honour.
While delivering a lecture at the Indian Institute of Management Shillong, Kalam collapsed and died from an apparent cardiac arrest on 27 July 2015, aged 83.[7] Thousands, including national-level dignitaries, attended the funeral ceremony held in his hometown of Rameswaram, where he was buried with full state honours.[8]
</textarea>
<br/>
<br/>
Select Your favourite fruit:
<select>
    <option value="grapefruit">Grapefruit</option>
    <option value="Lime">Lime</option>
    <option value="coconut">Coconut</option>
    <option value="mango">Mango</option>
    <option selected value="none">None</option>
</select>
<br/>
<br/>
<input type="file"/>
</div>
)
}
export default App*/

/*import React, { Component } from 'react';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import Home from './Home';
import About from './About';
import Contact from './Contact';
class App extends Component{
      render() {
        return(
          <Router>
          <div>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
          <hr/>
          <Switch>
          <Route path="/"><Home /></Route>
          <Route path="/about"><About /></Route>
          <Route path="/contact"><Contact /></Route>
        </Switch>
      </div>
          </Router>
        )
      }
}
export default App*/
/*import React, { useEffect } from 'react'
import Notes from './components/Notes'
import NewNote from './components/NewNote'
import VisibilityFilter from './components/VisibilityFilter'

import noteService from './services/notes'
import { initializeNotes } from './reducers/noteReducer'
import { useDispatch } from 'react-redux'

const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    noteService
      .getAll().then(notes => dispatch(initializeNotes(notes)))
  }, [dispatch])

  return (
    <div>
      <NewNote />
      <VisibilityFilter />
      <Notes />
    </div>
  )
}

export default App*/

/*import UseState from 'react'
import {Button} from '@material-ui/core'
import axios from 'axios'
const s1 = {
 border: '1px solid red',
 width: '800px',
 boxShadow: '2px 3px 5px black',
 color: 'green',
 margin: 'auto',
 textAlign: 'center',
 textShadow: '1px 1px 2px blue, 1px 2px 1px yellow'
 }
 const s2 = {
 margin: 20
 }
 const Disp_Agent = ({agents}) => {
 if (agents !== null) {
 return (
 <div>
 <p> { agents.data[1].displayName } </p>
 <img src = {agents.data[1].bustPortrait} alt = "Avator" width = '100' />
 <p> { agents.data[2].displayName } </p>
 <img src = {agents.data[2].bustPortrait} alt = "Avator" width = '100' />
 <p> { agents.data[3].displayName } </p>
 <img src = {agents.data[3].bustPortrait} alt = "Avator" width = '100' />
 <p> { agents.data[4].displayName } </p>
 <img src = {agents.data[4].bustPortrait} alt = "Avator" width = '100' />
 <p> { agents.data[5].displayName } </p>
 <img src = {agents.data[5].bustPortrait} alt = "Avator" width = '100' />
 <p> { agents.data[7].displayName } </p>
 <img src = {agents.data[7].bustPortrait} alt = "Avator" width = '100' />
 <p> { agents.data[8].displayName } </p>
 <img src = {agents.data[8].bustPortrait} alt = "Avator" width = '100' />
 <p> { agents.data[9].displayName } </p>
 <img src = {agents.data[9].bustPortrait} alt = "Avator" width = '100' />
 <p> { agents.data[10].displayName } </p>
 <img src = {agents.data[10].bustPortrait} alt = "Avator" width = '100' />
 <p> { agents.data[11].displayName } </p>
 <img src = {agents.data[11].bustPortrait} alt = "Avator" width = '100' />
 <p> { agents.data[12].displayName } </p>
 <img src = {agents.data[12].bustPortrait} alt = "Avator" width = '100' />
 <p> { agents.data[13].displayName } </p>
 <img src = {agents.data[13].bustPortrait} alt = "Avator" width = '100' />
 <p> { agents.data[14].displayName } </p>
 <img src = {agents.data[14].bustPortrait} alt = "Avator" width = '100' />
 <p> { agents.data[15].displayName } </p>
 <img src = {agents.data[15].bustPortrait} alt = "Avator" width = '100' />
 <p> { agents.data[16].displayName } </p>
 <img src = {agents.data[16].bustPortrait} alt = "Avator" width = '100' />
 
 </div>
 
 )
 }
 else {
 return (
 <div>
 <p> click agent button to fetch the data and display </p>
 </div>
 )
 }
 }
const App = () => {
 const [nav, setNav] = UseState("")
 const [agents, setAgents] = UseState(null)
 const changeView = (val) => {
 setNav (val);
 }
 const getAgents = () => {
 axios.get(`https://valorant-api.com/v1/agents/`)
 .then(res => {
 setAgents(res.data);
 })
 }
 if (nav === "Agents") {
 getAgents();
 }
 return (
 <div style = {s1}>
 <div>
 <Button style = {s2} variant="outlined" color="secondary" onClick = {() => changeView("Agents")}> 
Agents </Button>
 <Button style = {s2} variant="outlined" color="secondary" onClick = {() => 
changeView("Wepones")}> Wepones </Button>
 </div>
 <p>Welcome</p>
 <Disp_Agent agents = {agents} />
 </div>
 )
}
export default App*/


/*import React, { Component } from 'react';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import Home from './Home';
import About from './About';
import Contact from './Contact';
class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <h1>Tecnical Skills Exam</h1>
          <ul className="header">
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
          <div className="content">
          <hr/>
          
          <Route path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/contact" component={Contact}/>
        
      </div>
          </div>
      </Router>
    );
  }
}
export default App*/

/*import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Filter from './Filter'
import Results from './Results'

function App() {
  const [countries, setCountries] = useState([])
  const [filter, setFilter] = useState('')
  const [weather, setWeather] = useState({})

  const fetchCountries = () => {
    axios.get('https://restcountries.eu/rest/v2/all?fields=name;capital;languages;population;flag')
      .then(res => {
        setCountries(res.data)
      }
      )
  }

  const fetchWeather = (city) => {
    const apiKey = process.env.REACT_APP_WEATHER_API_KEY;
    axios.get('http://api.apixu.com/v1/current.json?key=${apiKey}&q=${city}')
      .then(res => {
        setWeather(res.data)
      }
      )
  }

  useEffect(fetchCountries, [])

  const handleFilter = (event) => {
    setFilter(event.target.value.trim())
  }

  const handleShow = (name) => {
    setFilter(name)
  }

  const handleWeather = city => {
    fetchWeather(city)
  }

  return (
    <div>
      <Filter value={filter} onChange={handleFilter} />
      <Results filter={filter} countries={countries} onShow={handleShow} onWeather={handleWeather} weather={weather} />
    </div>
  )
}

export default App;*/


/*import React from 'react';
import Header from './Components/Header';
import Content from './Components/Content';
import Footer from './Components/Footer';


function App() {
  return (
    <React.Fragment>
      <Header/>
      <Content/>
      <Footer/>
    </React.Fragment>
  );
}

export default App;*/

/*import React from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from "./Components/Navbar";
//import { Button } from '@material-ui/core'
const Home = () => {
  return (
    <>
      <Navbar />
      <section className="hero-section">
        <p>Welcome to</p>
        <h1>AceJob Services Home Page</h1>
      </section>
    </>
  );
};

const About = () => {
  return (
    <>
      <Navbar />
      <section className="hero-section">
        <p>Welcome to </p>
        <h1>AceJob Services  About Page</h1>
      </section>
    </>
  );
};

const Update = () => {
  return (
    <>
      <Navbar />
      <section className="hero-section">
        
        <h4>AceJob Services Update resume Page</h4>
        <p></p>
               
         </section>
    </>
  );
};

const Contact = () => {
  return (
    <>
      <Navbar />
      <section className="hero-section">
        <p>Welcome to </p>
        <h1>AceJob Services Contact Page</h1>
      </section>
    </>
  );
};

const Signin =() => {
  return(
    <>
    <Navbar />
    <section className="hero-section">
      <p>Welcome to </p>
      <h1>AceJob Services SignIn and Register Page</h1>
    </section>
  </>
  );
};
const App = () => {
  return (
    <BrowserRouter>
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>

      <Route path="/about">
        <About />
      </Route>

      <Route path="/update">
        <Update />
      </Route>

      <Route path="/contact">
        <Contact />
      </Route>
      
      <Route path="/signin">
        <Signin />
      </Route>
    
    </Switch>
    </BrowserRouter>
  );
};

export default App;*/




import React from 'react'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Home from "./React Menu/Home";
import About from "./React Menu/About";
import Services from "./React Menu/Services";
import Contact from "./React Menu/Contact";
import Register from "./React Menu/Register";
import Navbar from './React Menu/Navbar';
//import Footer from './React Menu/Footer';
import Login from './React Menu/Login';
import Form from './React Menu/Form';
import Dashboard from './React Menu/Dashboard';
const App=() =>{
  return(
    <>
    <BrowserRouter>
    <Navbar />
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/about" component={About}/>
      <Route exact path="/services" component={Services}/>
      <Route exact path="/contact" component={Contact}/>
      <Route exact path="/register" component={Register}/>
      <Route exact path="/form" component={Form} />
      <Route exact path="/Login" component={Login}/>
      <Route exact path="/dashboard" component={Dashboard}/>
      <Redirect to="/"/>
      
    </Switch>
    
    </BrowserRouter>
    
    </>
  );
};
export default App;







