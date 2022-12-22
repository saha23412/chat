import React from 'react'
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import { ISelectCustom } from '../../models/interface/select-custom'


const SelectCustom: React.FC<ISelectCustom> = ({ label, onChange, selectValue, options, children, error }) => {
  return (
    <FormControl sx={{ marginTop: '15px' }} fullWidth>
      <InputLabel id="demo-simple-select-label">{label}</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        error={error}
        id="demo-simple-select"
        label={label}
        onChange={event => onChange(event.target.value)}
        value={selectValue}
      >
        {options.map(option =>
          <MenuItem key={option.id} value={option.name}>{option.name}</MenuItem>
        )}

      </Select>
      {
        children
      }
    </FormControl>
  )
}

export default SelectCustom