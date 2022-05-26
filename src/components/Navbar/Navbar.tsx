import { Box, List } from '@mui/material'
import logo from '../../img/logo.png'
import { useTheme } from '@emotion/react'
import NavbarItem from './NavbarItem'
import CallIcon from '@mui/icons-material/Call'
import MailOutlineIcon from '@mui/icons-material/MailOutline'
import PeopleAltIcon from '@mui/icons-material/PeopleAlt'
import ArticleIcon from '@mui/icons-material/Article'
import SettingsIcon from '@mui/icons-material/Settings'
import AddButton from '../common/buttons/AddButton/AddButton'
import PayButton from '../common/buttons/PayButton/PayButton'

const Navbar = () => {
  const { colors } = useTheme()

  return (
    <Box
      width={'240px'}
      height={'100vh'}
      sx={{ overflowY: 'auto' }}
      bgcolor={colors.night}
      paddingY={'20px'}
    >
      <Box paddingX={'12px'} sx={{ marginBottom: '32px', cursor: 'pointer' }}>
        <img src={logo} alt={''} />
      </Box>
      <List sx={{ marginBottom: '64px' }} disablePadding>
        <NavbarItem
          icon={<MailOutlineIcon />}
          text={'Сообщения'}
          routePath={'messages'}
        />
        <NavbarItem icon={<CallIcon />} text={'Звонки'} routePath={'calls'} />
        <NavbarItem
          icon={<PeopleAltIcon />}
          text={'Контрагенты'}
          routePath={'counterparties'}
        />
        <NavbarItem
          icon={<ArticleIcon />}
          text={'Документы'}
          routePath={'documents'}
        />
        <NavbarItem
          icon={<SettingsIcon />}
          text={'Настройки'}
          routePath={'settings'}
        />
      </List>
      <Box
        sx={{
          padding: '0 12px',
          display: 'flex',
          flexDirection: 'column',
          gap: '30px',
        }}
      >
        <AddButton />
        <PayButton />
      </Box>
    </Box>
  )
}

export default Navbar
