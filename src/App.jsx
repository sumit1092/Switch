import React, { useState } from 'react'
import jokeData from '../jokekesData'
import Joke from './joke'

const App=()=>{

	const jokes = x=> <Joke 
	                   key={x.id} 
	                   setup={x.setup} 
					   punchline={x.punchline}
					   />
	const data = jokeData.map(jokes)


	return(
		<div>
			{data}
		</div>
	)
}
export default App