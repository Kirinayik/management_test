import { Avatar, Box, ListItem } from '@mui/material'
import { useTheme } from '@emotion/react'
import InCallIcon from '../../../styles/icons/InCallIcon'
import OutCallIcon from '../../../styles/icons/OutCallIcon'
import CallsAudio from './CallsAudio'
import { formatTime } from '../../../helpers/formatTime'
import { CallsListItemContainer } from '../Calls.styles'
import { FC } from 'react'
import { ICall } from '../../../types/types'
import { useAppSelector } from '../../../store/hooks'

type CallsListItemProps = {
  item: ICall
}

const CallsListItem: FC<CallsListItemProps> = ({
  item: {
    date,
    person_avatar,
    from_number,
    record,
    partnership_id,
    source,
    errors,
    status,
    time,
    to_number,
    in_out,
    lastDay,
    id,
  },
}) => {
  const { colors } = useTheme()
  const dateTime = date.split(' ')[1].slice(0, 5)
  const callStatus = status === 'Дозвонился'
  const isActive = useAppSelector((state) => state.calls.currentCall === id)

  return (
    <>
      {lastDay && (
        <ListItem sx={{ padding: '40px 40px 16px', fontWeight: 700 }}>
          {lastDay}
        </ListItem>
      )}
      <CallsListItemContainer isActive={isActive}>
        <Box
          sx={{
            display: 'flex',
            flexGrow: '1',
            gap: '30px',
            alignItems: 'center',
          }}
        >
          <Box sx={{ flexBasis: '35px', color: 'red' }}>
            {in_out ? (
              <InCallIcon color={!callStatus ? 'inherit' : undefined} />
            ) : (
              <OutCallIcon color={!callStatus ? 'inherit' : undefined} />
            )}
          </Box>
          <Box sx={{ flexBasis: '50px' }}>{dateTime}</Box>
          <Box sx={{ flexBasis: '80px' }}>
            <Avatar
              src={person_avatar}
              alt={''}
              sx={{ width: 32, height: 32 }}
            />
          </Box>
          <Box sx={{ flexBasis: '250px' }}>
            +{in_out ? from_number : to_number}
          </Box>
          <Box
            sx={{
              color: colors.secondary,
              flexBasis: '200px',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              display: '-webkit-box',
              WebkitLineClamp: '3',
              WebkitBoxOrient: 'vertical',
            }}
          >
            {source}
          </Box>
          {
            <Box className={'calls__errors'} sx={{ flexBasis: '180px' }}>
              {callStatus && errors.length > 0 && errors[0]}
            </Box>
          }
          {record && partnership_id && (
            <CallsAudio recordId={record} partnerId={partnership_id} id={id} />
          )}
        </Box>
        {
          <Box
            className={'calls__time'}
            sx={{ flexBasis: '90px', display: 'flex', justifyContent: 'end' }}
          >
            {callStatus && record && formatTime(time)}
          </Box>
        }
      </CallsListItemContainer>
    </>
  )
}

export default CallsListItem
