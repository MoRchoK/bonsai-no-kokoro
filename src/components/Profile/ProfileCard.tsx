import * as React from 'react'
import type { ProfileUpdate, FeaturedWork, BlogPost } from '../../store/slices/profileSlice'
import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip'
import Typography from '@mui/material/Typography'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline'

interface UpdateCardProps {
  item: ProfileUpdate
  index: number
}

export const UpdateCard: React.FC<UpdateCardProps> = ({ item, index }) => (
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
      sx={{ width: 72, height: 72, objectFit: 'cover', borderRadius: 1.5, flexShrink: 0 }}
    />
    <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 0.5, flex: 1, minWidth: 0 }}>
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
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
        }}
      >
        {item.title}
      </Typography>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Typography sx={{ fontSize: '10.5px', color: '#b8a898' }}>{item.date}</Typography>
        <Typography sx={{ fontSize: '10px', color: 'text.disabled' }}>{item.readTime} мин.</Typography>
      </Box>
    </Box>
    <Typography
      sx={{
        fontSize: '22px',
        fontWeight: 700,
        color: 'rgba(45,90,61,0.12)',
        alignSelf: 'center',
        flexShrink: 0,
        lineHeight: 1,
        minWidth: 28,
        textAlign: 'right',
      }}
    >
      {index + 1}
    </Typography>
  </Box>
)

interface WorkCardProps {
  work: FeaturedWork
  large?: boolean
}

export const WorkCard: React.FC<WorkCardProps> = ({ work, large }) => (
  <Box
    sx={{
      borderRadius: 2.5,
      overflow: 'hidden',
      position: 'relative',
      cursor: 'pointer',
      height: large ? 220 : 140,
      background: `linear-gradient(160deg, ${work.colorFrom}, ${work.colorTo})`,
      transition: 'transform 0.25s, box-shadow 0.25s',
      '&:hover': {
        transform: 'translateY(-3px)',
        boxShadow: '0 12px 32px rgba(60,40,20,0.18)',
      },
      '&:hover .work-overlay': { opacity: 1 },
    }}
  >
    <Box
      component="img"
      src={work.image}
      alt={work.title}
      sx={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
    />
    <Box
      className="work-overlay"
      sx={{
        position: 'absolute',
        inset: 0,
        bgcolor: 'rgba(30,20,10,0.45)',
        opacity: 0,
        transition: 'opacity 0.25s',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        p: 1.5,
      }}
    >
      <Typography sx={{ fontSize: '13px', fontWeight: 600, color: '#fff', lineHeight: 1.2 }}>
        {work.title}
      </Typography>
      <Typography sx={{ fontSize: '10px', color: 'rgba(255,255,255,0.7)', mt: 0.3 }}>{work.tag}</Typography>
    </Box>
    <Chip
      label={work.tag}
      size="small"
      sx={{
        position: 'absolute',
        top: 8,
        right: 8,
        fontSize: '9px',
        fontWeight: 700,
        bgcolor: 'rgba(255,255,255,0.85)',
        color: '#2d5a3d',
        height: 18,
        backdropFilter: 'blur(4px)',
      }}
    />
  </Box>
)

const formatLikes = (n: number) => n >= 1000 ? `${(n / 1000).toFixed(1)}K` : String(n)

interface BlogPostCardProps {
  post: BlogPost
}

export const BlogPostCard: React.FC<BlogPostCardProps> = ({ post }) => (
  <Box
    sx={{
      bgcolor: 'background.paper',
      borderRadius: 3,
      border: '1px solid rgba(196,168,130,0.25)',
      overflow: 'hidden',
      cursor: 'pointer',
      transition: 'box-shadow 0.2s, transform 0.2s',
      '&:hover': {
        boxShadow: '0 4px 20px rgba(45,90,61,0.12)',
        transform: 'translateY(-2px)',
      },
      display: 'flex',
      flexDirection: 'column',
    }}
  >
    <Box
      component="img"
      src={post.image}
      alt={post.title}
      sx={{ width: '100%', height: 180, objectFit: 'cover', display: 'block' }}
    />
    <Box sx={{ p: 1.5, display: 'flex', alignItems: 'center', gap: 1 }}>
      {/* Avatar */}
      <Box
        sx={{
          width: 30,
          height: 30,
          borderRadius: '50%',
          bgcolor: '#2d5a3d',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
        }}
      >
        <Typography sx={{ fontSize: '12px', fontWeight: 700, color: '#fff' }}>
          {post.author.charAt(0).toUpperCase()}
        </Typography>
      </Box>

      <Typography sx={{ fontSize: '13px', fontWeight: 600, color: 'text.primary', flex: 1, lineHeight: 1.2, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
        {post.author}
      </Typography>

      {/* Stats */}
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, flexShrink: 0 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.4 }}>
          <FavoriteBorderIcon sx={{ fontSize: 14, color: 'text.disabled' }} />
          <Typography sx={{ fontSize: '11px', color: 'text.disabled' }}>{formatLikes(post.likes)} Likes</Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.4 }}>
          <ChatBubbleOutlineIcon sx={{ fontSize: 14, color: 'text.disabled' }} />
          <Typography sx={{ fontSize: '11px', color: 'text.disabled' }}>{post.comments}</Typography>
        </Box>
      </Box>
    </Box>
  </Box>
)
