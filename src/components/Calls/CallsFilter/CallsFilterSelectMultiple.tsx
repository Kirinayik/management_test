import { useTheme } from '@emotion/react'
import { useAppDispatch } from '../../../store/hooks'
import { useCallsFilter } from '../../../hooks/useCallsFilter'
import { FC, MouseEvent, useEffect, useRef, useState } from 'react'
import { setFilterSelect } from '../../../store/search/searchState'
import { Box } from '@mui/material'
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import {
  CallsFilterSelectContainer,
  CallsFilterSelectItem,
} from '../Calls.styles'
import { CallsFilterSelectProps } from './CallsFilterSelect'
import CallsSelectCheckbox from './CallsSelectCheckbox'

const CallsFilterSelectMultiple: FC<CallsFilterSelectProps> = ({ type }) => {
  const { colors } = useTheme()
  const dispatch = useAppDispatch()
  const { items: selectItems, defaultValue } = useCallsFilter(type)
  const [selectValue, setSelectValue] = useState<
    { name: string; value: string }[]
  >([])
  const [isOpen, setIsOpen] = useState(false)
  const wrapperRef = useRef<any>(null)
  const isMounted = useRef(false)

  useEffect(() => {
    const checkIfClickedOutside = (e: globalThis.MouseEvent) => {
      if (
        isOpen &&
        wrapperRef.current &&
        !wrapperRef.current.contains(e.target)
      ) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', checkIfClickedOutside)

    return () => {
      document.removeEventListener('mousedown', checkIfClickedOutside)
    }
  }, [isOpen])

  const handleOpenSelect = () => {
    if (isOpen) {
      setIsOpen(false)
    } else {
      setIsOpen(true)
    }
  }

  const handleSetFilterSelect = (e: MouseEvent<HTMLLIElement>) => {
    const value = e.currentTarget.getAttribute('data-value') as string
    const name = e.currentTarget.getAttribute('data-name') as string
    if (selectValue.filter((el) => el.name === name)[0]) {
      setSelectValue(selectValue.filter((el) => el.name !== name))
    } else {
      setSelectValue([...selectValue, { name, value }])
    }
  }

  const handleSetFilterSelectDefault = () => {
    if (selectValue.length > 0) setSelectValue([])
    handleOpenSelect()
  }

  useEffect(() => {
    if (isMounted.current) {
      dispatch(
        setFilterSelect({ type, value: selectValue.map((el) => el.value) })
      )
    } else {
      isMounted.current = true
    }
  }, [selectValue])

  return (
    <Box sx={{ position: 'relative' }} ref={wrapperRef}>
      <Box
        onClick={handleOpenSelect}
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'end',
          gap: '5px',
          cursor: 'pointer',
          width: '170px',
        }}
      >
        <Box
          sx={{
            userSelect: 'none',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            color: selectValue.length === 0 ? 'inherit' : colors.accent,
          }}
        >
          {selectValue.length === 0
            ? defaultValue
            : selectValue.map((el) => el.name).join(', ')}
        </Box>
        {isOpen ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
      </Box>
      {isOpen && (
        <CallsFilterSelectContainer>
          <CallsFilterSelectItem
            onClick={handleSetFilterSelectDefault}
            isActive={selectValue.length === 0}
          >
            <Box>{defaultValue}</Box>
          </CallsFilterSelectItem>
          {selectItems.map((item, i) => (
            <CallsFilterSelectItem
              {...{ 'data-value': item.value, 'data-name': item.name }}
              onClick={handleSetFilterSelect}
              key={i}
              isActive={!!selectValue.filter((el) => el.name === item.name)[0]}
            >
              <CallsSelectCheckbox
                checked={!!selectValue.filter((el) => el.name === item.name)[0]}
              />
              <Box>{item.name}</Box>
            </CallsFilterSelectItem>
          ))}
        </CallsFilterSelectContainer>
      )}
    </Box>
  )
}

export default CallsFilterSelectMultiple
