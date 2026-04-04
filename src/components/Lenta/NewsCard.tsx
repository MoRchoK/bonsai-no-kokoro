import * as React from 'react'
import type { NewsItem } from '../../store/slices/lentaSlice'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Chip from '@mui/material/Chip'
import Typography from '@mui/material/Typography'

interface NewsCardProps {
  item: NewsItem
  variant: 'hero' | 'compact'
}

const NewsCard: React.FC<NewsCardProps> = ({ item, variant }) => {
  if (variant === 'hero') {
    return (
      <Box
        sx={{
          borderRadius: 3,
          overflow: 'hidden',
          bgcolor: 'background.paper',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          cursor: 'pointer',
          transition: 'box-shadow 0.25s',
          '&:hover': { boxShadow: '0 12px 40px rgba(60,40,20,0.15)' },
        }}
      >
        <Box
          component="img"
          src={item.image}
          alt={item.title}
          sx={{ width: '100%', height: 260, objectFit: 'cover', display: 'block' }}
        />
        <Box sx={{ p: 3, display: 'flex', flexDirection: 'column', flex: 1 }}>
          <Chip
            label="FEATURED STORIES"
            size="small"
            sx={{
              alignSelf: 'flex-start',
              mb: 1.5,
              bgcolor: '#2d5a3d',
              color: '#fff',
              fontSize: '10px',
              fontWeight: 600,
              letterSpacing: '0.08em',
              height: 22,
            }}
          />
          <Typography
            sx={{
              fontFamily: '"Cormorant Garamond", serif',
              fontSize: '22px',
              fontWeight: 700,
              color: 'text.primary',
              lineHeight: 1.25,
              mb: 1.5,
            }}
          >
            {item.title}
          </Typography>
          <Typography sx={{ fontSize: '12.5px', color: 'text.secondary', lineHeight: 1.7, mb: 2, flex: 1 }}>
            {item.excerpt}
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <Typography sx={{ fontSize: '11px', color: '#b8a898' }}>{item.date}</Typography>
            <Button
              size="small"
              variant="contained"
              sx={{
                bgcolor: '#2d5a3d',
                color: '#fff',
                fontSize: '11px',
                fontWeight: 600,
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                borderRadius: '4px',
                px: 2,
                py: 0.6,
                boxShadow: 'none',
                '&:hover': { bgcolor: '#1e4030', boxShadow: 'none' },
              }}
            >
              Читать далее
            </Button>
          </Box>
        </Box>
      </Box>
    )
  }

  return (
    <Box
      sx={{
        display: 'flex',
        gap: 1.5,
        borderRadius: 2,
        overflow: 'hidden',
        bgcolor: 'background.paper',
        p: 1.5,
        cursor: 'pointer',
        transition: 'box-shadow 0.2s',
        '&:hover': { boxShadow: '0 4px 16px rgba(60,40,20,0.1)' },
      }}
    >
      <Box
        component="img"
        src={item.image}
        alt={item.title}
        sx={{ width: 80, height: 80, objectFit: 'cover', borderRadius: 1.5, flexShrink: 0 }}
      />
      <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 0.5 }}>
        <Chip
          label={item.category}
          size="small"
          sx={{
            alignSelf: 'flex-start',
            bgcolor: 'rgba(45,90,61,0.1)',
            color: '#2d5a3d',
            fontSize: '9px',
            fontWeight: 600,
            letterSpacing: '0.06em',
            height: 18,
          }}
        />
        <Typography
          sx={{
            fontFamily: '"Cormorant Garamond", serif',
            fontSize: '14px',
            fontWeight: 600,
            color: 'text.primary',
            lineHeight: 1.3,
          }}
        >
          {item.title}
        </Typography>
        <Typography sx={{ fontSize: '10.5px', color: '#b8a898' }}>{item.date}</Typography>
      </Box>
    </Box>
  )
}

export default NewsCard
