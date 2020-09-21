import React from 'react';
import './static/styles.css'
import ImageFrame2 from './ImageFrame2'
import sushiBar from './images/sushi-bar.jpg'
import sushiDish from './images/sushi.jpg'

// Normal function
function message() {
    return <p>This is a paragraph</p>
}
// create a React Component
function MessageC() {
    return (
        <p>This is a component function</p>
    )
}
// create a React Component with properties
function MessageP(props) {
    return (
        <p>This is a component function and able to display props value by entering props.name inside the function {props.name}</p>
    )
}
// with props
function Alert(props) {
    return (
        <React.Fragment>
        <div style={{
            backgroundColor : props.bgColor
        }}>
        <small>Alert with variable color background</small>
        </div>
        </React.Fragment>
    )
}
// Image frame function
function ImageFrame (props) {
    return (
        <React.Fragment>
            <img src={props.image}/>
        </React.Fragment>

    )
}


function App() {
    let name = 'Ace'
     
    return (
        <React.Fragment>
        <main style={{
            padding : '20px'
        }}>
            
            <nav>
                <ul>
                    <li>Home</li>
                    <li>Order</li>
                    <li>Contact Us</li>
                </ul>
            </nav>
             {/* <img src={require('./images/sushi-bar.jpg')}/> */}
            <ImageFrame image={sushiBar}/>
            <h1>Hello {name}</h1>
            {message()}
            <MessageC/>
            <MessageP name='Ace'/>
            <hr/>
            <Alert bgColor='red'/>
            <hr/>
            <ImageFrame2 image={sushiDish}/>
           
        </main>
        </React.Fragment>
    )
}

export default App;
