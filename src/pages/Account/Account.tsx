import React from 'react'
import { Outlet } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';

type Props = {};

const theme = createTheme({
  palette: {
    primary: {
      main: '#233044',
    },
  },
});

const Account = (props: Props) => {
  return (
    <div>
      <ThemeProvider theme={theme}>
      <Outlet/>
      </ThemeProvider>
    </div>
  )
}

export default Account
