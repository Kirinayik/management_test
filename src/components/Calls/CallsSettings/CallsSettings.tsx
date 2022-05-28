import { Box } from '@mui/material'
import CallsSettingsBalance from './CallsSettingsBalance'
import CallsSettingDate from './CallsSettingDate'

const CallsSettings = () => {
  return (
    <Box sx={{ padding: '20px 0', display: 'flex', justifyContent: 'end' }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: '50px' }}>
        <CallsSettingsBalance />
        <CallsSettingDate />
      </Box>
    </Box>
  )
}

export default CallsSettings
