import { css, Global, useTheme } from '@emotion/react'

const GlobalStyles = () => {
  const { colors } = useTheme()

  return (
    <Global
      styles={css`
        body {
          font-size: 15px;
          line-height: 1.5;
          color: ${colors.primary};
        }
      `}
    />
  )
}

export default GlobalStyles
