import * as React from 'react'
import type { UserProfile } from '../../store/slices/usersSlice'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Chip from '@mui/material/Chip'
import Divider from '@mui/material/Divider'
import Typography from '@mui/material/Typography'
import PlaceIcon from '@mui/icons-material/Place'

interface Props {
  user: UserProfile
}

const UserMiniCard: React.FC<Props> = ({ user }) => (
  <Box
    sx={{
      bgcolor: 'background.paper',
      borderRadius: 3,
      border: '1px solid rgba(196,168,130,0.25)',
      overflow: 'hidden',
      transition: 'box-shadow 0.2s',
      '&:hover': { boxShadow: '0 4px 20px rgba(45,90,61,0.12)' },
    }}
  >
    {/* Header strip */}
    <Box
      sx={{
        bgcolor: '#2d5a3d',
        px: 2,
        pt: 2,
        pb: 3.5,
        position: 'relative',
      }}
    >
      {/* Avatar */}
      <Box
        sx={{
          width: 56,
          height: 56,
          borderRadius: '50%',
          bgcolor: 'rgba(255,255,255,0.2)',
          border: '2px solid rgba(255,255,255,0.5)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          mx: 'auto',
        }}
      >
        <Typography
          sx={{
            fontFamily: '"Cormorant Garamond", serif',
            fontSize: '22px',
            fontWeight: 700,
            color: '#fff',
          }}
        >
          {user.avatar}
        </Typography>
      </Box>
    </Box>

    {/* Body */}
    <Box sx={{ px: 2, pb: 2, mt: -1.5 }}>
      {/* Name + location */}
      <Box sx={{ textAlign: 'center', mb: 1.5 }}>
        <Typography
          sx={{
            fontFamily: '"Cormorant Garamond", serif',
            fontSize: '17px',
            fontWeight: 700,
            color: 'text.primary',
            lineHeight: 1.2,
          }}
        >
          {user.name}
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 0.3, mt: 0.3 }}>
          <PlaceIcon sx={{ fontSize: 12, color: 'text.disabled' }} />
          <Typography sx={{ fontSize: '11px', color: 'text.disabled' }}>{user.location}</Typography>
        </Box>
      </Box>

      <Divider sx={{ borderColor: 'rgba(196,168,130,0.3)', mb: 1.5 }} />

      {/* Stats row */}
      <Box sx={{ display: 'flex', justifyContent: 'space-around', mb: 1.5 }}>
        {user.stats.map((stat) => (
          <Box key={stat.label} sx={{ textAlign: 'center' }}>
            <Typography sx={{ fontSize: '15px', fontWeight: 700, color: 'text.primary', lineHeight: 1 }}>
              {stat.value}
            </Typography>
            <Typography sx={{ fontSize: '10px', color: 'text.disabled', mt: 0.3 }}>
              {stat.label}
            </Typography>
          </Box>
        ))}
      </Box>

      <Divider sx={{ borderColor: 'rgba(196,168,130,0.3)', mb: 1.5 }} />

      {/* Mini gallery */}
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: 0.5,
          mb: 1.5,
        }}
      >
        {user.gallery.map((img, i) => (
          <Box
            key={i}
            component="img"
            src={img}
            alt=""
            sx={{
              width: '100%',
              aspectRatio: '1',
              objectFit: 'cover',
              borderRadius: 1,
              display: 'block',
            }}
          />
        ))}
      </Box>

      {/* Specialization chips */}
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, mb: 1.5 }}>
        {user.specialization.map((tag) => (
          <Chip
            key={tag}
            label={tag}
            size="small"
            sx={{
              fontSize: '10px',
              height: 18,
              bgcolor: 'rgba(45,90,61,0.08)',
              color: '#2d5a3d',
              border: '1px solid rgba(45,90,61,0.2)',
            }}
          />
        ))}
      </Box>

      {/* View profile button */}
      <Button
        variant="outlined"
        fullWidth
        size="small"
        sx={{
          borderColor: '#2d5a3d',
          color: '#2d5a3d',
          fontSize: '12px',
          fontWeight: 600,
          textTransform: 'none',
          borderRadius: '50px',
          '&:hover': { bgcolor: '#2d5a3d', color: '#fff', borderColor: '#2d5a3d' },
        }}
      >
        Посмотреть профиль
      </Button>
    </Box>
  </Box>
)

export default UserMiniCard
