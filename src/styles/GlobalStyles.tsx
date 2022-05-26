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
