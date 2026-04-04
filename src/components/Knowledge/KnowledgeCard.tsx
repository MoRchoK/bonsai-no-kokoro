import * as React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Chip from '@mui/material/Chip'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import { type Article } from '../../store/slices/knowledgeSlice'

const difficultyColor: Record<string, string> = {
  'Начинающий': '#4caf50',
  'Средний': '#ff9800',
  'Продвинутый': '#f44336',
}

interface Props {
  article: Article
  compact?: boolean
}

const KnowledgeCard: React.FC<Props> = ({ article, compact = false }) => {
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
        display: 'flex',
        flexDirection: compact ? 'row' : 'column',
        height: '100%',
      }}
    >
      {article.image && !compact && (
        <Box
          component="img"
          src={article.image}
          alt={article.title}
          sx={{ width: '100%', height: 140, objectFit: 'cover' }}
        />
      )}

      {article.image && compact && (
        <Box
          component="img"
          src={article.image}
          alt={article.title}
          sx={{ width: 72, height: 72, objectFit: 'cover', flexShrink: 0 }}
        />
      )}

      <Box sx={{ p: compact ? 1.5 : 2, display: 'flex', flexDirection: 'column', gap: 0.75, flex: 1 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.75, flexWrap: 'wrap' }}>
          <Chip
            label={article.difficulty}
            size="small"
            sx={{
              fontSize: '10px',
              height: 18,
              bgcolor: `${difficultyColor[article.difficulty]}18`,
              color: difficultyColor[article.difficulty],
              fontWeight: 600,
              border: `1px solid ${difficultyColor[article.difficulty]}40`,
            }}
          />
        </Box>

        <Typography
          sx={{
            fontFamily: '"Cormorant Garamond", serif',
            fontSize: compact ? '13px' : '15px',
            fontWeight: 700,
            color: 'text.primary',
            lineHeight: 1.35,
          }}
        >
          {article.title}
        </Typography>

        {!compact && (
          <Typography sx={{ fontSize: '12px', color: 'text.secondary', lineHeight: 1.6 }}>
            {article.excerpt}
          </Typography>
        )}

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, mt: 'auto' }}>
          <AccessTimeIcon sx={{ fontSize: 12, color: 'text.disabled' }} />
          <Typography sx={{ fontSize: '11px', color: 'text.disabled' }}>{article.readTime}</Typography>
        </Box>
      </Box>
    </Box>
  )
}

export default KnowledgeCard
