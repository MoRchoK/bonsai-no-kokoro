import * as React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'
import { useAppSelector } from '../../store/hooks'
import ContestCard from './ContestCard'

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

const Contests: React.FC = () => {
  const { contests, participateSteps } = useAppSelector((state) => state.contests)

  const active = contests.filter(c => c.status === 'active')
  const upcoming = contests.filter(c => c.status === 'upcoming')
  const featured = active[0]
  const restActive = active.slice(1)

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
      {/* Page header */}
      <Box sx={{ mb: 4 }}>
        <Typography
          sx={{
            fontFamily: '"Cormorant Garamond", serif',
            fontSize: { xs: '28px', md: '40px' },
            fontWeight: 700,
            color: 'text.primary',
            mb: 0.5,
            letterSpacing: '-0.5px',
          }}
        >
          Конкурсы
        </Typography>
        <Typography sx={{ fontSize: '14px', color: 'text.secondary' }}>
          Участвуйте в конкурсах бонсай, демонстрируйте своё мастерство и побеждайте
        </Typography>
      </Box>

      {/* Content grid: main | sidebar */}
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: '1fr 260px' },
          gap: 4,
          alignItems: 'start',
        }}
      >
        {/* ── Main content ── */}
        <Box>
          {/* Featured active contest */}
          {featured && (
            <Box sx={{ mb: 4 }}>
              {sectionLabel('Активный конкурс')}
              <ContestCard contest={featured} featured />
            </Box>
          )}

          {/* Rest of active contests */}
          {restActive.length > 0 && (
            <Box>
              {sectionLabel('Активные конкурсы')}
              <Box
                sx={{
                  display: 'grid',
                  gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' },
                  gap: 2,
                }}
              >
                {restActive.map(contest => (
                  <ContestCard key={contest.id} contest={contest} />
                ))}
              </Box>
            </Box>
          )}
        </Box>

        {/* ── Sidebar ── */}
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
          {/* Upcoming contests */}
          {upcoming.length > 0 && (
            <Box>
              {sectionLabel('Предстоящие конкурсы')}
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                {upcoming.map(contest => (
                  <Box
                    key={contest.id}
                    sx={{
                      display: 'flex',
                      gap: 1.5,
                      cursor: 'pointer',
                      borderRadius: 2,
                      p: 1,
                      transition: 'background 0.15s',
                      '&:hover': { bgcolor: 'rgba(45,90,61,0.05)' },
                    }}
                  >
                    <Box
                      component="img"
                      src={contest.image}
                      alt={contest.title}
                      sx={{ width: 60, height: 60, objectFit: 'cover', borderRadius: 1.5, flexShrink: 0 }}
                    />
                    <Box>
                      <Typography
                        sx={{ fontSize: '12px', fontWeight: 600, color: 'text.primary', lineHeight: 1.3, mb: 0.4 }}
                      >
                        {contest.title}
                      </Typography>
                      <Typography sx={{ fontSize: '11px', color: 'text.disabled' }}>
                        до {contest.deadline}
                      </Typography>
                      <Typography sx={{ fontSize: '11px', color: '#c4a882', fontWeight: 600 }}>
                        {contest.prize}
                      </Typography>
                    </Box>
                  </Box>
                ))}
              </Box>
            </Box>
          )}

          {/* How to participate */}
          <Box
            sx={{
              bgcolor: '#2d5a3d',
              borderRadius: 3,
              p: 2.5,
            }}
          >

              <Typography
                  sx={{
                      fontSize: '14px',
                      fontWeight: 700,
                      letterSpacing: '0.1em',
                      textAlign: 'center',
                      color: 'white',
                      mb: 2,
                  }}
              >
                  Как участвовать
              </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.75 }}>
              {participateSteps.map(item => (
                <Box key={item.step} sx={{ display: 'flex', gap: 1.25 }}>
                  <Box
                    sx={{
                      width: 24,
                      height: 24,
                      borderRadius: '50%',
                      bgcolor: 'rgba(255,255,255,0.15)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <Typography sx={{ fontSize: '11px', fontWeight: 700, color: '#fff' }}>
                      {item.step}
                    </Typography>
                  </Box>
                  <Box>
                    <Typography sx={{ fontSize: '12px', fontWeight: 700, color: '#fff', lineHeight: 1.3 }}>
                      {item.title}
                    </Typography>
                    <Typography sx={{ fontSize: '11px', color: 'rgba(255,255,255,0.65)', lineHeight: 1.5 }}>
                      {item.description}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Contests
