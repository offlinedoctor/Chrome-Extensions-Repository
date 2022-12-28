import React from 'react';
import MainBar from './MainBar.js';

class App extends React.Component
{
	render()
	{
		return(
				<div style={{display: "flex", flexDirection: "row"}}>
					<iframe style={{height: "95vh", width: "100vw", marginRight: "25px"}} scrolling="no" src="https://libretranslate.com/?source=ja&target=en&q="/>
					<MainBar/>
				</div>
		);
	}
}

export default App;
