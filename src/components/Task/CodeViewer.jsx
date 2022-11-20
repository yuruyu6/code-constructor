import { ContentCopy } from '@mui/icons-material'
import { Box, Card, Typography } from '@mui/material'
import React from 'react'
import { CommonBtn as Button } from '../CommonBtn'
import Code from './Code'

export const CodeViewer = ({ checkedStagesId, task }) => {
  const mappedCodeLines = task.codeBlocks
    .filter((stage) => checkedStagesId.includes(stage.id))
    .map((stage) =>
      `\r //${stage.title}` + stage.code.replace(/("\n)/gm, '"\\n').replace(/(\t)/gm, '\\t')
    )
    .join('')

  const onClickCopyButton = () => {
    if (!navigator.clipboard) {
      return
    }

    navigator.clipboard.writeText(mappedCodeLines)
  }

  return (
    <>
      {checkedStagesId.length > 0 && (
        <>
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography variant="h6" gutterBottom>
              Перегляд коду
            </Typography>
            <Button
              startIcon={<ContentCopy />}
              onClick={() => onClickCopyButton()}
            >
              Скопіювати
            </Button>
          </Box>
          <Card>
            <Code code={mappedCodeLines} />
          </Card>
        </>
      )}
    </>
  )
}
