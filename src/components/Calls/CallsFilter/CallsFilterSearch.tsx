import { ChangeEvent } from 'react'
import { Box } from '@mui/material'
import { CallsFilterSearchInput } from '../Calls.styles'
import SearchIcon from '@mui/icons-material/Search'
import { useAppDispatch, useAppSelector } from '../../../store/hooks'
import { setSearchInput } from '../../../store/search/searchState'

const CallsFilterSearch = () => {
  const dispatch = useAppDispatch()
  const searchInput = useAppSelector((state) => state.search.filters.search)

  const handleSetInputSearch = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchInput(e.target.value))
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
        value={searchInput}
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
