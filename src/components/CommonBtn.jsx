import { Button } from '@mui/material'
import React from 'react'

export const CommonBtn = ({...props}) => {
  return (
    <Button 
    sx={{margin: 1}} 
    variant='contained' 
    color="primary" 
    {...props}
    />
  )
}
