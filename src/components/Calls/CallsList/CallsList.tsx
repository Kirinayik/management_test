import { Box, List } from '@mui/material'
import { useTheme } from '@emotion/react'
import CallsListHeader from './CallsListHeader'
import CallsListItem from './CallsListItem'
import { useAppSelector } from '../../../store/hooks'

const CallsList = () => {
  const { colors } = useTheme()
  const { list } = useAppSelector((state) => state.calls)

  return (
    <Box
      sx={{
        background: colors.white,
        padding: '20px 0',
        borderRadius: '6px',
        boxShadow: '0px 4px 5px #E9EDF3',
      }}
    >
      <CallsListHeader />
      <List disablePadding>
        {list &&
          list.map((item) => (
            <CallsListItem item={item} key={item.id.toString()} />
          ))}
      </List>
    </Box>
  )
}

export default CallsList
