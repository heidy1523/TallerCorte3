import React, { useState } from 'react';
import HoverHeader from './HoverHeader';


const HeaderLayout = () =>{

  const [hover, setHover] = useState('none');

  const _stylesHeader = {
    header_container: {
      width: '100%',
      //margin:'10px 15px',
      paddig:'0',
      borderRadius: '40px',
      backgroundColor: 'white',
    },

    hoverPinImage: {
      width: '100%',
      height: '100%',
      display: 'flex',
      /*zIndex: 1,*/
    },
    

  };
  
  return(
    <div style={_stylesHeader.header_container}>
     
      <HoverHeader
      hover={hover}
      setHover={setHover}/>
    </div>  
  );

};
 
export default HeaderLayout;
