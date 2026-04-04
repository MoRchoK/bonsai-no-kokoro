import { useState } from 'react'
import { NavLink as RouterNavLink } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import { openAuthModal, logout } from '../store/slices/authSlice'
import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import Drawer from '@mui/material/Drawer'
import IconButton from '@mui/material/IconButton'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'

interface NavRoute {
  label: string
  path: string
}

const navRoutes: NavRoute[] = [
  { label: 'Лента',       path: '/lenta' },
  { label: 'Конкурсы',   path: '/contests' },
  { label: 'База знаний', path: '/knowledge' },
  { label: 'Сообщество', path: '/community' },
]

const navLinkSx = {
  fontSize: '13px',
  letterSpacing: '0.02em',
  textDecoration: 'none',
  position: 'relative' as const,
  transition: 'color 0.2s',
  color: 'var(--nav-color, #6b6b6b)',
  fontWeight: 400,
}

interface NavItemProps {
  route: NavRoute
  onClick?: () => void
}

const NavItem: React.FC<NavItemProps> = ({ route, onClick }) => (
  <RouterNavLink
    to={route.path}
    onClick={onClick}
    style={({ isActive }) => ({
      ...navLinkSx,
      fontWeight: isActive ? 600 : 400,
      color: isActive ? '#2d5a3d' : '#6b6b6b',
    })}
  >
    {({ isActive }) => (
      <Box sx={{ position: 'relative', display: 'inline-block' }}>
        {route.label}
        {isActive && (
          <Box
            sx={{
              position: 'absolute',
              bottom: -4,
              left: 0,
              right: 0,
              height: '1.5px',
              bgcolor: 'secondary.main',
              borderRadius: '2px',
            }}
          />
        )}
      </Box>
    )}
  </RouterNavLink>
)

const Header: React.FC = () => {
  const dispatch = useAppDispatch()
  const { isAuthenticated, user } = useAppSelector((state) => state.auth)
  const [drawerOpen, setDrawerOpen] = useState(false)

  return (
    <AppBar position="static" elevation={0} sx={{ bgcolor: 'background.default' }}>
      <Toolbar sx={{ px: { xs: 2, md: 6 }, py: 1.5, justifyContent: 'space-between' }}>

        {/* Logo */}
        <RouterNavLink to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 10 }}>
          <Box sx={{ width: 36, height: 36, flexShrink: 0 }}>
            <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" width="36" height="36">
              <circle cx="20" cy="20" r="19" stroke="#5c4a3a" strokeWidth="1.2" />
              <path d="M20 32 C20 32 12 24 12 18 C12 13 15.5 10 20 10 C24.5 10 28 13 28 18 C28 24 20 32 20 32Z" fill="#8b7355" opacity="0.3" />
              <path d="M20 28 C20 28 14 22 14 17 C14 13.5 16.5 11.5 20 11.5 C23.5 11.5 26 13.5 26 17 C26 22 20 28 20 28Z" stroke="#5c4a3a" strokeWidth="0.8" fill="none" />
              <line x1="20" y1="28" x2="20" y2="34" stroke="#5c4a3a" strokeWidth="1" />
              <path d="M16 34 Q20 33 24 34" stroke="#5c4a3a" strokeWidth="0.8" fill="none" />
            </svg>
          </Box>
          <Typography
            sx={{
              fontFamily: '"Cormorant Garamond", serif',
              fontSize: '15px',
              fontWeight: 500,
              color: 'primary.main',
              letterSpacing: '0.05em',
            }}
          >
            Bonsai Gallery
          </Typography>
        </RouterNavLink>

        {/* Desktop nav */}
        <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 4 }}>
          {navRoutes.map(route => (
            <NavItem key={route.path} route={route} />
          ))}

          {isAuthenticated ? (
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
              <AccountCircleIcon sx={{ color: 'primary.main', fontSize: 20 }} />
              <Typography sx={{ fontSize: '13px', color: 'primary.main', fontWeight: 500 }}>
                {user?.name}
              </Typography>
              <Button
                onClick={() => dispatch(logout())}
                size="small"
                sx={{
                  fontSize: '12px',
                  color: 'text.secondary',
                  textTransform: 'none',
                  minWidth: 0,
                  p: 0,
                  '&:hover': { color: 'primary.dark', bgcolor: 'transparent' },
                }}
              >
                Выйти
              </Button>
            </Box>
          ) : (
            <Button
              onClick={() => dispatch(openAuthModal('login'))}
              variant="outlined"
              size="small"
              sx={{
                fontSize: '13px',
                fontWeight: 500,
                color: 'primary.main',
                borderColor: 'secondary.main',
                borderRadius: '50px',
                px: 2.5,
                py: 0.6,
                letterSpacing: '0.02em',
                textTransform: 'none',
                transition: 'all 0.2s',
                '&:hover': {
                  bgcolor: 'primary.main',
                  borderColor: 'primary.main',
                  color: '#f7ede2',
                },
              }}
            >
              Войти | Регистрация
            </Button>
          )}
        </Box>

        {/* Mobile burger */}
        <IconButton
          onClick={() => setDrawerOpen(true)}
          sx={{ display: { xs: 'flex', md: 'none' }, color: 'primary.main' }}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>

      {/* Mobile drawer */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        PaperProps={{
          sx: { width: 260, bgcolor: 'background.default', px: 2, py: 2 },
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 1 }}>
          <IconButton onClick={() => setDrawerOpen(false)} sx={{ color: 'primary.main' }}>
            <CloseIcon />
          </IconButton>
        </Box>
        <Divider sx={{ borderColor: 'rgba(196,168,130,0.3)', mb: 2 }} />
        <List disablePadding>
          {navRoutes.map(route => (
            <ListItem key={route.path} sx={{ px: 0, py: 0.8 }}>
              <NavItem route={route} onClick={() => setDrawerOpen(false)} />
            </ListItem>
          ))}
        </List>
        <Divider sx={{ borderColor: 'rgba(196,168,130,0.3)', my: 2 }} />
        {isAuthenticated ? (
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <AccountCircleIcon sx={{ color: 'primary.main', fontSize: 18 }} />
            <Typography sx={{ fontSize: '13px', color: 'primary.main', flex: 1 }}>{user?.name}</Typography>
            <Button
              onClick={() => { dispatch(logout()); setDrawerOpen(false) }}
              size="small"
              sx={{ fontSize: '12px', color: 'text.secondary', textTransform: 'none', minWidth: 0 }}
            >
              Выйти
            </Button>
          </Box>
        ) : (
          <Button
            onClick={() => { dispatch(openAuthModal('login')); setDrawerOpen(false) }}
            variant="outlined"
            fullWidth
            sx={{
              borderColor: 'secondary.main',
              color: 'primary.main',
              borderRadius: '50px',
              textTransform: 'none',
              fontSize: '13px',
            }}
          >
            Войти | Регистрация
          </Button>
        )}
      </Drawer>
    </AppBar>
  )
}

export default Header
