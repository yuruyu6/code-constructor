import { PlayArrow } from '@mui/icons-material'
import { Alert, Box, Button, Stack, Typography } from '@mui/material'
import React from 'react'
import CodeBlocksMenu from './CodeBlocksMenu'

export const Selector = ({ task, checkedStagesId, isResultVisible, setIsResultVisible, setCheckedStagesId }) => {

    const checkIsAllRequiredStagesChecked = () => {
        return task.codeBlocks
          .filter((codeBlock) => codeBlock.required === true)
          .every((requiredBlock) => checkedStagesId.includes(requiredBlock.id))
      }
    
      const handleShowResult = () => {
        if (checkIsAllRequiredStagesChecked()) {
          setIsResultVisible({ errors: [], value: true })
        } else {
          setIsResultVisible({
            errors: ['Для виконання програми недостатньо коду'],
            value: false,
          })
        }
      }    

  return (
    <>
      <Typography variant="h6" gutterBottom>
        Вибір блоків
      </Typography>
      <CodeBlocksMenu
        taskCodeBlocks={task.codeBlocks}
        checkedStagesId={checkedStagesId}
        setCheckedStagesId={setCheckedStagesId}
      />
      <Box my={2}>
        <Button
          variant="contained"
          startIcon={<PlayArrow />}
          fullWidth
          onClick={handleShowResult}
        >
          Запуск коду
        </Button>
        <Stack spacing={2} mt={2}>
          {isResultVisible.errors.length >= 1 &&
            isResultVisible.errors.map((error) => (
              <Alert severity="error">{error}</Alert>
            ))}
        </Stack>
      </Box>
    </>
  )
}
