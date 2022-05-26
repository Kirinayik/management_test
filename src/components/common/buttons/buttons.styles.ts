import styled from '@emotion/styled'
import { Button as MUIButton } from '@mui/material'

export const Button = styled(MUIButton)`
  display: flex;
  align-items: center;
  gap: 17px;
  width: 100%;
  height: 52px;
  color: ${(props) => props.theme.colors.white};
  background: ${(props) => props.theme.colors.accent};
  border: 0;
  outline: 0;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  font-size: 16px;
  border-radius: 4px;
  text-transform: none;

  &:hover {
    background: ${(props) => props.theme.colors['accent-hover']};
  }
  &:active {
    background: ${(props) => props.theme.colors['accent-active']};
  }
`
