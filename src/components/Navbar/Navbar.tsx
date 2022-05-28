import { Box, List } from '@mui/material'
import logo from '../../img/logo.png'
import { useTheme } from '@emotion/react'
import NavbarItem from './NavbarItem'
import AddButton from '../common/buttons/AddButton/AddButton'
import PayButton from '../common/buttons/PayButton/PayButton'
import { useEffect, useState } from 'react'
import { $api } from '../../http'

const Navbar = () => {
  const { colors } = useTheme()
  const [menu, setMenu] = useState([])

  useEffect(() => {
    ;(async () => {
      try {
        const { data } = await $api.post('partnership/getMenu')
        setMenu(data)
      } catch (e) {
        console.log(e)
      }
    })()
  }, [])

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
        {menu &&
          menu.map((item: any, i: number) => (
            <NavbarItem
              key={i}
              text={item.name}
              submenu={item?.submenu}
              isNew={item.isNew}
              routePath={item.url}
            />
          ))}
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
