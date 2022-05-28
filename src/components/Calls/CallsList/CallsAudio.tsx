import { Box, IconButton, Slider } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import PlayArrowIcon from '@mui/icons-material/PlayArrow'
import PauseIcon from '@mui/icons-material/Pause'
import { formatTime } from '../../../helpers/formatTime'
import { useRecordPlayer } from '../../../hooks/useRecordPlayer'

const CallsAudio = ({
  isActive,
  recordId,
  partnerId,
  id,
}: {
  recordId: string
  partnerId: string
  isActive: boolean
  id: number
}) => {
  const {
    duration,
    handleSetDuration,
    handleSliderChange,
    sliderValue,
    handleSetIsPlay,
    handleClosePlay,
    handleOnEnded,
    handleGetCurrentTime,
    audioRef,
    isPlay,
    recordUrl,
  } = useRecordPlayer(recordId, partnerId, id)

  const valuetext = (value: number) => {
    return formatTime(value)
  }

  return (
    <>
      <audio
        onEnded={handleOnEnded}
        src={recordUrl}
        ref={audioRef}
        onTimeUpdate={handleGetCurrentTime}
        onLoadedData={handleSetDuration}
      />
      <Box
        onClick={(e: any) => e.stopPropagation()}
        className={!isPlay ? 'calls__audio' : ''}
        sx={{
          position: 'absolute',
          top: '50%',
          right: '40px',
          transform: 'translateY(-50%)',
        }}
      >
        <Box
          sx={{
            gap: '15px',
            width: '300px',
            height: '48px',
            borderRadius: '50px',
            background: '#EAF0FA',
            display: 'flex',
            alignItems: 'center',
            padding: '0 57px 0 20px',
            position: 'relative',
          }}
        >
          <Box>{formatTime(duration)}</Box>
          <IconButton
            onClick={handleSetIsPlay}
            disableRipple
            sx={{
              background: '#fff',
              width: '24px',
              height: '24px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            {!isPlay ? (
              <PlayArrowIcon sx={{ fontSize: '15px' }} />
            ) : (
              <PauseIcon sx={{ fontSize: '15px' }} />
            )}
          </IconButton>
          <Slider
            valueLabelFormat={valuetext}
            valueLabelDisplay="auto"
            value={sliderValue}
            onChange={handleSliderChange}
            max={duration}
            step={0.1}
            size="small"
            sx={{ width: '160px' }}
            disabled={!isActive}
          />
          {isPlay && (
            <IconButton
              onClick={handleClosePlay}
              disableRipple
              sx={{
                position: 'absolute',
                top: '50%',
                right: '10px',
                transform: 'translateY(-50%)',
              }}
            >
              <CloseIcon />
            </IconButton>
          )}
        </Box>
      </Box>
    </>
  )
}

export default CallsAudio
