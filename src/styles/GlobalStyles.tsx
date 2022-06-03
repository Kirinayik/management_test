import { css, Global, useTheme } from '@emotion/react'
import emotionNormalize from 'emotion-normalize'

const GlobalStyles = () => {
  const { colors } = useTheme()

  return (
    <Global
      styles={css`
        ${emotionNormalize};

        *,
        *::before,
        *::after {
          box-sizing: border-box;
        }

        button {
          background: transparent;
          border: 0;
          cursor: pointer;
          padding: 0;
        }

        ul {
          list-style: none;
          margin: 0;
        }

        body {
          font-size: 15px;
          line-height: 1.5;
          font-family: Roboto, sans-serif;
          color: ${colors.primary};
        }
      `}
    />
  )
}

export default GlobalStyles
