import { FC } from 'react'
import {
  CheckboxContainer,
  HiddenCheckbox,
  StyledCheckbox,
} from '../Calls.styles'
import CheckIcon from '@mui/icons-material/Check'

type CallsSelectCheckboxProps = {
  checked: boolean
}

const CallsSelectCheckbox: FC<CallsSelectCheckboxProps> = ({ checked }) => {
  return (
    <CheckboxContainer checked={checked}>
      <HiddenCheckbox readOnly type="checkbox" checked={checked} />
      <StyledCheckbox checked={checked}>
        <CheckIcon />
      </StyledCheckbox>
    </CheckboxContainer>
  )
}

export default CallsSelectCheckbox
