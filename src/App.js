import PlayArrow from '@mui/icons-material/PlayArrow'
import {
  Alert,
  Button,
  Card,
  Container,
  Grid,
  Stack,
  Typography,
} from '@mui/material'
import { Box } from '@mui/system'
import { useState } from 'react'
import Code from './components/Code'
import CodeBlocksMenu from './components/CodeBlocksMenu'
import { task0 } from './constants/tasks/task0'

const App = () => {
  const [checkedStagesId, setCheckedStagesId] = useState([])
  const [isResultVisible, setIsResultVisible] = useState({
    errors: [],
    value: null,
  })

  const checkIsAllRequiredStagesChecked = () => {
    return task0.codeBlocks
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
    <Container maxWidth="xl">
      <Typography variant="h5" gutterBottom>
        {task0.title}
      </Typography>
      <Grid container spacing={2}>        
        <Grid item xs={12} lg={4}>
          <Typography variant="h6" gutterBottom>
            Вибір блоків
          </Typography>
          <CodeBlocksMenu
            taskCodeBlocks={task0.codeBlocks}
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
        </Grid>
        <Grid item xs={12} lg={8}>
          {checkedStagesId.length > 0 && (
            <>
              <Typography variant="h6" gutterBottom>
                Перегляд коду
              </Typography>

              <Card>
                <Code
                  code={task0.codeBlocks
                    .filter((stage) => checkedStagesId.includes(stage.id))
                    .map((stage) =>
                      stage.code
                        .replace(/("\n)/gm, '"\\n')
                        .replace(/(\t)/gm, '\\t')
                    )
                    .join('')}
                />
              </Card>
            </>
          )}
        </Grid>
        {isResultVisible.value && (
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
                src={task0.result.value}
                alt={task0.title}
              />
            </Box>
          </Grid>
        )}
      </Grid>
    </Container>
  )
}

export default App
