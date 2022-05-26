import { Button } from '../buttons.styles'
import InfoIcon from '@mui/icons-material/Info'
import { Box } from '@mui/material'

const PayButton = () => {
  return (
    <Button>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '100%',
        }}
      >
        <Box sx={{ flexBasis: '70%' }}>Оплата</Box>
        <InfoIcon />
      </Box>
    </Button>
  )
}

export default PayButton
