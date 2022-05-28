import { Collapse, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import { NavbarListItem } from './Navbar.styles'
import { useLocation } from 'react-router-dom'
import useMenuIcon from '../../hooks/useMenuIcon'
import { useState } from 'react'

const NavbarItem = ({
  text,
  routePath,
  submenu,
  isSubItem,
  isNew,
}: {
  text: string
  submenu: any | null
  isSubItem?: boolean
  isNew: boolean
  routePath: string
}) => {
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
            {submenu.map((item: any, i: number) => (
              <NavbarItem
                isNew={item.isNew}
                key={i}
                text={item.name}
                submenu={null}
                routePath={item.url}
                isSubItem={true}
              />
            ))}
          </List>
        </Collapse>
      )}
    </>
  )
}

export default NavbarItem
