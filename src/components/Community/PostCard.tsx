import * as React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline'
import { type Post } from '../../store/slices/communitySlice'

interface Props {
  post: Post
  featured?: boolean
}

const avatarInitial = (name: string) => name.charAt(0).toUpperCase()

const PostCard: React.FC<Props> = ({ post, featured = false }) => {
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
          boxShadow: '0 4px 20px rgba(45,90,61,0.12)',
          transform: 'translateY(-2px)',
        },
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Box
        component="img"
        src={post.image}
        alt={post.author}
        sx={{
          width: '100%',
          height: featured ? 260 : 180,
          objectFit: 'cover',
          display: 'block',
        }}
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
            {avatarInitial(post.author)}
          </Typography>
        </Box>

        <Typography
          sx={{ fontSize: '13px', fontWeight: 600, color: 'text.primary', flex: 1, lineHeight: 1.2 }}
        >
          {post.author}
        </Typography>

        {/* Stats */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.4 }}>
            <FavoriteBorderIcon sx={{ fontSize: 14, color: 'text.disabled' }} />
            <Typography sx={{ fontSize: '11px', color: 'text.disabled' }}>{post.likes}</Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.4 }}>
            <ChatBubbleOutlineIcon sx={{ fontSize: 14, color: 'text.disabled' }} />
            <Typography sx={{ fontSize: '11px', color: 'text.disabled' }}>{post.comments}</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default PostCard
