import * as React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Chip from '@mui/material/Chip'
import Button from '@mui/material/Button'
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline'
import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined'
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined'
import { type Contest } from '../../store/slices/contestsSlice'

interface Props {
  contest: Contest
  featured?: boolean
}

const ContestCard: React.FC<Props> = ({ contest, featured = false }) => {
  return (
    <Box
      sx={{
        bgcolor: 'background.paper',
        borderRadius: 3,
        border: '1px solid rgba(196,168,130,0.25)',
        overflow: 'hidden',
        cursor: 'pointer',
        transition: 'box-shadow 0.2s, transform 0.2s',
        '&:hover': {
          boxShadow: '0 4px 24px rgba(45,90,61,0.13)',
          transform: 'translateY(-2px)',
        },
        display: 'flex',
        flexDirection: featured ? { xs: 'column', sm: 'row' } : 'column',
        height: '100%',
      }}
    >
      <Box
        component="img"
        src={contest.image}
        alt={contest.title}
        sx={{
          width: featured ? { xs: '100%', sm: '45%' } : '100%',
          height: featured ? { xs: 200, sm: 'auto' } : 160,
          objectFit: 'cover',
          flexShrink: 0,
          display: 'block',
        }}
      />

      <Box sx={{ p: featured ? 3 : 2, display: 'flex', flexDirection: 'column', gap: 1, flex: 1 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, flexWrap: 'wrap' }}>
          <Chip
            label={contest.category}
            size="small"
            sx={{
              fontSize: '10px',
              height: 20,
              bgcolor: 'rgba(45,90,61,0.1)',
              color: '#2d5a3d',
              fontWeight: 600,
            }}
          />
        </Box>

        <Typography
          sx={{
            fontFamily: '"Cormorant Garamond", serif',
            fontSize: featured ? { xs: '20px', sm: '24px' } : '15px',
            fontWeight: 700,
            color: 'text.primary',
            lineHeight: 1.25,
          }}
        >
          {contest.title}
        </Typography>

        <Typography
          sx={{
            fontSize: featured ? '13px' : '12px',
            color: 'text.secondary',
            lineHeight: 1.6,
            display: '-webkit-box',
            WebkitLineClamp: featured ? 3 : 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
          }}
        >
          {contest.description}
        </Typography>

        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, mt: 'auto', pt: 1 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
            <CalendarTodayOutlinedIcon sx={{ fontSize: 13, color: 'text.disabled' }} />
            <Typography sx={{ fontSize: '11px', color: 'text.disabled' }}>до {contest.deadline}</Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
            <EmojiEventsOutlinedIcon sx={{ fontSize: 13, color: '#c4a882' }} />
            <Typography sx={{ fontSize: '11px', color: '#c4a882', fontWeight: 600 }}>{contest.prize}</Typography>
          </Box>
          {contest.participants > 0 && (
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
              <PeopleOutlineIcon sx={{ fontSize: 13, color: 'text.disabled' }} />
              <Typography sx={{ fontSize: '11px', color: 'text.disabled' }}>{contest.participants} участников</Typography>
            </Box>
          )}
        </Box>

        {featured && (
          <Button
            variant="contained"
            sx={{
              alignSelf: 'flex-start',
              mt: 1,
              bgcolor: '#2d5a3d',
              color: '#fff',
              fontWeight: 600,
              fontSize: '12px',
              textTransform: 'none',
              borderRadius: '50px',
              px: 3,
              boxShadow: 'none',
              '&:hover': { bgcolor: '#244d34', boxShadow: 'none' },
            }}
          >
            Участвовать
          </Button>
        )}
      </Box>
    </Box>
  )
}

export default ContestCard
