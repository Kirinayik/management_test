import { Box } from '@mui/material'
import { FC, MouseEvent, useEffect, useRef, useState } from 'react'
import {
  CallsFilterSelectContainer,
  CallsFilterSelectItem,
} from '../Calls.styles'
import { useCallsFilter } from '../../../hooks/useCallsFilter'
import { useAppDispatch } from '../../../store/hooks'
import { setFilterSelect } from '../../../store/search/searchState'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp'
import { useTheme } from '@emotion/react'

export type CallsFilterSelectProps = {
  type: string
}

const CallsFilterSelect: FC<CallsFilterSelectProps> = ({ type }) => {
  const [isOpen, setIsOpen] = useState(false)
  const { colors } = useTheme()
  const dispatch = useAppDispatch()
  const { items: selectItems, defaultValue } = useCallsFilter(type)
  const [selectValue, setSelectValue] = useState<{
    name: string
    value: string
  }>({
    name: defaultValue,
    value: '',
  })
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

    if (selectValue.value !== value) setSelectValue({ value, name })

    setIsOpen(false)
  }

  useEffect(() => {
    if (isMounted.current) {
      dispatch(setFilterSelect({ type, value: selectValue.value }))
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
            color:
              selectValue.name === defaultValue
                ? colors.secondary
                : colors.accent,
          }}
        >
          {selectValue.name}
        </Box>
        {isOpen ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
      </Box>
      {isOpen && (
        <CallsFilterSelectContainer>
          <CallsFilterSelectItem
            {...{ 'data-value': '', 'data-name': defaultValue }}
            onClick={handleSetFilterSelect}
            isActive={selectValue.name === defaultValue}
            key={0}
          >
            <Box>{defaultValue}</Box>
          </CallsFilterSelectItem>
          {selectItems.map((item, i) => (
            <CallsFilterSelectItem
              {...{ 'data-value': item.value, 'data-name': item.name }}
              onClick={handleSetFilterSelect}
              key={i + 1}
              isActive={selectValue.name === item.name}
            >
              <Box>{item.name}</Box>
            </CallsFilterSelectItem>
          ))}
        </CallsFilterSelectContainer>
      )}
    </Box>
  )
}

export default CallsFilterSelect
