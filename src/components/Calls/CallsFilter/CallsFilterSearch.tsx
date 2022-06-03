import { ChangeEvent, useEffect, useState } from 'react'
import { Box, debounce } from '@mui/material'
import { CallsFilterSearchInput } from '../Calls.styles'
import SearchIcon from '@mui/icons-material/Search'
import { useAppDispatch } from '../../../store/hooks'
import { setSearchInput } from '../../../store/search/searchState'

const CallsFilterSearch = () => {
  const dispatch = useAppDispatch()
  const [input, setInput] = useState('');
  const debounceSearch = debounce(() => dispatch(setSearchInput(input)), 300);

  useEffect(() => {
    debounceSearch()
  }, [input])

  const handleSetInput = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value)
  }

  return (
    <Box
      sx={{
        flexGrow: '1',
        minWidth: '180px',
        padding: '14px 0 14px 30px',
        position: 'relative',
      }}
    >
      <CallsFilterSearchInput
        value={input}
        onChange={handleSetInput}
        placeholder={'Поиск по звонкам'}
      />
      <SearchIcon
        sx={{
          position: 'absolute',
          top: '50%',
          left: 0,
          transform: 'translateY(-50%)',
          color: 'inherit',
        }}
      />
    </Box>
  )
}

export default CallsFilterSearch
