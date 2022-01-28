import React from 'react';
/* import Toolbar from '@material-ui/core/Toolbar';
import Appbar from '@material-ui/core/Appbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import DeleteIcon from '@material-ui/icons/Delete';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup'; */
/*function MaterialUI()
{
    return(
        <div>
        <Button varient="contained" color="inherit">
      Hi everyone my name is Raghava
      </Button>
      <Appbar position='static'>
               <Toolbar>
                   <Typography varient="title" color="inherit">
                      This is my application
                   </Typography>
               </Toolbar>
            </Appbar>
        <Button variant="contained">Default</Button>
        <Button variant="contained" color="primary">
           Primary
        </Button>
        <Button variant="contained" color="secondary">
           Secondary
        </Button>
        <Button variant="contained" disabled>
           Disabled
        </Button>
        <Button variant="contained" color="primary" href="#contained-buttons">
        Link
        </Button>
        <IconButton aria-label="delete">
        <DeleteIcon/>
      </IconButton>
      <br/>
      <br/>
      <FormControl component="fieldset">
      <FormLabel component="legend">Gender</FormLabel>
      <RadioGroup aria-label="gender" name="gender1">
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
        <FormControlLabel value="other" control={<Radio />} label="Other" />
        <FormControlLabel value="disabled" disabled control={<Radio />} label="(Disabled option)" />
      </RadioGroup>
    </FormControl>
        </div>
    );
}
export default MaterialUI;*/
import { ComputerScience, Electrical, Mechanical, BioTech } from "./assets/data";
import { useState } from "react";
import { Button } from '@material-ui/core'
import './assets/Stylecss.css'

const veera = {
   color: "Black",
   textAlign: "center",
};

const raghava = {
    margin: 60,
};

const MaterialUI = () => {
   const [dept, setDept] = useState(ComputerScience);
   const changeView = (dep) => {
    setDept(dep);
   };

return (
<div style={veera}>
    <div>
        <Button 
            style={raghava} 
            variant="outlined" 
            color="primary"
            onClick={() => changeView(ComputerScience)}>
               CSE
            </Button>
        
        <Button 
            style={raghava} 
            variant="outlined" color="secondary"
            onClick={() => changeView(Electrical)}>
               EEE
            </Button>
        
        <Button  
            style={raghava} 
            variant="outlined" 
            color="primary"
            onClick={() => changeView(Mechanical)}>
               MEC
            </Button>
        
        <Button 
            style={raghava} 
            variant="outlined" 
            color="secondary"
            onClick={() => changeView(BioTech)}>
               BT
            </Button>
    </div>
         <img src={dept[0].imageUrl}  
            alt="ImageName" height="350" width="550"></img>
            <h2 class = "textstyle">
               <u>
                  {dept[0].displayName}
               </u>
            </h2>
         <div class = "textstyle2"><p class = "textstyle3">
            {dept[0].description} 
         </p>
    
    <h3>HOD: {dept[0].hod} </h3>
    
    <h style={{ textAlign: "left" }}>
      <p><b>
         <u>Programs Offered:</u>
      </b></p>
      <div>
         {dept[0].programsOffered.map(programsOffered => <ul><li>{programsOffered}</li></ul>)}
      </div>
   </h>
   </div>
</div> 
   );
};

export default MaterialUI;


