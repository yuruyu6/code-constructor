import { Card, Typography } from '@mui/material'
import React from 'react'
import Code from './Code'

export const CodeViewer = ({ checkedStagesId, task }) => {
    
  return (
    <>
      {checkedStagesId.length > 0 && (
        <>
          <Typography variant="h6" gutterBottom>
            Перегляд коду
          </Typography>

          <Card>
            <Code
              code={task.codeBlocks
                .filter((stage) => checkedStagesId.includes(stage.id))
                .map((stage) =>
                  stage.code.replace(/("\n)/gm, '"\\n').replace(/(\t)/gm, '\\t')
                )
                .join('')}
            />
          </Card>
        </>
      )}
    </>
  )
}
