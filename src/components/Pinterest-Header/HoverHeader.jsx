import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBell,faCommentDots,faSearch, faUser, faAngleDown, faHome} from '@fortawesome/free-solid-svg-icons';




const HoverHeader = (props) => {

  // Estado para el boton de guardar
  const [saveButton, setSaveButton] = useState('black');

  const [hoyButton, setHoyButton] = useState('white');

  const [shareButton, setShareButton] = useState('transparent');

  const _stylesHoverHeader={

    container: {
      margin:'10px 15px',
      paddig:'0px',

      borderRadius: '40px',
      backgroundColor: 'white',
      display: 'flex'
    },

    shadow: {
      margin: 0,
      padding: 0,
      borderRadius: '16px',
      width: '100%',
      height: '100%',
      backgroundColor: 'black',
      opacity: '.4',
      cursor: 'zoom-in',
      gridColumn: '1/2',
      gridRow: '1/2',
      zIndex: 1,
    },
    save_button: {
      backgroundColor: `${saveButton}`,
      display: 'flex',
      height: '50px',
      textDecoration:'none',
      border: 'none',
      padding: '16px',
      alignItems:'center',
      borderWidth: '3px',
      borderRadius:'35px', 
      fontSize: '16px',
      color:'white',
      textAlign: 'center',
      fontWeight: '700',
      zIndex: 2,
    },

    button_pinterest: {
      display: 'flex',
      width: '57px',
      height: '50px',
      borderRadius: '50%',
      padding:'5px',
      justifyContent:'center',
      alignItems: 'center',
      color: 'black',
      fontSize: 'x-large',
      boxSizing: 'border-box'
    },
    
    input_search:{

      border:'none',
      position:'relative',
      boxSizing:'border-box',
      height: '48px',
      width:'600%',
      top:'0%',
      fontSize: '14px',
      outline: 'none',
      padding: '0',
      backgroundColor: 'transparent',
      marginLeft: '4px'
   
      
    },
  
    search_icon:{
      color: 'gray'
    },
  
    header_search:{
      width: '70%',
      height:'48px',
      display:'flex',
      flexDirection: 'row',
      flex: '1 1 auto',
      flexBasis: 'auto',
      alignItems: 'center',
      boxSizing: 'boder-box',
      paddingTop:'0px',
      paddingBottom:'0px',
      paddingLeft:'16px',
      paddingRight:'16px',
      backgroundColor:'#efefef',
      borderWidth: '3px',
      borderRadius:'35px',
    },
    bell_icon:{
      width: '57px',
      height: '50px',
      boxSizing: 'boder-box',
      justifyContent:'center',
      alignItems: 'center',
      display: 'flex',
      flexDirection: 'column',
      color: 'gray',
      fontSize: 'x-large',
      borderRadius: '50%',
    },
  
    comments_icon:{
      width: '57px',
      height: '50px',
      boxSizing: 'boder-box',
      justifyContent:'center',
      alignItems: 'center',
      display: 'flex',
      flexDirection: 'column',
      color: 'gray',
      fontSize: 'x-large',
      borderRadius: '50%',
    },
  
    user_icon:{
      width: '57px',
      height: '50px',
      position: 'relative',
      boxSizing: 'boder-box',
      justifyContent:'center',
      alignItems: 'center',
      display: 'flex',
      flexDirection: 'column',
      color: 'gray',
      fontSize: 'x-large',
      borderRadius: '50%',
    },
    angle_icon:{
      width: '57px',
      height: '50px',
      boxSizing: 'boder-box',
      borderRadius: '50%',
      justifyContent:'center',
      alignItems: 'center',
      display: 'flex',
      flexDirection: 'column',
      color: 'gray',
      fontSize: 'larger',
      cursor: 'pointer',
    }

  };

  return(

    <div style={_stylesHoverHeader.container}>

      <div
        style={_stylesHoverHeader.button_pinterest}
        onMouseEnter={() => {
          props.setHover('flex');
          setShareButton('1.0');
        }}
        onMouseOut={() => setShareButton('.8')}
      >
        <FontAwesomeIcon icon={faHome}/>
      </div>

      <button
      style={_stylesHoverHeader.save_button}
      onMouseEnter={() => {
        props.setHover('flex');
        setSaveButton('#AD081B');
      }}
      onMouseOut={() => setSaveButton('black')}
      >
      Inicio
      </button>
      <button
      style={_stylesHoverHeader.save_button}
      onMouseEnter={() => {
        props.setHover('flex');
        setHoyButton('#AD081B');
      }}
      onMouseOut={() => setHoyButton('white')}
      >
      Hoy
      </button>

      <div style={_stylesHoverHeader.header_search}>

          <div style={_stylesHoverHeader.search_icon}>
            <FontAwesomeIcon icon={faSearch}/>
          </div>
          <div >
            <input type="text" placeholder="Buscar" style={_stylesHoverHeader.input_search} />
          </div>

      </div>

      <div style={_stylesHoverHeader.bell_icon}>
          <FontAwesomeIcon icon={faBell} />
      </div>
      <div style={_stylesHoverHeader.comments_icon}>
          <FontAwesomeIcon icon={faCommentDots} />
      </div>
      <div style={_stylesHoverHeader.user_icon}>
          <FontAwesomeIcon  icon={faUser} />
      </div>
      
      <div  style={_stylesHoverHeader.angle_icon}>
          <FontAwesomeIcon icon={faAngleDown} />
      </div>  

    </div>
      
    
  )
 

};

export default HoverHeader;
