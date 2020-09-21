import React from 'react';
import lorex from './lorex.png'
import './style.css'

function App() {
  return (
    <React.Fragment>
        <h1 style= {{ 
            backgroundColor : 'yellow',
            fontStyle : 'Verdana'
        }}>Hello World</h1>
        <p>Today is monday</p>
        <img src={lorex}/>
        {/* <img src={require('./logo-python.png')} */}
        <img src={require('./logo-python.png')} style={{
            height : '50px',
            padding : '20px'
        }}/>
    </React.Fragment>    
  )
}

export default App;
