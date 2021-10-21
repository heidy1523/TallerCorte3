import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBell,faCommentDots,faSearch, faUser, faAngleDown} from '@fortawesome/free-solid-svg-icons';
import{faPinterest} from '@fortawesome/free-brands-svg-icons';




const HoverHeader = (props) => {

  // Estado para los botones del Header

  const [hoyButton, setHoyButton] = useState('white');

  const [saveButton, setSaveButton] = useState('black');

  const [bellButton, setBellButton] = useState('transparent');

  const [commentsButton, setCommentsButton] = useState('transparent');

  const [userButton, setUserButton] = useState('transparent');

  const [angleButton, setAngleButton] = useState('transparent');

  const [logoButton, setLogoButton] = useState('transparent');

  const _stylesHoverHeader={

    container: {
      margin:'10px 15px',
      paddig:'0px',
      borderRadius: '40px',
      backgroundColor: 'white',
      display: 'flex'
    },

    header_logo: {
      backgroundColor: `${logoButton}`,
      display: 'flex',
      width: '57px',
      height: '50px',
      borderRadius: '50%',
      padding:'5px',
      justifyContent:'center',
      alignItems: 'center',
      color: 'red',
      fontSize: 'x-large',
      boxSizing: 'border-box'
      
    },

    inicio_button: {
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
    hoy_button: {
      backgroundColor: `${hoyButton}`,
      display: 'flex',
      height: '50px',
      textDecoration:'none',
      border: 'none',
      padding: '16px',
      alignItems:'center',
      borderWidth: '3px',
      borderRadius:'35px', 
      fontSize: '16px',
      color:'black',
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
      cursor: 'pointer',
    },
    bell_icon:{
      width: '57px',
      backgroundColor: `${bellButton}`,
      height: '50px',
      boxSizing: 'boder-box',
      justifyContent:'center',
      alignItems: 'center',
      display: 'flex',
      flexDirection: 'column',
      color: 'gray',
      fontSize: 'x-large',
      borderRadius: '50%',
      cursor: 'pointer',
    },
  
    comments_icon:{
      backgroundColor: `${commentsButton}`,
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
      cursor: 'pointer',
    },
  
    user_icon:{
      backgroundColor: `${userButton}`,
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
      cursor: 'pointer',
    },
    angle_icon:{
      backgroundColor: `${angleButton}`,
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

      <div style={_stylesHoverHeader.header_logo}
        onMouseEnter={() => {
          setLogoButton('#ddd');
        }}
        onMouseOut={() => setLogoButton('white')}
      >
        <FontAwesomeIcon icon={faPinterest}/>
      </div>

      <button
      style={_stylesHoverHeader.inicio_button}
      onMouseEnter={() => {
        setSaveButton('#A6A6A6');
      }}
      onMouseOut={() => setSaveButton('black')}
      >
      Inicio
      </button>
      <button
      style={_stylesHoverHeader.hoy_button}
      onMouseEnter={() => {
        setHoyButton('#F0F0F0');
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

      <div style={_stylesHoverHeader.bell_icon} onMouseEnter={() => {
          setBellButton('#F0F0F0');
        }}
        onMouseOut={() => setBellButton('white')}>
          <FontAwesomeIcon icon={faBell} />
      </div>
      <div style={_stylesHoverHeader.comments_icon} onMouseEnter={() => {
         
          setCommentsButton('#F0F0F0');
        }}
        onMouseOut={() => setCommentsButton('white')}>
          <FontAwesomeIcon icon={faCommentDots} />
      </div>
      <div style={_stylesHoverHeader.user_icon} onMouseEnter={() => {
          setUserButton('#F0F0F0');
        }}
        onMouseOut={() => setUserButton('white')}>
          <FontAwesomeIcon  icon={faUser} />
      </div>
      
      <div  style={_stylesHoverHeader.angle_icon} onMouseEnter={() => {

          setAngleButton('#F0F0F0');
        }}
        onMouseOut={() => setAngleButton('white')}>
          <FontAwesomeIcon icon={faAngleDown} />
      </div>  

    </div>
      
    
  )
 

};

export default HoverHeader;
