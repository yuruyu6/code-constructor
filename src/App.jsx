import React from 'react'
import { Box, Tab, Tabs } from '@mui/material'
import { useState } from 'react'
import TabPanel from './components/TabPannel'
import { TaskBlock } from './components/Task/TaskBlock'
import tasksList from './constants/tasks'

const App = () => {
  const [tab, setTab] = useState(0)

  const handleChange = (_, tabId) => {
    setTab(tabId)
  }

  return (
    <>
      <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={tab} onChange={handleChange} centered>
            {tasksList.map((task) => (
              <Tab
                key={task.id}
                label={`ЛР ${task.id + 1}`}
                value={task.id}
                wrapped
              />
            ))}
          </Tabs>
        </Box>
        {tasksList.map((task) => (
          <TabPanel key={task.id} value={tab} index={task.id}>
            <TaskBlock task={task} />
          </TabPanel>
        ))}
      </Box>
    </>
  )
}

export default App
