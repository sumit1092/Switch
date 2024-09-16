
import React from 'react'

const Joke = (props) =>{
    //to make swith
    //create isShown state to default false
    //and create function to switch punchline 
    //updaate isShown state if it is true then only show punchline
    const [isShown, setisShown] = React.useState(false)

    function toggle(){
        setisShown(x => !x)
    }

    return(
        <div>
            {props.setup && <h3>{props.setup}</h3>}
            {isShown &&  <p>{props.punchline}</p>}
            <button onClick={toggle}>{isShown?"Hide":"Show"} punchline</button>
        </div>
    )
}

export default Joke