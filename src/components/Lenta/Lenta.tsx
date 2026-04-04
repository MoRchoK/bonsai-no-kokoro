import * as React from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Chip from '@mui/material/Chip'
import Divider from '@mui/material/Divider'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import NewsCard from './NewsCard'
import { useAppSelector } from '../../store/hooks'

const sectionLabel = (text: string) => (
  <Box sx={{ mb: 2 }}>
    <Typography
      sx={{
        fontSize: '11px',
        fontWeight: 700,
        letterSpacing: '0.1em',
        textTransform: 'uppercase',
        color: '#2d5a3d',
        mb: 0.5,
      }}
    >
      {text}
    </Typography>
    <Divider sx={{ borderColor: '#2d5a3d', borderWidth: 1.5, width: 32 }} />
  </Box>
)

const Lenta: React.FC = () => {
  const { items: newsData, popularArticles, categories } = useAppSelector((state) => state.lenta)
  const hero = newsData[0]
  const secondary = newsData.slice(1, 3)
  const tertiary = newsData.slice(3)

  return (
    <Box
      sx={{
        maxWidth: 1280,
        mx: 'auto',
        width: '100%',
        px: { xs: 2, sm: 3, md: 6 },
        py: { xs: 3, md: 5 },
        boxSizing: 'border-box',
      }}
    >
      {/* Page title */}
      <Typography
        sx={{
          fontFamily: '"Cormorant Garamond", serif',
          fontSize: { xs: '28px', md: '40px' },
          fontWeight: 700,
          color: 'text.primary',
          mb: 4,
          letterSpacing: '-0.5px',
        }}
      >
        Лента новостей бонсай
      </Typography>

      {/* Main grid: hero | center | sidebar */}
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: '1fr 1fr 240px' },
          gap: 3,
          alignItems: 'start',
        }}
      >
        {/* ── Hero card ── */}
        <NewsCard item={hero} variant="hero" />

        {/* ── Center: two stacked sections ── */}
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
          {/* Featured stories top */}
          <Box>
            {sectionLabel('Избранное')}
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
              {secondary.map(item => (
                <NewsCard key={item.id} item={item} variant="compact" />
              ))}
            </Box>
          </Box>

          {/* Featured stories bottom */}
          <Box>
            {sectionLabel('Избранное')}
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
              {tertiary.map(item => (
                <NewsCard key={item.id} item={item} variant="compact" />
              ))}
            </Box>
          </Box>
        </Box>

        {/* ── Sidebar ── */}
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>

          {/* Popular articles */}
          <Box>
            {sectionLabel('Популярные статьи')}
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              {popularArticles.map((title, i) => (
                <Box
                  key={i}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                    cursor: 'pointer',
                    '&:hover p': { color: '#2d5a3d' },
                  }}
                >
                  <Box sx={{ width: 4, height: 4, borderRadius: '50%', bgcolor: '#2d5a3d', flexShrink: 0 }} />
                  <Typography
                    sx={{ fontSize: '12px', color: 'text.secondary', lineHeight: 1.5, transition: 'color 0.2s' }}
                  >
                    {title}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>

          {/* Categories */}
          <Box>
            {sectionLabel('Категории')}
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.8 }}>
              {categories.map(cat => (
                <Chip
                  key={cat}
                  label={cat}
                  size="small"
                  clickable
                  sx={{
                    fontSize: '11px',
                    bgcolor: 'background.paper',
                    color: 'text.secondary',
                    border: '1px solid rgba(196,168,130,0.4)',
                    '&:hover': { bgcolor: '#2d5a3d', color: '#fff', borderColor: '#2d5a3d' },
                  }}
                />
              ))}
            </Box>
          </Box>

          {/* Newsletter */}
          <Box
            sx={{
              bgcolor: '#2d5a3d',
              borderRadius: 3,
              p: 2.5,
              display: 'flex',
              flexDirection: 'column',
              gap: 1.5,
            }}
          >
              <Typography
                  sx={{
                      fontSize: '14px',
                      fontWeight: 700,
                      letterSpacing: '0.1em',
                      textAlign: 'center',
                      color: 'white',
                      mb: 1,
                  }}
              >
                  Рассылка
              </Typography>
            <Typography sx={{ fontSize: '12px', color: 'rgba(255,255,255,0.8)', lineHeight: 1.6 }}>
              Подпишитесь на нашу рассылку и получайте последние новости о бонсай.
            </Typography>
            <TextField
              placeholder="Ваш email"
              size="small"
              fullWidth
              sx={{
                '& .MuiOutlinedInput-root': {
                  bgcolor: 'rgba(255,255,255,0.12)',
                  borderRadius: '8px',
                  fontSize: '12px',
                  color: '#fff',
                  '& fieldset': { borderColor: 'rgba(255,255,255,0.3)' },
                  '&:hover fieldset': { borderColor: 'rgba(255,255,255,0.6)' },
                  '&.Mui-focused fieldset': { borderColor: '#fff' },
                  '& input::placeholder': { color: 'rgba(255,255,255,0.5)', opacity: 1 },
                },
              }}
            />
            <Button
              variant="contained"
              fullWidth
              sx={{
                bgcolor: '#fff',
                color: '#2d5a3d',
                fontWeight: 700,
                fontSize: '11px',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                borderRadius: '8px',
                boxShadow: 'none',
                '&:hover': { bgcolor: 'rgba(255,255,255,0.9)', boxShadow: 'none' },
              }}
            >
              Подписаться
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Lenta
