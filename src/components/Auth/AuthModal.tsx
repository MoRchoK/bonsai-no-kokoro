import * as React from 'react'
import { useState } from 'react'
import type { FormEvent } from 'react'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { closeAuthModal, setModalTab, login } from '../../store/slices/authSlice'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import Divider from '@mui/material/Divider'
import IconButton from '@mui/material/IconButton'
import Tab from '@mui/material/Tab'
import Tabs from '@mui/material/Tabs'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import CloseIcon from '@mui/icons-material/Close'

const inputSx = {
  '& .MuiOutlinedInput-root': {
    borderRadius: '10px',
    '& fieldset': { borderColor: 'rgba(196,168,130,0.5)' },
    '&:hover fieldset': { borderColor: 'secondary.main' },
    '&.Mui-focused fieldset': { borderColor: 'primary.main' },
  },
  '& .MuiInputLabel-root.Mui-focused': { color: 'primary.main' },
}

const AuthModal: React.FC = () => {
  const dispatch = useAppDispatch()
  const { modalOpen, modalTab } = useAppSelector((state) => state.auth)

  const [loginEmail, setLoginEmail] = useState<string>('')
  const [loginPassword, setLoginPassword] = useState<string>('')
  const [regName, setRegName] = useState<string>('')
  const [regEmail, setRegEmail] = useState<string>('')
  const [regPassword, setRegPassword] = useState<string>('')
  const [error, setError] = useState<string>('')

  const handleClose = (): void => {
    dispatch(closeAuthModal())
    setError('')
  }

  const handleTabChange = (_: React.SyntheticEvent, value: 'login' | 'register'): void => {
    dispatch(setModalTab(value))
    setError('')
  }

  const handleLogin = (e: FormEvent): void => {
    e.preventDefault()
    if (!loginEmail || !loginPassword) {
      setError('Заполните все поля')
      return
    }
    dispatch(login({ id: '1', name: loginEmail.split('@')[0], email: loginEmail }))
  }

  const handleRegister = (e: FormEvent): void => {
    e.preventDefault()
    if (!regName || !regEmail || !regPassword) {
      setError('Заполните все поля')
      return
    }
    if (regPassword.length < 6) {
      setError('Пароль должен быть не менее 6 символов')
      return
    }
    dispatch(login({ id: '1', name: regName, email: regEmail }))
  }

  return (
    <Dialog
      open={modalOpen}
      onClose={handleClose}
      maxWidth="xs"
      fullWidth
      PaperProps={{
        sx: {
          borderRadius: 4,
          bgcolor: 'background.default',
          boxShadow: '0 24px 64px rgba(60,40,20,0.18)',
        },
      }}
    >
      <DialogContent sx={{ p: 4 }}>
        {/* Header */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
          <Typography
            sx={{
              fontFamily: '"Cormorant Garamond", serif',
              fontSize: '22px',
              fontWeight: 700,
              color: 'text.primary',
            }}
          >
            Bonsai Gallery
          </Typography>
          <IconButton onClick={handleClose} size="small" sx={{ color: 'text.secondary' }}>
            <CloseIcon fontSize="small" />
          </IconButton>
        </Box>

        {/* Tabs */}
        <Tabs
          value={modalTab}
          onChange={handleTabChange}
          sx={{
            mb: 3,
            '& .MuiTab-root': { textTransform: 'none', fontSize: '13px', color: 'text.secondary' },
            '& .Mui-selected': { color: 'primary.main !important', fontWeight: 600 },
            '& .MuiTabs-indicator': { bgcolor: 'primary.main' },
          }}
        >
          <Tab label="Войти" value="login" />
          <Tab label="Регистрация" value="register" />
        </Tabs>

        <Divider sx={{ borderColor: 'rgba(196,168,130,0.3)', mb: 3 }} />

        {/* Login form */}
        {modalTab === 'login' && (
          <Box component="form" onSubmit={handleLogin} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <TextField
              label="Email"
              type="email"
              value={loginEmail}
              onChange={(e) => setLoginEmail(e.target.value)}
              fullWidth
              size="small"
              sx={inputSx}
            />
            <TextField
              label="Пароль"
              type="password"
              value={loginPassword}
              onChange={(e) => setLoginPassword(e.target.value)}
              fullWidth
              size="small"
              sx={inputSx}
            />
            {error && (
              <Typography sx={{ fontSize: '12px', color: 'error.main' }}>{error}</Typography>
            )}
            <Button
              type="submit"
              variant="contained"
              fullWidth
              sx={{
                mt: 1,
                py: 1.2,
                bgcolor: 'primary.main',
                borderRadius: '50px',
                textTransform: 'none',
                fontSize: '13px',
                fontWeight: 500,
                boxShadow: 'none',
                '&:hover': { bgcolor: 'primary.dark', boxShadow: 'none' },
              }}
            >
              Войти
            </Button>
          </Box>
        )}

        {/* Register form */}
        {modalTab === 'register' && (
          <Box component="form" onSubmit={handleRegister} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <TextField
              label="Имя"
              value={regName}
              onChange={(e) => setRegName(e.target.value)}
              fullWidth
              size="small"
              sx={inputSx}
            />
            <TextField
              label="Email"
              type="email"
              value={regEmail}
              onChange={(e) => setRegEmail(e.target.value)}
              fullWidth
              size="small"
              sx={inputSx}
            />
            <TextField
              label="Пароль"
              type="password"
              value={regPassword}
              onChange={(e) => setRegPassword(e.target.value)}
              fullWidth
              size="small"
              sx={inputSx}
            />
            {error && (
              <Typography sx={{ fontSize: '12px', color: 'error.main' }}>{error}</Typography>
            )}
            <Button
              type="submit"
              variant="contained"
              fullWidth
              sx={{
                mt: 1,
                py: 1.2,
                bgcolor: 'primary.main',
                borderRadius: '50px',
                textTransform: 'none',
                fontSize: '13px',
                fontWeight: 500,
                boxShadow: 'none',
                '&:hover': { bgcolor: 'primary.dark', boxShadow: 'none' },
              }}
            >
              Создать аккаунт
            </Button>
          </Box>
        )}
      </DialogContent>
    </Dialog>
  )
}

export default AuthModal
