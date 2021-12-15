import * as React from 'react';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Grid from '@mui/material/Grid';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import './startupListStyle.css';
export default function ListComponent(props:any){
  return (
    <Card sx={{ maxWidth: "90%", margin: "auto ", marginTop: "20px" }}>
    <CardContent>
      <Typography variant="body2" sx={{ fontSize: 17, fontWeight: "bold"  }}  gutterBottom>
        {props.datalist.name}
      </Typography>
      <Grid container >
        <Grid item pr={1}>
        <Typography sx={{ fontSize: 13 , fontWeight: "bold"}} color="text.secondary" gutterBottom>
        Founded {new Date(props.datalist.dateFounded).getFullYear()}
      </Typography>
        </Grid>
        <Divider orientation="vertical" flexItem>
        </Divider>
        <Grid item pl={1} pr={1}>
        <Typography sx={{ fontSize: 13 , fontWeight: "bold"}} color="text.secondary" gutterBottom>
        {props.datalist.employees} Employees
      </Typography>
        </Grid>
        <Divider orientation="vertical" flexItem>
        </Divider>
        <Grid item pl={1} pr={1}>
        <Typography sx={{ fontSize: 13 , fontWeight: "bold"}} color="text.secondary" gutterBottom>
         {props.datalist.totalFunding} <span>&#36;</span>
      </Typography>
        </Grid>
        <Divider orientation="vertical" flexItem>
        </Divider>
        <Grid item pl={1} pr={1}>
        <Typography sx={{ fontSize: 13 , fontWeight: "bold"}} color="text.secondary" gutterBottom>
        {props.datalist.currentInvestmentStage} 
      </Typography>
        </Grid>
      </Grid>
      
      <Typography sx={{ mt:2,fontWeight: "bold" }} variant="body2">
      
       {props.datalist.shortDescription}
      </Typography>
    </CardContent>
  </Card>
   
    )
        }