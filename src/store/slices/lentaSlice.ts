import { createSlice } from '@reduxjs/toolkit'

export interface NewsItem {
  id: string
  title: string
  excerpt: string
  date: string
  category: string
  image: string
  featured: boolean
}

interface LentaState {
  items: NewsItem[]
  popularArticles: string[]
  categories: string[]
}

const initialState: LentaState = {
  items: [
    {
      id: '1',
      title: 'Mastering the Art — Cascade: A Juniper\'s Journey',
      excerpt: 'Explore the ancient techniques behind cascade-style bonsai cultivation and discover how masters shape Juniper trees over decades of careful pruning.',
      date: '12 Mar 2026',
      category: 'Техника',
      image: 'assets/mainBonsay.png',
      featured: true,
    },
    {
      id: '2',
      title: 'Bonsai Style Exposed: The Slanting Form',
      excerpt: 'A deep dive into the Shakan style — its origins, proportions, and the tools you need.',
      date: '10 Mar 2026',
      category: 'Стили',
      image: 'assets/mainBonsay.png',
      featured: false,
    },
    {
      id: '3',
      title: 'Seasonal Care Guide for Indoor Bonsai',
      excerpt: 'How to keep your bonsai thriving through every season without a greenhouse.',
      date: '8 Mar 2026',
      category: 'Уход',
      image: 'assets/mainBonsay.png',
      featured: false,
    },
    {
      id: '4',
      title: 'Community Showcase: March Winners',
      excerpt: 'See the stunning trees submitted by our members this month and vote for your favourite.',
      date: '5 Mar 2026',
      category: 'Сообщество',
      image: 'assets/mainBonsay.png',
      featured: false,
    },
    {
      id: '5',
      title: 'Repotting Season Has Arrived',
      excerpt: 'Spring is the perfect time to repot. Here\'s everything you need to know before you start.',
      date: '2 Mar 2026',
      category: 'Уход',
      image: 'assets/mainBonsay.png',
      featured: false,
    },
  ],
  popularArticles: [
    'Топ-5 деревьев для новичков',
    'История бонсай',
    'Техника проволоки',
    'Почва и удобрения',
    'Как выбрать первый горшок',
  ],
  categories: [
    'Техника',
    'Стили',
    'Уход',
    'Сообщество',
    'Конкурсы',
    'Инструменты',
  ],
}

const lentaSlice = createSlice({
  name: 'lenta',
  initialState,
  reducers: {},
})

export default lentaSlice.reducer
