import React from 'react'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import { useState } from 'react';

const SelectBar = () => {

    const [selection, setSelection] = useState()

    const selData = [
        "Make: Mercedes model: C220 year: 2007",
        "Make: Audi model: A5 year: 2010",
        "Make: VW model: Golf year: 2008",
        "Make: BMW model: e65 year: 2004",
    ]

  return (
    <div>
        Invoices
      <Box sx={{ minWidth: 120 }}>
        <FormControl sx={{width: "300px"}}>
            <InputLabel variant="standard" htmlFor="uncontrolled-native">
                Cars
            </InputLabel>
            <NativeSelect onChange={(e) => setSelection(e.target.value)}
                defaultValue={10}
                inputProps={{
                    name: 'age',
                    id: 'uncontrolled-native',
                }}
                >
                <option value={selData[0]}>Mercedes</option>
                <option value={selData[1]}>Audi</option>
                <option value={selData[2]}>VW</option>
                <option value={selData[3]}>BMW</option>
            </NativeSelect>
        </FormControl>
      </Box>
      <br></br>
                <h3>{selection}</h3>
    </div>
  )
}

export default SelectBar
