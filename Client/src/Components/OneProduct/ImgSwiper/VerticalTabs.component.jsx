import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
// Небходимо в пропсы пеедать масив
import { v4 as uuidv4 } from 'uuid';


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Box sx={{ml:"auto",mr:"auto"
  }}
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
      
    >
      {value === index && (
        <Box >
          {children}
        </Box>
      )}
    </Box>
  );
}

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs({imagesProps}) {
    
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        bgcolor: "background.paper",
        display: "flex",
        height: 485,
      }}
    >
    
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ mr: 5, borderColor: "white" }}
      >
        {imagesProps.map((el, index) => (
          <Tab key={uuidv4()}
            icon={
              <Avatar
                variant="square"
                sx={{  height: "78px", width: "78px",bgcolor:"#F5F5F5"}}
                alt="product img"
                src={el}
                imgProps={{sx:{objectFit: "contain"}}}
              />
            }
            {...a11yProps(index)}
          />
        ))}
      </Tabs>
      {imagesProps.map((el, index) => {
        return (
          <TabPanel key={uuidv4()} value={value} index={index}  >
          <Box component="img" src={el} sx={{maxHeight:"485px",maxWidth:"485px"}} />
          </TabPanel>
        );
      })}
    </Box>
  );
}