import { Box } from '@mui/material'
import { useTheme } from '@emotion/react'

const CallsListHeader = () => {
  const { colors } = useTheme()

  return (
    <Box
      sx={{
        fontSize: '14px',
        color: colors.header,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottom: `1px solid rgba(212, 223, 243, 0.5)`,
        padding: '15px 40px',
        gap: '30px',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexGrow: '1',
          gap: '30px',
          alignItems: 'center',
        }}
      >
        <Box sx={{ flexBasis: '35px' }}>Тип</Box>
        <Box sx={{ flexBasis: '50px' }}>Время</Box>
        <Box sx={{ flexBasis: '80px' }}>Сотрудник</Box>
        <Box sx={{ flexBasis: '250px' }}>Звонок</Box>
        <Box sx={{ flexBasis: '200px' }}>Источник</Box>
        <Box sx={{ flexBasis: '150px' }}>Оценка</Box>
      </Box>
      <Box sx={{ flexBasis: '90px' }}>Длительность</Box>
    </Box>
  )
}

export default CallsListHeader
