import React from 'react';
import { ReactComponent as PageNotFoundSVG } from "./404 Error with a cute animal-bro.svg";
import Box from '@mui/material/Box';


function PageNotFound(props) {
    return (
         <Box sx={{mx:'auto',maxWidth: 'lg'}}>
            
            <PageNotFoundSVG/>
        </Box>
    );
}

export default PageNotFound;