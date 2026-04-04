import * as React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import Divider from '@mui/material/Divider'
import Checkbox from '@mui/material/Checkbox'
import FormControlLabel from '@mui/material/FormControlLabel'
import Button from '@mui/material/Button'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import SearchIcon from '@mui/icons-material/Search'
import InputAdornment from '@mui/material/InputAdornment'
import QuestionAnswerOutlinedIcon from '@mui/icons-material/QuestionAnswerOutlined'
import KnowledgeCard from './KnowledgeCard'
import { useAppSelector } from '../../store/hooks'
import type { Difficulty } from '../../store/slices/knowledgeSlice'

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

const SectionBlock: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <Box sx={{ mb: 4 }}>
    {sectionLabel(title)}
    {children}
  </Box>
)

const Knowledge: React.FC = () => {
  const { articles, faqItems, popularArticles, sections, difficulties } = useAppSelector((state) => state.knowledge)
  const [search, setSearch] = React.useState('')
  const [selectedDifficulties, setSelectedDifficulties] = React.useState<Difficulty[]>([])

  const toggleDifficulty = (d: Difficulty) => {
    setSelectedDifficulties(prev =>
      prev.includes(d) ? prev.filter(x => x !== d) : [...prev, d]
    )
  }

  const filteredArticles = articles.filter(a => {
    const matchesSearch =
      search.trim() === '' ||
      a.title.toLowerCase().includes(search.toLowerCase()) ||
      a.excerpt.toLowerCase().includes(search.toLowerCase())
    const matchesDifficulty =
      selectedDifficulties.length === 0 || selectedDifficulties.includes(a.difficulty)
    return matchesSearch && matchesDifficulty
  })

  const articlesForSection = (section: string) =>
    filteredArticles.filter(a => a.section === section)

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
            mb: 1,
            letterSpacing: '-0.5px',
          }}
        >
          База знаний о бонсай
        </Typography>
        <Typography sx={{ fontSize: '14px', color: 'text.secondary', mb: 2.5, maxWidth: 560 }}>
          Откройте для себя богатый мир бонсай: пошаговые руководства, описания стилей и советы
          экспертов — для тех, кто только начинает, и для опытных мастеров.
        </Typography>
        <TextField
          placeholder="Поиск по статьям..."
          size="small"
          value={search}
          onChange={e => setSearch(e.target.value)}
          sx={{ maxWidth: 400 }}
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon sx={{ fontSize: 18, color: 'text.disabled' }} />
                </InputAdornment>
              ),
            },
          }}
        />
      </Box>

      {/* Content grid */}
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: '1fr 240px' },
          gap: 4,
          alignItems: 'start',
        }}
      >
        {/* ── Main content ── */}
        <Box>
          {/* Основы бонсай */}
          {articlesForSection('Основы бонсай').length > 0 && (
            <SectionBlock title="Основы бонсай">
              <Box
                sx={{
                  display: 'grid',
                  gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr 1fr' },
                  gap: 2,
                }}
              >
                {articlesForSection('Основы бонсай').map(a => (
                  <KnowledgeCard key={a.id} article={a} />
                ))}
              </Box>
            </SectionBlock>
          )}

          {/* Виды бонсай */}
          {articlesForSection('Виды бонсай').length > 0 && (
            <SectionBlock title="Виды бонсай">
              <Box
                sx={{
                  display: 'grid',
                  gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr 1fr' },
                  gap: 2,
                }}
              >
                {articlesForSection('Виды бонсай').map(a => (
                  <KnowledgeCard key={a.id} article={a} />
                ))}
              </Box>
            </SectionBlock>
          )}

          {/* Уход за бонсай */}
          {articlesForSection('Уход за бонсай').length > 0 && (
            <SectionBlock title="Уход за бонсай">
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                {articlesForSection('Уход за бонсай').map(a => (
                  <KnowledgeCard key={a.id} article={a} compact />
                ))}
              </Box>
            </SectionBlock>
          )}

          {/* Мастер-классы */}
          {articlesForSection('Мастер-классы').length > 0 && (
            <SectionBlock title="Мастер-классы и проекты">
              <Box
                sx={{
                  display: 'grid',
                  gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' },
                  gap: 2,
                }}
              >
                {articlesForSection('Мастер-классы').map(a => (
                  <KnowledgeCard key={a.id} article={a} />
                ))}
              </Box>
            </SectionBlock>
          )}

          {/* FAQ */}
          {faqItems.length > 0 && (
            <SectionBlock title="FAQ о бонсай">
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                {faqItems.map(item => (
                  <Accordion
                    key={item.id}
                    disableGutters
                    elevation={0}
                    sx={{
                      border: '1px solid rgba(196,168,130,0.25)',
                      borderRadius: '10px !important',
                      bgcolor: 'background.paper',
                      '&:before': { display: 'none' },
                      mb: 0.5,
                    }}
                  >
                    <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ fontSize: 18, color: '#2d5a3d' }} />}>
                      <Typography sx={{ fontSize: '13px', fontWeight: 600, color: 'text.primary' }}>
                        {item.question}
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography sx={{ fontSize: '13px', color: 'text.secondary', lineHeight: 1.7 }}>
                        {item.answer}
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                ))}
              </Box>
            </SectionBlock>
          )}

          {/* Ask question CTA */}
          <Box
            sx={{
              bgcolor: '#2d5a3d',
              borderRadius: 3,
              p: 3,
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              alignItems: { sm: 'center' },
              justifyContent: 'space-between',
              gap: 2,
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
              <QuestionAnswerOutlinedIcon sx={{ color: 'rgba(255,255,255,0.7)', fontSize: 28 }} />
              <Box>
                <Typography sx={{ fontSize: '15px', fontWeight: 700, color: '#fff' }}>
                  Не нашли ответ?
                </Typography>
                <Typography sx={{ fontSize: '12px', color: 'rgba(255,255,255,0.7)' }}>
                  Задайте вопрос сообществу — наши эксперты помогут.
                </Typography>
              </Box>
            </Box>
            <Button
              variant="contained"
              sx={{
                bgcolor: '#fff',
                color: '#2d5a3d',
                fontWeight: 700,
                fontSize: '11px',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                borderRadius: '8px',
                boxShadow: 'none',
                whiteSpace: 'nowrap',
                '&:hover': { bgcolor: 'rgba(255,255,255,0.9)', boxShadow: 'none' },
              }}
            >
              Задать вопрос
            </Button>
          </Box>
        </Box>

        {/* ── Sidebar ── */}
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
          {/* Filters */}
          <Box
            sx={{
              bgcolor: 'background.paper',
              borderRadius: 3,
              border: '1px solid rgba(196,168,130,0.25)',
              p: 2.5,
            }}
          >
            {sectionLabel('Фильтры')}
            <Typography sx={{ fontSize: '11px', fontWeight: 700, color: 'text.secondary', mb: 1 }}>
              Сложность
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.25 }}>
              {difficulties.map(d => (
                <FormControlLabel
                  key={d}
                  control={
                    <Checkbox
                      size="small"
                      checked={selectedDifficulties.includes(d)}
                      onChange={() => toggleDifficulty(d)}
                      sx={{
                        color: 'rgba(196,168,130,0.6)',
                        '&.Mui-checked': { color: '#2d5a3d' },
                        py: 0.25,
                      }}
                    />
                  }
                  label={
                    <Typography sx={{ fontSize: '13px', color: 'text.secondary' }}>{d}</Typography>
                  }
                />
              ))}
            </Box>
          </Box>

          {/* Popular articles */}
          <Box>
            {sectionLabel('Популярные статьи')}
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              {popularArticles.map((title, i) => (
                <Box
                  key={i}
                  sx={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: 1,
                    cursor: 'pointer',
                    '&:hover p': { color: '#2d5a3d' },
                  }}
                >
                  <Box sx={{ width: 4, height: 4, borderRadius: '50%', bgcolor: '#2d5a3d', flexShrink: 0, mt: '6px' }} />
                  <Typography sx={{ fontSize: '12px', color: 'text.secondary', lineHeight: 1.5, transition: 'color 0.2s' }}>
                    {title}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>

          {/* Sections */}
          <Box>
            {sectionLabel('Разделы статей')}
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
              {sections.map(s => (
                <Typography
                  key={s}
                  sx={{
                    fontSize: '12px',
                    color: 'text.secondary',
                    cursor: 'pointer',
                    py: 0.5,
                    px: 1,
                    borderRadius: 1,
                    transition: 'background 0.15s, color 0.15s',
                    '&:hover': { bgcolor: 'rgba(45,90,61,0.08)', color: '#2d5a3d' },
                  }}
                >
                  {s}
                </Typography>
              ))}
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Knowledge
