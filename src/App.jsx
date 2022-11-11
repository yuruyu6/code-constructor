import React from 'react'
import { Box, Tab, Tabs } from '@mui/material'
import { useState } from 'react'
import TabPanel from './components/TabPannel'
import { TaskBlock } from './components/Task/TaskBlock'
import { task0 } from './constants/tasks/task0'
import { task1 } from './constants/tasks/task1'

const App = () => {
  const [value, setValue] = useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <>
      <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={value} onChange={handleChange}>
            <Tab label="Task 1" />
            <Tab label="Task 2" />
            <Tab label="Task 3" />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <TaskBlock task={task0} />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <TaskBlock task={task1} />
        </TabPanel>
        <TabPanel value={value} index={2}>
          Item Three
        </TabPanel>
      </Box>
    </>
  )
}

export default App
