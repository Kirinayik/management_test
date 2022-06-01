import { MenuItem, SelectChangeEvent } from '@mui/material'
import { useState } from 'react'
import {
  CallsFilterSelectButton,
  CallsFilterSelectButtonItem,
} from '../Calls.styles'
import { useCallsFilter } from '../../../hooks/useCallsFilter'
import { useAppDispatch } from '../../../store/hooks'
import { setFilterSelect } from '../../../store/search/searchState'

const CallsFilterSelect = ({ type }: { type: string }) => {
  const { items: selectItems, defaultValue } = useCallsFilter(type)
  const dispatch = useAppDispatch()
  const [selectValue, setSelectValue] = useState('')

  const handleSetSelectValue = (e: SelectChangeEvent<unknown>) => {
    setSelectValue(e.target.value as string)
    dispatch(setFilterSelect({ type, value: e.target.value as string }))
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
      <MenuItem value="" sx={{ width: '170px' }}>
        <CallsFilterSelectButtonItem isActive={false}>
          {defaultValue}
        </CallsFilterSelectButtonItem>
      </MenuItem>
      {selectItems &&
        selectItems.map((item, i) => (
          <MenuItem value={item.value} key={i} sx={{ width: '180px' }}>
            <CallsFilterSelectButtonItem isActive={selectValue === item.value}>
              {item.name}
            </CallsFilterSelectButtonItem>
          </MenuItem>
        ))}
    </CallsFilterSelectButton>
  )
}

export default CallsFilterSelect
