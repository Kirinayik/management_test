import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline'
import { Button } from '../buttons.styles'
import { Box } from '@mui/material'

const AddButton = () => {
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
        <Box sx={{ flexBasis: '70%' }}>Добавить заказ</Box>
        <AddCircleOutlineIcon />
      </Box>
    </Button>
  )
}

export default AddButton
