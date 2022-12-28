import React from 'react';
import ReactDOM from 'react-dom';
import Button from '@mui/material/Button';  
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import AddTaskIcon from '@mui/icons-material/AddTask';
import Box from '@mui/material/Box';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import CancelIcon from '@mui/icons-material/Cancel';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import Typography from '@mui/material/Typography';

class App extends React.Component
{
  constructor()
  {
    super()

    this.state =
    {
      myInputIngredient: "",
      myIngredientList: [],
    }

    this.InputIngredientTextField = this.InputIngredientTextField.bind(this);
    this.AddIngredientToList = this.AddIngredientToList.bind(this);
    this.RemoveIngredientFromList = this.RemoveIngredientFromList.bind(this);
    this.FindRecipe = this.FindRecipe.bind(this);
  }

  InputIngredientTextField(event)
  {
    this.setState({myInputIngredient: event.target.value});
  }

  AddIngredientToList()
  {
    this.setState({ myIngredientList: [...this.state.myIngredientList, this.state.myInputIngredient] });
    if (this.state.myInputIngredient == "")
    {

    }
    else
    {
        this.setState({myInputIngredient: ""});
    }
  }

  RemoveIngredientFromList(event)
  {
    var newArrayState = this.state.myIngredientList;
    var index = newArrayState.indexOf(event.currentTarget.id);
    newArrayState.splice(index, 1);
    this.setState({ myIngredientList: newArrayState });
  }

  FindRecipe()
  {
    var websiteURL = "https://foodcombo.com/find-recipes-by-ingredients/";
    var ingredients = this.state.myIngredientList.join('/');
    websiteURL = websiteURL + ingredients;
    window.open(websiteURL);
  }

  render()
  {
    return(
      <Box sx={{display: 'flex', justifyContent: 'center' }}>
        <Grid>

            <Grid item style={{marginTop: 25}}>
                <Button fullWidth variant="outlined">Recipe Finder</Button>
            </Grid>
            <Grid item style={{marginTop: 25}}>
                <Box sx={{display: 'flex'}}>
                    <TextField label="Add Ingredient" fullWidth onChange={this.InputIngredientTextField} value={this.state.myInputIngredient}/>
                    <IconButton color="primary" onClick={this.AddIngredientToList}>
                      <AddTaskIcon style={{ color: "green" }}/>
                    </IconButton>
                </Box>
            </Grid>

            <Grid item>
                <FormControl fullWidth style={{marginTop: 25}}>
                        <InputLabel fullWidth >Ingredient List</InputLabel>
                        <Select fullWidth>
                        {
                            this.state.myIngredientList.map(eachIteration =>
                              <Box sx={{display: 'flex'}} style={{marginLeft: 10}}>
                                <IconButton color="primary" id={eachIteration} onClick={this.RemoveIngredientFromList}>
                                    <CancelIcon style={{ color: "red" }}/>
                                </IconButton>
                                <Typography variant="h4">
                                    {eachIteration}
                                </Typography>
                              </Box>
                            )
                        }
                        </Select>
                </FormControl>
            </Grid>

            <Grid item>
                <Button fullWidth variant="contained" onClick={this.FindRecipe} endIcon={<FastfoodIcon />}>Find Recipes</Button>
            </Grid>

        </Grid>
      </Box>
    );
  }
}

export default App;