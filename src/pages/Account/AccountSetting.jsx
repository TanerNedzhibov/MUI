import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Container } from '@mui/system';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Button } from '@mui/material';
import {useState} from 'react'


const AccountSetting = () => {

  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    age: "",
    email: ""
  })

  const [validation, setValidation] = useState({
    clicked: false,
    filled: false
  })

  const allFilled = Object.values(data).every(
    value => value
  );

  const submitHandler = (e) =>
  {
    e.preventDefault()
    setValidation({...validation, clicked: true})
    validation.clicked && allFilled ? console.log(data) : console.log("err")
  }

  return (
    <form onSubmit={submitHandler}>
   <Container>
    <h3>Account settings</h3>
    
    <Box 
    component="form"
    textAlign="center"
    sx={{
      '& .MuiTextField-root': { m: 1, width: '25ch' },
    }} >
       <AccountCircleIcon sx={{width: "80px", height: "80px"}}/>
       <br></br>
       
          <TextField
                onChange={(e) => setData({...data, firstName: e.target.value})}
                required
                id="outlined-required"
                label='Fist name'
                placeholder='First name'
                helperText={validation.clicked && !data.firstName ? "Required field" : null}
              />
          <TextField
                onChange={(e) => setData({...data, lastName: e.target.value})}
                required
                id="outlined-required"
                label='Last name'
                placeholder='Last name'
              />
              <br></br>
          <TextField
                onChange={(e) => setData({...data, age: e.target.value})}
                required
                id="outlined-required"
                label='Age'
                placeholder='Age'
                type='number'
                helperText={validation.clicked && !data.age ? "Required field" : null}
          />
                <br></br>
          <TextField
                 onChange={(e) => setData({...data, email: e.target.value})}
                required
                id="outlined-required"
                label='Email'
                placeholder='Email'
                autoComplete='email'
                autoFocus
                helperText={validation.clicked && !data.email ? "Required field" : null}
              />
        
    </Box>
 
    <Button type='submit' sx={{float:"right"}}
    variant="contained">
      Save settings
    </Button>
    
   </Container>
   </form>
  )
}

export default AccountSetting