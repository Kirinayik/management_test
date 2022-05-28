import { MenuItem } from '@mui/material'
import { useState } from 'react'
import { CallsFilterSelectButton, CallsFilterSelectButtonItem } from '../Calls.styles'
import { useCallsFilter } from '../../../hooks/useCallsFilter'

const CallsFilterSelect = ({ type }: { type: string }) => {
  const { items: selectItems, defaultValue } = useCallsFilter(type)
  const [selectValue, setSelectValue] = useState('')

  const handleSetSelectValue = (e: any) => {
    setSelectValue(e.target.value)
  }

  return (
    <CallsFilterSelectButton
      value={selectValue}
      onChange={handleSetSelectValue}
      displayEmpty
      MenuProps={{
        PaperProps: { sx: { maxHeight: '250px' } },
      }}
    >
      <MenuItem value="" sx={{ width: '180px' }}>
        <CallsFilterSelectButtonItem>
          {defaultValue}
        </CallsFilterSelectButtonItem>
      </MenuItem>
      {selectItems &&
        selectItems.map((item: any, i: number) => (
          <MenuItem value={item.value} key={i} sx={{ width: '180px' }}>
            <CallsFilterSelectButtonItem>
              {item.name}
            </CallsFilterSelectButtonItem>
          </MenuItem>
        ))}
    </CallsFilterSelectButton>
  )
}

export default CallsFilterSelect
