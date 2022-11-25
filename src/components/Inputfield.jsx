import * as React from 'react';



const Inputfield = (props) => {
    
  return (
        <TextField
          required
          id="outlined-required"
          label={props.fieldFor}
          defaultValue=""
          placeholder='First name'
        />
  )
}

export default Inputfield
