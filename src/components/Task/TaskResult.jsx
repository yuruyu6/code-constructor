import { Box, Grid, Typography } from '@mui/material'
import React from 'react'

const TaskResult = ({ open, task }) => {
  return (
    <>
      {open && task.result && (
        <>
          <Grid item xs={12}>
            <Typography variant="h6" gutterBottom>
              Результат виконання
            </Typography>
            <Box sx={{ display: 'inline-block' }}>
              <img
                style={{
                  overflow: 'auto',
                  height: '100%',
                  width: '100%',
                  objectFit: 'contain',
                }}
                src={task.result.value}
                alt={task.title}
              />
            </Box>
          </Grid>
        </>
      )}
    </>
  )
}

export default TaskResult
