import { Box, IconButton } from '@mui/material'
import { useTheme } from '@emotion/react'
import AddIcon from '@mui/icons-material/Add'

const CallsSettingsBalance = () => {
  const { colors } = useTheme()

  return (
    <Box
      sx={{
        padding: '8px 12px',
        borderRadius: '50px',
        minWidth: '150px',
        background: colors.white,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '10px',
      }}
    >
      <Box sx={{ color: colors.header }}>
        Баланс:{' '}
        <Box component={'span'} sx={{ fontWeight: 700, color: colors.primary }}>
          250&#x20bd;
        </Box>
      </Box>
      <IconButton
        sx={{
          width: '24px',
          height: '24px',
          background: colors.accent,
          '&:hover': {
            background: colors['accent-hover'],
          },
          '&:active': {
            background: colors['accent-active'],
          },
        }}
      >
        <AddIcon sx={{ color: colors.white, fontSize: '20px' }} />
      </IconButton>
    </Box>
  )
}

export default CallsSettingsBalance
