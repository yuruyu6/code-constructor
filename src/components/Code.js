import React from 'react'
import Highlight, { defaultProps } from 'prism-react-renderer'
import theme from 'prism-react-renderer/themes/github'
import { Box } from '@mui/material'

const Code = ({ code }) => (
  <Box sx={{maxHeight: '920px', overflow: 'auto'}}>
  <Highlight {...defaultProps} theme={theme} code={code} language="cpp">
    {({ className, style, tokens, getLineProps, getTokenProps }) => (
      <Box sx={{overflow: 'auto'}} component="pre" className={className} style={style}>
        {tokens.map((line, i) => (
          <Box
            sx={{ display: 'table-row' }}
            key={i}
            {...getLineProps({ line, key: i })}
          >
            <Box
              sx={{
                display: 'table-cell',
                textAlign: 'right',
                userSelect: 'none',
              }}
              pr={1}
            >
              {i + 1}
            </Box>
            <Box sx={{ display: 'table-cell' }}>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token, key })} />
              ))}
            </Box>
          </Box>
        ))}
      </Box>
    )}
  </Highlight></Box>
)

export default Code
