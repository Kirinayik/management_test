import { Avatar, Box } from '@mui/material'
import { useTheme } from '@emotion/react'
import InCallIcon from '../../../styles/icons/InCallIcon'
import OutCallIcon from '../../../styles/icons/OutCallIcon'
import CallsAudio from './CallsAudio'
import { useAppDispatch, useAppSelector } from '../../../store/hooks'
import { setCurrentCall } from '../../../store/calls/callsState'
import { formatTime } from '../../../helpers/formatTime'
import { CallsListItemContainer } from '../Calls.styles'

const CallsListItem = ({
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
    id,
  },
}: {
  item: any
}) => {
  const dispatch = useAppDispatch()
  const { currentCall } = useAppSelector((state) => state.calls)
  const { colors } = useTheme()
  const isActive = currentCall === id
  const dateTime = date.split(' ')[1].slice(0, 5)
  const callStatus = status === 'Дозвонился'
  const handleSetIsActive = () => {
    if (isActive) {
      dispatch(setCurrentCall(0))
    } else {
      dispatch(setCurrentCall(id))
    }
  }

  return (
    <CallsListItemContainer isActive={isActive} onClick={handleSetIsActive}>
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
          <Avatar src={person_avatar} alt={''} sx={{ width: 32, height: 32 }} />
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
          <CallsAudio
            id={id}
            isActive={isActive}
            recordId={record}
            partnerId={partnership_id}
          />
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
  )
}

export default CallsListItem
