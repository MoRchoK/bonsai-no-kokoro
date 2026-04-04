import * as React from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import maketImg from '../assets/mainBonsay.png'

interface BonsaiCard {
  id: string
  label: string
  tag: string
  colorFrom: string
  colorTo: string
}

const bonsaiCards: BonsaiCard[] = [
  { id: 'spring',  label: 'Spring Cherry', tag: 'Collection', colorFrom: '#fce8ec', colorTo: '#f0d4c8' },
  { id: 'pine',    label: 'Ancient Pine',  tag: 'Featured',   colorFrom: '#ddebd0', colorTo: '#c8dfc0' },
  { id: 'juniper', label: 'Green Juniper', tag: 'Community',  colorFrom: '#d8eacc', colorTo: '#cddfc4' },
  { id: 'maple',   label: 'White Birch',   tag: 'Gallery',    colorFrom: '#ece8e0', colorTo: '#ddd8cc' },
]

const Main: React.FC = () => {
  return (
      <Box
          sx={{
              display: 'flex',
              flexDirection: 'column',
              marginTop: 10,
              width: '100%',
              mx: 'auto',
              boxSizing: 'border-box',
              alignItems: 'center',
          }}
      >
          <h1 style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: 'clamp(28px, 5vw, 56px)', fontWeight: 700, lineHeight: 1.05, color: '#1e160e', letterSpacing: '-0.5px', textAlign: 'center', margin: '0 0 24px', padding: '0 16px' }}>
              Bonsai Club — сообщество любителей бонсай
          </h1>
    <Box
      component="main"
      sx={{
        flex: 1,
        display: 'grid',
        gridTemplateColumns: { xs: '1fr', md: '280px 1fr 300px' },
        gap: { xs: 4, md: 0 },
        px: { xs: 2, sm: 3, md: 6 },
        py: { xs: 3, md: 5 },
        maxWidth: 1280,
        width: '100%',
        mx: 'auto',
        boxSizing: 'border-box',
        alignItems: 'center',
      }}
    >
      {/* Left – text block */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: { xs: 'center', md: 'flex-start' },
          textAlign: { xs: 'center', md: 'left' },
          pr: { md: 3 },
          order: { xs: 2, md: 1 },
        }}
      >
        <Typography
          variant="body1"
          sx={{
            color: 'text.secondary',
            mb: 0.8,
              textAlign: "left",
              marginBottom: 2,
            maxWidth: { xs: '100%', md: 240 },
          }}
        >
          Здесь вы делитесь своими деревьями, участвуете в конкурсах и растёте от новичка до мастера вместе с единомышленниками со всего мира.
        </Typography>
        <Button
          variant="outlined"
          sx={{
            mb: 2,
            px: 3,
            py: 1,
            borderColor: 'secondary.main',
            color: 'primary.main',
            fontSize: '12px',
            '&:hover': {
              bgcolor: 'primary.main',
              borderColor: 'primary.main',
              color: '#f7ede2',
            },
          }}
        >
            Присоединится
        </Button>
      </Box>

      {/* Center – featured bonsai */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'center',
          height: { xs: 260, sm: 360, md: 520 },
          px: { md: 2 },
          order: { xs: 1, md: 2 },
        }}
      >
        <Box
          sx={{
            position: 'relative',
            width: '100%',
            height: '100%',
            borderRadius: { xs: 3, md: 4 },
            overflow: 'hidden',
            boxShadow: '0 20px 60px rgba(60,40,20,0.15)',
          }}
        >
          <Box
            component="img"
            src={maketImg}
            alt="Featured Bonsai"
            sx={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: '35% center',
              display: 'block',
            }}
          />
          <Button
            variant="contained"
            sx={{
              position: 'absolute',
              bottom: { xs: 12, md: 20 },
              left: '50%',
              transform: 'translateX(-50%)',
              bgcolor: 'rgba(255,255,255,0.85)',
              color: 'primary.dark',
              fontSize: { xs: '11px', md: '12px' },
              px: { xs: 2, md: 3 },
              py: 1,
              backdropFilter: 'blur(8px)',
              whiteSpace: 'nowrap',
              boxShadow: 'none',
              '&:hover': { bgcolor: 'rgba(255,255,255,0.98)', boxShadow: 'none' },
            }}
          >
              Просмотреть галерею
          </Button>
        </Box>
      </Box>

      {/* Right – bonsai grid (hidden on mobile) */}
      <Box
        sx={{
          pl: { md: 3 },
          order: 3,
          display: { xs: 'none', sm: 'block' },
        }}
      >
        <Grid container spacing={1.5}>
          {bonsaiCards.map((card: BonsaiCard) => (
            <Grid size={6} key={card.id}>
              <Card
                elevation={0}
                sx={{
                  borderRadius: 3,
                  overflow: 'hidden',
                  bgcolor: 'background.paper',
                  cursor: 'pointer',
                  transition: 'transform 0.25s, box-shadow 0.25s',
                  '&:hover': {
                    transform: 'translateY(-3px)',
                    boxShadow: '0 12px 32px rgba(60,40,20,0.15)',
                  },
                }}
              >
                <Box
                  sx={{
                    height: { sm: 80, md: 110 },
                    background: `linear-gradient(160deg, ${card.colorFrom}, ${card.colorTo})`,
                  }}
                />
                <CardContent
                  sx={{
                    p: '10px 12px 12px !important',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  <Typography sx={{ fontSize: '11.5px', fontWeight: 500, color: 'text.primary' }}>
                    {card.label}
                  </Typography>
                  <Typography sx={{ fontSize: '10px', color: 'text.secondary' }}>
                    {card.tag}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
      </Box>
  )
}

export default Main
