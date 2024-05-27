import Slider from '@mui/material/Slider'
import '../index.css'
import * as React from 'react';
import { useEffect } from 'react';


const marks =['100','150','200','250','300','350','400','450','500','550','600','650','700','750','800','850','900','1000']

function Length({length,setLength}){
    const [value, setValue] = React.useState(100);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    useEffect(()=>{setLength(value)},[value]);
    return(
    <div style={{textAlign:'center',paddingBottom:'60px'}}>

    <h3> Please select the length of the story (in words)</h3>
        <Slider
        defaultValue={100}
        onChange={handleChange}
        value={value}
        step={100}
        min={100}
        max={500}
        marks={true}
        valueLabelDisplay="on"
        sx={{color:'#432263',width:'80%'}}


        >


        </Slider>
    </div>)
}

export default Length;