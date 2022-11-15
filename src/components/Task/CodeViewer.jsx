import { Box, Card, Typography } from '@mui/material'
import React from 'react'
import { CommonBtn } from '../CommonBtn'
import Code from './Code'

export const CodeViewer = ({ checkedStagesId, task }) => {

  let mappedCodeLines = task.codeBlocks
    .filter((stage) => checkedStagesId.includes(stage.id))
    .map((stage) =>
      stage.code.replace(/("\n)/gm, '"\\n').replace(/(\t)/gm, '\\t')
    )
    .join('')

    const Copy = (text) => {
      var input = document.createElement('textarea');
      input.innerHTML = text;
      document.body.appendChild(input);
      input.select();
      var result = document.execCommand('copy');
      document.body.removeChild(input);
      return result;
  }

  console.log(mappedCodeLines);
  return (
    <>
      {checkedStagesId.length > 0 && (
        <>
        <Box sx={{display: "flex", justifyContent: "space-between"}}>
        <Typography variant="h6" gutterBottom>
            Перегляд коду
          </Typography>
          <CommonBtn onClick={() => Copy(mappedCodeLines)}>
            Скопіювати
          </CommonBtn>
        </Box>
          <Card>
            <Code
              code={mappedCodeLines}
            />
          </Card>
        </>
      )}
    </>
  )
}