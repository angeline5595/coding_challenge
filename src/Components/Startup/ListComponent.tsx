import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import './startupListStyle.css';
export default function ListComponent(props:any){
  return (
    // <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
    //   <ListItem alignItems="flex-start">
    //     <ListItemText
    //       primary="Brunch this weekend?"
    //       secondary={
    //         <React.Fragment>
    //           <Typography
    //             sx={{ display: 'inline' }}
    //             component="span"
    //             variant="body2"
    //             color="text.primary"
    //           >
    //             Ali Connors
    //           </Typography>
    //           {props.datalist.shortDescription}
    //         </React.Fragment>
    //       }
    //     />
    //   </ListItem>
    //   </List>
   
   <div className="list">
       <p>{props.dataList.name}</p>
   </div>
   
    )
        }