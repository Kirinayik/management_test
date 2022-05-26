import { ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import { NavbarListItem } from './Navbar.styles'
import { ReactJSXElement } from '@emotion/react/types/jsx-namespace'
import { useLocation } from 'react-router-dom'

const NavbarItem = ({
  text,
  icon,
  routePath,
}: {
  text: string
  icon: ReactJSXElement
  routePath: string
}) => {
  const currentUrl = useLocation().pathname.split('/')[1]

  return (
    <NavbarListItem isActive={currentUrl === routePath}>
      <ListItemButton sx={{ padding: '10px 12px' }}>
        <ListItemIcon sx={{ color: 'inherit', minWidth: '36px' }}>
          {icon}
        </ListItemIcon>
        <ListItemText primary={text} />
      </ListItemButton>
    </NavbarListItem>
  )
}

export default NavbarItem
