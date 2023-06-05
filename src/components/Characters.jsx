import Slider from '@mui/material/Slider'

const marks =['100','150','200','250','300','350','400','450','500','550','600','650','700','750','800','850','900','1000']

function Characters(){
    return(
    <div  style={{textAlign:'center',paddingBottom:'100px'}}>

    <h3> Please select number of Characters</h3>
        <Slider
        defaultValue={1}
        step={1}
        min={1}
        max={4}
        marks={true}
        valueLabelDisplay="on"
        sx={{color:'#432263',width:'80%'}}
        >


        </Slider>
    </div>)
}

export default Characters;