import * as React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'
import Button from '@mui/material/Button'
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline'
import AddIcon from '@mui/icons-material/Add'
import PostCard from './PostCard'
import { useAppSelector } from '../../store/hooks'

const avatarInitial = (name: string) => name.charAt(0).toUpperCase()

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

const Community: React.FC = () => {
  const { posts, topBloggers, latestComments } = useAppSelector((state) => state.community)
  const featured = posts[0]
  const rest = posts.slice(1)

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
      <Box
        sx={{
          display: 'flex',
          alignItems: { sm: 'center' },
          justifyContent: 'space-between',
          flexDirection: { xs: 'column', sm: 'row' },
          gap: 2,
          mb: 4,
        }}
      >
        <Box>
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
            Блог Сообщества
          </Typography>
          <Typography sx={{ fontSize: '14px', color: 'text.secondary' }}>
            Делитесь своими деревьями, вдохновляйтесь работами других мастеров
          </Typography>
        </Box>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          sx={{
            bgcolor: '#2d5a3d',
            color: '#fff',
            fontWeight: 600,
            fontSize: '13px',
            textTransform: 'none',
            borderRadius: '50px',
            px: 3,
            boxShadow: 'none',
            whiteSpace: 'nowrap',
            '&:hover': { bgcolor: '#244d34', boxShadow: 'none' },
          }}
        >
          Новый пост
        </Button>
      </Box>

      {/* Content grid: posts | sidebar */}
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: '1fr 240px' },
          gap: 4,
          alignItems: 'start',
        }}
      >
        {/* ── Posts feed ── */}
        <Box>
          {/* Row 1: featured + one regular */}
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', sm: '2fr 1fr' },
              gap: 2,
              mb: 2,
            }}
          >
            <PostCard post={featured} featured />
            <PostCard post={rest[0]} />
          </Box>

          {/* Row 2: three cards */}
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr 1fr' },
              gap: 2,
              mb: 2,
            }}
          >
            {rest.slice(1, 4).map(post => (
              <PostCard key={post.id} post={post} />
            ))}
          </Box>

          {/* Row 3: remaining cards */}
          {rest.length > 4 && (
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' },
                gap: 2,
              }}
            >
              {rest.slice(4).map(post => (
                <PostCard key={post.id} post={post} />
              ))}
            </Box>
          )}
        </Box>

        {/* ── Sidebar ── */}
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
          {/* Top bloggers */}
          <Box>
            {sectionLabel('Топ блогеры')}
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.25 }}>
              {topBloggers.map((blogger, i) => (
                <Box
                  key={blogger.id}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1.25,
                    cursor: 'pointer',
                    '&:hover .blogger-name': { color: '#2d5a3d' },
                  }}
                >
                  {/* Rank */}
                  <Typography sx={{ fontSize: '11px', color: 'text.disabled', width: 14, flexShrink: 0 }}>
                    {i + 1}
                  </Typography>
                  {/* Avatar */}
                  <Box
                    sx={{
                      width: 32,
                      height: 32,
                      borderRadius: '50%',
                      bgcolor: i === 0 ? '#c4a882' : 'rgba(45,90,61,0.12)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <Typography sx={{ fontSize: '12px', fontWeight: 700, color: i === 0 ? '#fff' : '#2d5a3d' }}>
                      {avatarInitial(blogger.name)}
                    </Typography>
                  </Box>
                  <Box sx={{ flex: 1, minWidth: 0 }}>
                    <Typography
                      className="blogger-name"
                      sx={{ fontSize: '12px', fontWeight: 600, color: 'text.primary', transition: 'color 0.2s', lineHeight: 1.2 }}
                    >
                      {blogger.name}
                    </Typography>
                    <Typography sx={{ fontSize: '11px', color: 'text.disabled' }}>
                      {blogger.posts} публикаций
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>

          {/* Latest comments */}
          <Box>
            {sectionLabel('Последние комментарии')}
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
              {latestComments.map(comment => (
                <Box
                  key={comment.id}
                  sx={{
                    display: 'flex',
                    gap: 1.25,
                    cursor: 'pointer',
                    '&:hover .comment-text': { color: 'text.primary' },
                  }}
                >
                  <Box
                    sx={{
                      width: 28,
                      height: 28,
                      borderRadius: '50%',
                      bgcolor: 'rgba(45,90,61,0.12)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      mt: 0.25,
                    }}
                  >
                    <Typography sx={{ fontSize: '11px', fontWeight: 700, color: '#2d5a3d' }}>
                      {avatarInitial(comment.author)}
                    </Typography>
                  </Box>
                  <Box>
                    <Typography sx={{ fontSize: '12px', fontWeight: 600, color: 'text.primary', lineHeight: 1.2 }}>
                      {comment.author}
                    </Typography>
                    <Typography
                      className="comment-text"
                      sx={{ fontSize: '11px', color: 'text.secondary', lineHeight: 1.5, transition: 'color 0.2s' }}
                    >
                      {comment.text}
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, mt: 0.25 }}>
                      <ChatBubbleOutlineIcon sx={{ fontSize: 11, color: 'text.disabled' }} />
                      <Typography sx={{ fontSize: '10px', color: 'text.disabled' }}>{comment.timeAgo}</Typography>
                    </Box>
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

export default Community
