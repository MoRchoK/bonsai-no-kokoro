import * as React from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Chip from '@mui/material/Chip'
import Divider from '@mui/material/Divider'
import Grid from '@mui/material/Grid'
import Tab from '@mui/material/Tab'
import Tabs from '@mui/material/Tabs'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents'
import EmailIcon from '@mui/icons-material/Email'
import TelegramIcon from '@mui/icons-material/Telegram'
import GroupIcon from '@mui/icons-material/Group'
import { useAppSelector } from '../../store/hooks'
import { WorkCard, BlogPostCard } from './ProfileCard'
import UserMiniCard from './UserMiniCard'

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

const TABS = ['Портфолио', 'Блог', 'Обо себе', 'Контакты']

const Profile: React.FC = () => {
  const [activeTab, setActiveTab] = React.useState(0)
  const ownProfile = useAppSelector((state) => state.profile)
  const { selectedUserId, bloggerProfiles, suggestedUsers } = useAppSelector((state) => state.users)

  const selectedBlogger = selectedUserId
    ? bloggerProfiles.find((u) => u.id === selectedUserId) ?? null
    : null

  const name      = selectedBlogger ? selectedBlogger.name      : ownProfile.name
  const subtitle  = selectedBlogger ? selectedBlogger.bio       : ownProfile.subtitle
  const bio       = selectedBlogger ? selectedBlogger.bio       : ownProfile.bio
  const joined    = selectedBlogger ? selectedBlogger.joined    : ownProfile.joined
  const stats     = selectedBlogger
    ? selectedBlogger.stats.map((s) => ({ label: s.label, value: s.value }))
    : ownProfile.stats
  const blogPosts   = ownProfile.blogPosts
  const featuredWork = ownProfile.featuredWork
  const achievements = ownProfile.achievements

  const featuredMain = featuredWork[0]
  const featuredRest = featuredWork.slice(1)

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
      {/* ── Profile header banner ── */}
      <Box
        sx={{
          borderRadius: 3,
          overflow: 'hidden',
          bgcolor: '#2d5a3d',
          p: { xs: 3, md: 4 },
          mb: 0,
          display: 'flex',
          alignItems: { xs: 'flex-start', sm: 'center' },
          flexDirection: { xs: 'column', sm: 'row' },
          gap: 3,
        }}
      >
        {/* Avatar */}
        <Box
          sx={{
            width: { xs: 72, md: 96 },
            height: { xs: 72, md: 96 },
            borderRadius: '50%',
            bgcolor: 'rgba(255,255,255,0.15)',
            border: '2px solid rgba(255,255,255,0.4)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
          }}
        >
          <Typography
            sx={{
              fontFamily: '"Cormorant Garamond", serif',
              fontSize: { xs: '28px', md: '36px' },
              fontWeight: 700,
              color: '#fff',
            }}
          >
            {name.charAt(0)}
          </Typography>
        </Box>

        {/* Name + subtitle */}
        <Box sx={{ flex: 1, minWidth: 0 }}>
          <Typography
            sx={{
              fontFamily: '"Cormorant Garamond", serif',
              fontSize: { xs: '22px', md: '30px' },
              fontWeight: 700,
              color: '#fff',
              lineHeight: 1.1,
              mb: 0.5,
            }}
          >
            {name}
          </Typography>
          <Typography sx={{ fontSize: '13px', color: 'rgba(255,255,255,0.75)', mb: 1.5, lineHeight: 1.5 }}>
            {subtitle}
          </Typography>
          <Typography sx={{ fontSize: '12px', color: 'rgba(255,255,255,0.6)' }}>
            В сообществе с {joined}
          </Typography>
        </Box>

        {/* Stats */}
        <Box sx={{ display: 'flex', gap: { xs: 2, md: 3 }, flexWrap: 'wrap' }}>
          {stats.map((stat) => (
            <Box key={stat.label} sx={{ textAlign: 'center' }}>
              <Typography sx={{ fontSize: { xs: '18px', md: '22px' }, fontWeight: 700, color: '#fff', lineHeight: 1 }}>
                {stat.value}
              </Typography>
              <Typography sx={{ fontSize: '10px', color: 'rgba(255,255,255,0.6)', mt: 0.3, letterSpacing: '0.04em' }}>
                {stat.label}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>

      {/* ── Tab bar ── */}
      <Box
        sx={{
          borderBottom: '1px solid rgba(196,168,130,0.3)',
          mb: 4,
          bgcolor: 'background.paper',
          borderBottomLeftRadius: 12,
          borderBottomRightRadius: 12,
          px: 2,
        }}
      >
        <Tabs
          value={activeTab}
          onChange={(_e, val) => setActiveTab(val)}
          TabIndicatorProps={{ style: { backgroundColor: '#2d5a3d', height: 2 } }}
          sx={{
            minHeight: 44,
            '& .MuiTab-root': {
              fontSize: '12px',
              fontWeight: 500,
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              color: 'text.secondary',
              minHeight: 44,
              px: 2.5,
              '&.Mui-selected': { color: '#2d5a3d', fontWeight: 700 },
            },
          }}
        >
          {TABS.map((label) => (
            <Tab key={label} label={label} disableRipple />
          ))}
        </Tabs>
      </Box>

      {/* ── Tab content ── */}

      {/* ПОРТФОЛИО */}
      {activeTab === 0 && (
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
            gap: 3,
            alignItems: 'start',
          }}
        >
          {/* Featured hero */}
          <Box>
            {sectionLabel('Главная работа')}
            {featuredMain && <WorkCard work={featuredMain} large />}
          </Box>

          {/* Grid of remaining works */}
          <Box>
            {sectionLabel('Коллекция')}
            <Grid container spacing={1.5}>
              {featuredRest.map((work) => (
                <Grid size={6} key={work.id}>
                  <WorkCard work={work} />
                </Grid>
              ))}
            </Grid>
          </Box>
        </Box>
      )}

      {/* БЛОГ */}
      {activeTab === 1 && (
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '1fr 280px' },
            gap: 3,
            alignItems: 'start',
          }}
        >
          {/* Card grid */}
          <Box>
            {sectionLabel('Публикации')}
            <Grid container spacing={2}>
              {blogPosts.map((post) => (
                <Grid size={{ xs: 12, sm: 6, md: 4 }} key={post.id}>
                  <BlogPostCard post={post} />
                </Grid>
              ))}
            </Grid>
            <Button
              variant="outlined"
              fullWidth
              sx={{
                mt: 2,
                borderColor: 'rgba(196,168,130,0.5)',
                color: 'text.secondary',
                fontSize: '12px',
                textTransform: 'none',
                borderRadius: '50px',
                '&:hover': { borderColor: '#2d5a3d', color: '#2d5a3d', bgcolor: 'transparent' },
              }}
            >
              Загрузить ещё
            </Button>
          </Box>

          {/* Sidebar: promo + suggested users */}
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>

          {/* Promo card */}
          <Box
            sx={{
              bgcolor: '#2d5a3d',
              borderRadius: 3,
              p: 3,
              display: 'flex',
              flexDirection: 'column',
              gap: 1.5,
            }}
          >
            <Typography
              sx={{
                fontFamily: '"Cormorant Garamond", serif',
                fontSize: '20px',
                fontWeight: 700,
                color: '#fff',
                lineHeight: 1.2,
              }}
            >
              Bonsai of the Contest
            </Typography>
            <Typography sx={{ fontSize: '12.5px', color: 'rgba(255,255,255,0.8)', lineHeight: 1.6 }}>
              Submit your best tree! Winners will be featured in our next issue.
            </Typography>
            <Typography
              sx={{
                fontSize: '11px',
                fontWeight: 700,
                color: 'rgba(255,255,255,0.6)',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
              }}
            >
              Oct 1 – Oct 31
            </Typography>
            <Button
              variant="contained"
              sx={{
                bgcolor: '#fff',
                color: '#2d5a3d',
                fontWeight: 700,
                fontSize: '12px',
                letterSpacing: '0.06em',
                textTransform: 'none',
                borderRadius: '50px',
                boxShadow: 'none',
                mt: 0.5,
                '&:hover': { bgcolor: 'rgba(255,255,255,0.9)', boxShadow: 'none' },
              }}
            >
              Participate
            </Button>
          </Box>

          {/* Suggested users */}
          {sectionLabel('Похожие профили')}
          {suggestedUsers.map((user) => (
            <UserMiniCard key={user.id} user={user} />
          ))}

          </Box>
        </Box>
      )}

      {/* ОБО СЕБЕ */}
      {activeTab === 2 && (
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
            gap: 4,
            alignItems: 'start',
          }}
        >
          {/* Left: bio + specialization */}
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
            <Box>
              {sectionLabel('О себе')}
              <Typography sx={{ fontSize: '13.5px', color: 'text.secondary', lineHeight: 1.8 }}>
                {bio}
              </Typography>
            </Box>

            <Box>
              {sectionLabel('Специализация')}
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.8 }}>
                {(selectedBlogger ? selectedBlogger.specialization : ['Каскад', 'Сланкинг', 'Можжевельник', 'Сосна', 'Клён', 'Уход']).map((tag) => (
                  <Chip
                    key={tag}
                    label={tag}
                    size="small"
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
          </Box>

          {/* Right: achievements */}
          <Box>
            {sectionLabel('Достижения')}
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
              {achievements.map((achievement, i) => (
                <Box
                  key={i}
                  sx={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: 1.5,
                    bgcolor: 'background.paper',
                    borderRadius: 2,
                    p: 1.5,
                  }}
                >
                  <EmojiEventsIcon sx={{ fontSize: 18, color: '#c4a882', mt: 0.1, flexShrink: 0 }} />
                  <Typography sx={{ fontSize: '13px', color: 'text.secondary', lineHeight: 1.5 }}>
                    {achievement}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      )}

      {/* КОНТАКТЫ */}
      {activeTab === 3 && (
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
            gap: 4,
            alignItems: 'start',
          }}
        >
          {/* Contact form */}
          <Box>
            {sectionLabel('Написать сообщение')}
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <TextField
                label="Ваше имя"
                size="small"
                fullWidth
                sx={{ '& .MuiOutlinedInput-root': { borderRadius: 2 } }}
              />
              <TextField
                label="Email"
                size="small"
                fullWidth
                sx={{ '& .MuiOutlinedInput-root': { borderRadius: 2 } }}
              />
              <TextField
                label="Сообщение"
                size="small"
                fullWidth
                multiline
                rows={4}
                sx={{ '& .MuiOutlinedInput-root': { borderRadius: 2 } }}
              />
              <Button
                variant="contained"
                sx={{
                  bgcolor: '#2d5a3d',
                  color: '#fff',
                  fontWeight: 600,
                  fontSize: '13px',
                  textTransform: 'none',
                  borderRadius: '50px',
                  boxShadow: 'none',
                  alignSelf: 'flex-start',
                  px: 4,
                  '&:hover': { bgcolor: '#244d34', boxShadow: 'none' },
                }}
              >
                Отправить
              </Button>
            </Box>
          </Box>

          {/* Social links */}
          <Box>
            {sectionLabel('Социальные сети')}
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
              {[
                { icon: <EmailIcon sx={{ fontSize: 18, color: '#2d5a3d' }} />, label: 'Email', value: 'midori@bonsai.studio' },
                { icon: <TelegramIcon sx={{ fontSize: 18, color: '#2d5a3d' }} />, label: 'Telegram', value: '@midori_bonsai' },
                { icon: <GroupIcon sx={{ fontSize: 18, color: '#2d5a3d' }} />, label: 'VK', value: 'vk.com/midori_bonsai' },
              ].map((contact) => (
                <Box
                  key={contact.label}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1.5,
                    bgcolor: 'background.paper',
                    borderRadius: 2,
                    p: 1.5,
                    cursor: 'pointer',
                    transition: 'box-shadow 0.2s',
                    '&:hover': { boxShadow: '0 4px 16px rgba(60,40,20,0.1)' },
                  }}
                >
                  {contact.icon}
                  <Box>
                    <Typography sx={{ fontSize: '11px', color: 'text.disabled', lineHeight: 1 }}>
                      {contact.label}
                    </Typography>
                    <Typography sx={{ fontSize: '13px', color: 'text.primary', fontWeight: 500, mt: 0.3 }}>
                      {contact.value}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      )}
    </Box>
  )
}

export default Profile
