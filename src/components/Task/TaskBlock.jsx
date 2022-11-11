import { Container, Grid, Typography } from '@mui/material'
import React, { useState } from 'react'
import { CodeViewer } from './CodeViewer'
import { Selector } from './Selector'
import TaskResult from './TaskResult'

export const TaskBlock = ({ task }) => {

  const [checkedStagesId, setCheckedStagesId] = useState([])
  const [isResultVisible, setIsResultVisible] = useState({
    errors: [],
    value: null,
  })
    
  return (
    <>
      <Container maxWidth="xl">
        <Typography sx={{margin: "10px", textAlign: "center"}} variant="h5" gutterBottom>
          {task.title}
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} lg={4}>
            <Selector
              task={task}
              checkedStagesId={checkedStagesId}
              setIsResultVisible={setIsResultVisible}
              isResultVisible={isResultVisible}
              setCheckedStagesId={setCheckedStagesId}
            />
          </Grid>
          <Grid item xs={12} lg={8}>
            <CodeViewer checkedStagesId={checkedStagesId} task={task} />
          </Grid>
            <TaskResult open={isResultVisible.value} task={task} isResultVisible={isResultVisible} />
        </Grid>
    </Container>
    </>
    
  )
}
