import React from 'react'
import Highlight, { defaultProps } from 'prism-react-renderer'
import theme from 'prism-react-renderer/themes/github'
import { Box } from '@mui/material'

const Code = ({ code }) => (
  <Box sx={{ maxHeight: '920px', overflow: 'auto' }}>
    <Highlight {...defaultProps} theme={theme} code={code} language="cpp">
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <Box
          sx={{ overflow: 'auto' }}
          component="pre"
          className={className}
          style={style}
        >
          {tokens.map((line, i) => (
            <div
              style={{ display: 'table-row' }}
              key={i}
              {...getLineProps({ line, key: i })}
            >
              <p
                style={{
                  display: 'table-cell',
                  textAlign: 'right',
                  userSelect: 'none',
                }}
                pr={1}
              >
                {i + 1}
              </p>
              <p style={{ display: 'table-cell' }}>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token, key })} />
                ))}
              </p>
            </div>
          ))}
        </Box>
      )}
    </Highlight>
  </Box>
)

export default Code
