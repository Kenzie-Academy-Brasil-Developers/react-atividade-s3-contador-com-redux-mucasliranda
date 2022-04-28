import { ThemeProvider, createTheme, Box, Typography, Button, Paper, IconButton } from '@mui/material';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import { useDispatch, useSelector } from "react-redux";
import { increase, decrease } from './store/modules/counter/action';
import { useState } from 'react';

function App() {

  const [darkMode, setDarkMode] = useState(false)

  const theme = createTheme({
    palette: {
      ...(darkMode ? {
        mode: "dark",
        primary: {
          main: "#fff",
          contrastText: '#000',
        },
        secondary: {
          main: "#000",
        }
      }:{
        mode: "light",
        primary: {
          main: "#98B02D",
          light: '#757ce8',
          contrastText: '#fff',
        },
        secondary: {
          main: "#519FE2",
        },
        text: {
          primary: "#fff"
        }
      })
    },
  })

  theme.components = {
    typography: {
      h1: {
        color: theme.palette.primary.contrastText
      }
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: "0px"
        }
      }
    }
  }

  const dispatch = useDispatch()

  const counter = useSelector( (state) => state.counter)


  const handDeacrease = () => {

  }

  const handIncrease = () => {

  }

  return (
    <ThemeProvider theme={theme} >
      <Paper sx={{height: "100vh", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", backgroundColor: theme.palette.secondary.main}}>
        
        <IconButton sx={{position: "absolute", top: "0px", right: "0px"}} onClick={() => setDarkMode(!darkMode)} >
          {darkMode ? (
            <Brightness7Icon sx={{width: "35px", height: "35px"}} />
            ):(
            <Brightness4Icon color="primary" sx={{width: "35px", height: "35px"}} />
          )}
        </IconButton>


        <Typography variant='h1' >0</Typography>

        <Box sx={{display: "flex", justifyContent: "space-between", gap: "35px"}} >

          <Button onClick={dispatch(decrease)} size='large' sx={{fontSize: "1.25rem"}} variant="contained" >
            -
          </Button>

          <Button size='large' sx={{fontSize: "1.25rem"}} variant="contained" >
            +
          </Button>

        </Box>

      </Paper>
    </ThemeProvider>
  );
}

export default App;
