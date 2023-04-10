import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Filter from '../components/Filter';
import {BsFilterLeft} from "react-icons/bs";

export default function ControlledAccordions() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
      <Accordion 
        expanded={expanded === 'panel1'} 
        onChange={handleChange('panel1')} 
        sx={{width:350,marginBottom:2,outline:0,border:"none",borderRadius:6,boxShadow:"0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",background:"#1e40af"}}
        >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className='text-white'/>}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: '40%', flexShrink: 0,color:"#94a3b8",fontWeight:"bold",display:"flex",alignItems:"center", gap:3}}>
            <BsFilterLeft className='text-2xl text-white'/>
            <div className='text-gray-100'>Ordering</div>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
         <Filter/>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}