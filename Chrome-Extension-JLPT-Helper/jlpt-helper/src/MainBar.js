import React from 'react';
import Button from '@mui/material/Button';
import StyleSheet from './StyleSheet.css';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

class MainBar extends React.Component
{
	constructor()
	{
		super();
		this.onMainBarClick = this.onMainBarClick.bind(this);
		this.ConjugateWord = this.ConjugateWord.bind(this);
		this.DictionaryWord = this.DictionaryWord.bind(this);
		this.launchOtherTranslator = this.launchOtherTranslator.bind(this);
		this.dropDownListSelection = this.dropDownListSelection.bind(this);
	}

	ConjugateWord()
	{
		window.open("http://www.japaneseverbconjugator.com/");
	}
	
	DictionaryWord()
	{
		var dictionaryWord = document.getElementById("dictionaryWord").value;
		var newURL = "https://jisho.org/search/" + dictionaryWord;
		window.open(newURL);
	}

	onMainBarClick(event)
	{
		console.log(event.target.id);
		
		switch(event.target.id)
		{
			case "drills":
				window.open("https://eigoganbare.com/jlpt/");
				break;
			case "duolingo":
				window.open("https://www.duolingo.com/");
				break;
			case "cheatSheet":
				window.open("https://www.japanistry.com/japanese-grammar-guide/");
				break;
		}
	}
	
	dropDownListSelection(event)
	{
		switch(event.target.id)
		{
			case "hiraganaPronunciation":
				window.open("https://www.youtube.com/watch?v=WH0UX5oQVzM&ab_channel=SpeakJapaneseNaturally");
				break;
			case "shadowing":
				window.open("https://www.youtube.com/watch?v=t8OuFbysmcw&list=PLAeylY-fOtkGna-23dOIGmqccmIFu1BxP&index=1&ab_channel=Let%27slearnJapanese-MihoChannel");
				break;
		}
	}
	
	launchOtherTranslator()
	{
		window.open("https://www.deepl.com/translator/");
	}

	render()
	{
		return(
				<div class="MainBar" style={{padding: "10px", background: "white", borderRadius: "15px"}}>
					<Button style={{marginBottom: "15px", backgroundColor: "#ab47bc"}} id="drills" onClick={this.onMainBarClick} variant="contained">JLPT Drills</Button>
					<Button style={{marginTop: "15px", marginBottom: "15px", backgroundColor: "#ab47bc"}} id="duolingo" onClick={this.onMainBarClick} variant="contained">Duolingo</Button>
					<Button style={{marginTop: "15px", marginBottom: "15px", backgroundColor: "#ab47bc"}} id="cheatSheet" onClick={this.onMainBarClick} variant="contained">Grammar Cheat Sheet</Button>
					<Button style={{marginTop: "15px", marginBottom: "15px", backgroundColor: "#ab47bc"}} id="cheatSheet" onClick={this.launchOtherTranslator} variant="contained">Alternate Translator</Button>
					<Button style={{backgroundColor: "#ab47bc"}} onClick={this.ConjugateWord} variant="contained">Conjugate Verb</Button>
					<FormControl style={{marginTop: "15px", marginBottom: "15px"}} fullWidth>
						<InputLabel>Pronunciation Resources</InputLabel>
						<Select>
							<MenuItem>
								<Button style={{marginTop: "15px", marginBottom: "15px", backgroundColor: "#ab47bc"}} id="hiraganaPronunciation" onClick={this.dropDownListSelection} variant="contained">Hiragana Pronunciation</Button>
							</MenuItem>
							<MenuItem>
								<Button style={{marginTop: "15px", marginBottom: "15px", backgroundColor: "#ab47bc"}} id="shadowing" onClick={this.dropDownListSelection} variant="contained">Shadowing Words</Button>
							</MenuItem>
						</Select>
					</FormControl>
					<TextField style={{marginTop: "25px"}} id="dictionaryWord" label="Dictionary Search" variant="outlined" />
					<Button style={{backgroundColor: "#ab47bc"}} onClick={this.DictionaryWord} variant="contained">Dictionary Search</Button>

				</div>
		);
	}
}

export default MainBar;
