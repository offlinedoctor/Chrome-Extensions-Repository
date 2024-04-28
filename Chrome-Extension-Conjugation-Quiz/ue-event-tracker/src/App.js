import React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import { Timeline } from 'react-twitter-widgets'
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import ScrollBarStyle from './ScrollBarStyle.css';
import srcJSONList from './srcJSONList.json';

function RunFunction(event)
{
	console.log(event);
}

class App extends React.Component
{
	constructor()
	{
		super();

		this.state =
		{
			menuItems: [],
			CurrentChoice: "",
			openMenu: false,
		}
		
		this.Display = this.Display.bind(this);
		this.setFalse = this.setFalse.bind(this);
		this.handleOpen = this.handleOpen.bind(this);
	}
	
	Display(event)
	{
		var storeString = event.target.id.toString();
		console.log(storeString);
		this.setState({CurrentChoice: "https://www.mysitemapgenerator.com/embed/rss/0/" + storeString});
		this.setState({openMenu: false});
		this.setState({currentSelection: storeString});
	}
	
	handleOpen()
	{
		this.setState({openMenu: true});
	}
	
	setFalse()
	{
		this.setState({openMenu: false});
	}
	
	componentDidMount()
	{
		var retrievedJSON = false;

		fetch('/JSONList.json')
        	.then(response => response.json())
		.then(data => 
		{
			console.log("public json found");
			this.setState({menuItems: data.List});
		})
		.catch(error =>
		{
			if (error)
			{
				console.log("public json not found - using src json");
				this.setState({menuItems: srcJSONList.List});
			}
		})
	}
	
	render()
	{
		return(
			<div style={{boxShadow: "4px 4px 8px 0 rgba(0,0,0,0.5)", background: "rgba(255, 255, 255, 0.85)", borderRadius: "15px", padding: "0 25px 25px 25px"}} onClick={this.setFalse}>
				<Typography style={{textAlign: "center", padding: "25px", color: "black"}} component="h1">
					Unreal Engine Event Tracker
				</Typography>
				<Box>
					<FormControl fullWidth>
						<InputLabel>Select UE Developer</InputLabel>
						<Select open={this.state.openMenu} onOpen={this.handleOpen}>
							<div style={{display: "flex", flexDirection: "column"}}>
							{
								this.state.menuItems.map((eachIteration, index) =>
									<MenuItem onClick={this.Display} value={index} id={eachIteration.Link}>{eachIteration.Title}</MenuItem>
								)
							}
							</div>
						</Select>
					</FormControl>
				</Box>
				<div style={{overflowY: "auto", height: "50vh", marginTop: "15px"}}>
					<iframe src={this.state.CurrentChoice} style={{height: "100%", overflowY: "hidden"}}></iframe>
				</div>
			</div>
		);
	}
}

export default App;
