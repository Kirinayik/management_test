import { ChangeEvent, useState } from 'react'
import { Box } from '@mui/material'
import { CallsFilterSearchInput } from '../Calls.styles'
import SearchIcon from '@mui/icons-material/Search'

const CallsFilterSearch = () => {
  const [inputSearch, setInputSearch] = useState('')

  const handleSetInputSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setInputSearch(e.target.value)
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
        value={inputSearch}
        onChange={handleSetInputSearch}
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
