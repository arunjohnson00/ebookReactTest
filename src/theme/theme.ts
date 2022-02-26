import { createTheme } from '@mui/material/styles';

export const toggleButton = createTheme({
    components: {
        MuiToggleButton: {
        styleOverrides: {
          root: {
            fontSize: '1em',
            fontWeight:'bold',
            backgroundColor:'rgb(34 165 135 / 12%)',
            borderBottom:'1px dashed white',
            color:'white',
            '&:hover': {
                backgroundColor: '#ffffff1a',
                color: '#1fb5a0',
            },
            '&:active': {
                backgroundColor: '#1fb5a0',
                color: 'white',
            },
            '&:$selected': {
              backgroundColor: '#1fb5a0',
              color: 'white',
          },
          },
        },
      },
    },
  });



  export const iconButton = createTheme({
    components: {
        MuiIconButton: {
        styleOverrides: {
          root: {
            backgroundColor:'#1fb5a0',
            color:'white',
            marginLeft:'20px',
            '&:hover': {
                backgroundColor: '#16a18d',
                color: 'white',
            },
            '&:active': {
                backgroundColor: '#1fb5a0',
                color: 'white',
            },
          },
        },
      },
    },
  });

  export const iconButtonFooter = createTheme({
    components: {
        MuiIconButton: {
        styleOverrides: {
          root: {
          
            color:'white',
            
            
          },
        },
      },
    },
  });


  export const muiButton = createTheme({
    components: {
       MuiButton: {
        styleOverrides: {
          root: {
            backgroundColor:'#1fb5a0',
            color:'white',
            fontWeight:'bold',
            padding:'10px',
            marginLeft:'20px',
            '&:hover': {
                backgroundColor: '#16a18d',
                color: 'white',
            },
            '&:active': {
                backgroundColor: '#1fb5a0',
                color: 'white',
            },
          },
        },
      },
    },
  });


  export const muiButtonback = createTheme({
    components: {
       MuiButton: {
        styleOverrides: {
          root: {
            backgroundColor:'#c75454',
            color:'white',
            fontWeight:'bold',
            padding:'10px',
            marginLeft:'20px',
            '&:hover': {
                backgroundColor: '#af4545',
                color: 'white',
            },
            '&:active': {
                backgroundColor: '#c75454',
                color: 'white',
            },
          },
        },
      },
    },
  });



  export const muiOutlinedInput=createTheme({
    components: {
       MuiOutlinedInput: {
        styleOverrides: {
          root: {
            backgroundColor:'white',
            color:'black',
            fontWeight:'bold',
            padding:'10px',
            marginLeft:'20px',
            marginRight:'20px',
            '&:hover': {
                backgroundColor: '#ece9e9',
                color: 'black',
            },
            '&:active': {
                backgroundColor: '#ece9e9',
                color: 'black',
            },
          },
        },
      },
    },
  });
