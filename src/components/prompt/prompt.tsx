import React from 'react'
import { Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import './prompt.sass'
import { IPromptProps } from './../../models/interface/propmpt';

const Prompt: React.FC<IPromptProps> = ({ path, question, linkText }) => {
  return (
    <Typography variant='subtitle1' sx={{
      marginTop: 2,
      textAlign: "center"
    }} margin='normal' component="div" className="Registration-form-prompt">
      {question}
      <Link style={{ color: '#1976d2' }} to={path}>
        {linkText}
      </Link>
    </Typography>
  )
}

export default Prompt