import {
  Collapse,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material'
import { NavbarListItem } from './Navbar.styles'
import { useLocation } from 'react-router-dom'
import useMenuIcon from '../../hooks/useMenuIcon'
import { useState } from 'react'
import { IMenu } from '../../types/types'

interface NavbarItemProps {
  item: IMenu
  isSubItem?: boolean
}

const NavbarItem = ({
  item: { submenu, is_new: isNew, url: routePath, name: text },
  isSubItem,
}: NavbarItemProps) => {
  const currentUrl = useLocation().pathname.split('/')[1]
  const icon = useMenuIcon(text)
  const [open, setOpen] = useState(false)

  const handleItemButton = () => {
    if (submenu) {
      if (open) {
        setOpen(false)
      } else {
        setOpen(true)
      }
    }
  }

  return (
    <>
      <NavbarListItem
        isNew={isNew}
        isActive={currentUrl === routePath.split('/')[1]}
        onClick={handleItemButton}
      >
        <ListItemButton
          sx={{ padding: !isSubItem ? '10px 12px' : '10px 12px 10px 30px' }}
        >
          {!isSubItem && (
            <ListItemIcon sx={{ color: 'inherit', minWidth: '36px' }}>
              {icon}
            </ListItemIcon>
          )}
          <ListItemText primary={text} />
        </ListItemButton>
      </NavbarListItem>
      {submenu && (
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {submenu.map((item, i) => (
              <NavbarItem key={i} item={item} isSubItem={true} />
            ))}
          </List>
        </Collapse>
      )}
    </>
  )
}

export default NavbarItem
