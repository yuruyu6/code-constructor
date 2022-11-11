import {
  Card,
  CardHeader,
  Checkbox,
  Divider,
  List,
  ListItem,
  ListItemText,
} from '@mui/material'
import React from 'react'

const CodeBlocksMenu = ({
  taskCodeBlocks,
  checkedStagesId,
  setCheckedStagesId,
}) => {
  const handleToggle = (id) => () => {
    setCheckedStagesId((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    )
  }

  const handleToggleAll = () => () => {
    setCheckedStagesId((prev) =>
      prev.length === taskCodeBlocks.length
        ? []
        : taskCodeBlocks.map((stage) => stage.id)
    )
  }

  return (
    <Card>
      <CardHeader
        sx={{ px: 2, py: 1 }}
        avatar={
          <Checkbox
            onClick={handleToggleAll()}
            checked={
              checkedStagesId.length === taskCodeBlocks.length &&
              checkedStagesId.length !== 0
            }
            indeterminate={
              checkedStagesId.length !== taskCodeBlocks.length &&
              checkedStagesId.length !== 0
            }
            disabled={taskCodeBlocks.length === 0}
          />
        }
        title="Обрані блоки"
        subheader={`${checkedStagesId.length || 0}/${
          taskCodeBlocks.length
        } обрано`}
      />
      <Divider />
      <List
        sx={{
          bgcolor: 'background.paper',
          overflow: 'auto',
        }}
        component="div"
        role="list"
      >
        {taskCodeBlocks.map((stage, index) => {
          const labelId = `transfer-list-all-item-${stage.id}-label`

          return (
            <ListItem
              key={stage.id}
              role="listitem"
              button
              onClick={handleToggle(stage.id)}
            >
              <Checkbox
                sx={{ mr: 2 }}
                checked={checkedStagesId.includes(stage.id)}
                tabIndex={-1}
                disableRipple
                inputProps={{
                  'aria-labelledby': labelId,
                }}
              />
              <ListItemText
                id={labelId}
                primary={`${index + 1}. ${stage.title}`}
                secondary={!stage.required && "Необов'язковий"}
              />
            </ListItem>
          )
        })}
        <ListItem />
      </List>
    </Card>
  )
}

export default CodeBlocksMenu
