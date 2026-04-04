import { createSlice } from '@reduxjs/toolkit'

export interface ProfileUpdate {
  id: string
  title: string
  excerpt: string
  date: string
  category: string
  image: string
  readTime: number
}

export interface BlogPost {
  id: string
  title: string
  author: string
  image: string
  likes: number
  comments: number
  date: string
  category: string
}

export interface FeaturedWork {
  id: string
  title: string
  image: string
  tag: string
  colorFrom: string
  colorTo: string
}

export interface ProfileStat {
  label: string
  value: string
}

interface ProfileState {
  name: string
  subtitle: string
  bio: string
  joined: string
  stats: ProfileStat[]
  latestUpdates: ProfileUpdate[]
  blogPosts: BlogPost[]
  featuredWork: FeaturedWork[]
  achievements: string[]
}

const initialState: ProfileState = {
  name: 'Midori Bonsai Studio',
  subtitle: 'Cultivating harmony and artistic artistry following the journey of my living sculptures.',
  bio: 'Энтузиаст бонсай с 15-летним стажем. Специализируюсь на стилях каскад и слэнтинг. Участник и призёр международных конкурсов.',
  joined: 'Март 2021',
  stats: [
    { label: 'Деревьев', value: '42' },
    { label: 'Публикаций', value: '128' },
    { label: 'Подписчиков', value: '3.1K' },
    { label: 'Конкурсов', value: '17' },
  ],
  latestUpdates: [
    {
      id: '1',
      title: 'Autumn Pruning: Shaping Future Canopies',
      excerpt: 'Detailed walkthrough of my seasonal pruning approach for Juniper cascade.',
      date: '28 Mar 2026',
      category: 'Техника',
      image: 'assets/mainBonsay.png',
      readTime: 7,
    },
    {
      id: '2',
      title: "Dragon's Embrace — Black Pine",
      excerpt: 'A five-year documentation of this Black Pine transformation into a dramatic slant.',
      date: '20 Mar 2026',
      category: 'Галерея',
      image: 'assets/mainBonsay.png',
      readTime: 5,
    },
    {
      id: '3',
      title: 'Soil Secrets: My Akadama Blend',
      excerpt: 'The exact substrate mix I use for tropical species and why it works.',
      date: '12 Mar 2026',
      category: 'Уход',
      image: 'assets/mainBonsay.png',
      readTime: 6,
    },
    {
      id: '4',
      title: 'Winter Workshop Recap',
      excerpt: 'Highlights from our community winter styling session with 20 participants.',
      date: '5 Mar 2026',
      category: 'Сообщество',
      image: 'assets/mainBonsay.png',
      readTime: 4,
    },
  ],
  blogPosts: [
    {
      id: '1',
      title: 'Autumn Pruning: Shaping Future Canopies',
      author: 'Xing T',
      image: 'assets/mainBonsay.png',
      likes: 1200,
      comments: 34,
      date: '28 Mar 2026',
      category: 'Техника',
    },
    {
      id: '2',
      title: "Dragon's Embrace — Black Pine",
      author: 'Xing T',
      image: 'assets/mainBonsay.png',
      likes: 1750,
      comments: 51,
      date: '20 Mar 2026',
      category: 'Галерея',
    },
    {
      id: '3',
      title: 'Soil Secrets: My Akadama Blend',
      author: 'Xing T',
      image: 'assets/mainBonsay.png',
      likes: 980,
      comments: 22,
      date: '12 Mar 2026',
      category: 'Уход',
    },
    {
      id: '4',
      title: 'Winter Workshop Recap',
      author: 'Xing T',
      image: 'assets/mainBonsay.png',
      likes: 640,
      comments: 18,
      date: '5 Mar 2026',
      category: 'Сообщество',
    },
    {
      id: '5',
      title: 'Wiring Techniques for Beginners',
      author: 'Xing T',
      image: 'assets/mainBonsay.png',
      likes: 2100,
      comments: 67,
      date: '1 Mar 2026',
      category: 'Техника',
    },
    {
      id: '6',
      title: 'My Favourite Pots of 2025',
      author: 'Xing T',
      image: 'assets/mainBonsay.png',
      likes: 870,
      comments: 29,
      date: '22 Feb 2026',
      category: 'Галерея',
    },
  ],
  featuredWork: [
    { id: '1', title: 'Juniper Cascade', image: 'assets/mainBonsay.png', tag: 'Collection', colorFrom: '#ddebd0', colorTo: '#c8dfc0' },
    { id: '2', title: 'Black Pine', image: 'assets/mainBonsay.png', tag: 'Featured', colorFrom: '#2d5a3d', colorTo: '#1e4030' },
    { id: '3', title: 'Maple Slant', image: 'assets/mainBonsay.png', tag: 'Gallery', colorFrom: '#fce8ec', colorTo: '#f0d4c8' },
    { id: '4', title: 'Ficus Upright', image: 'assets/mainBonsay.png', tag: 'Live', colorFrom: '#ece8e0', colorTo: '#ddd8cc' },
    { id: '5', title: 'Azalea Forest', image: 'assets/mainBonsay.png', tag: 'Collection', colorFrom: '#d8eacc', colorTo: '#cddfc4' },
  ],
  achievements: [
    'Золото — Осенний конкурс 2025',
    'Серебро — Международный турнир 2024',
    'Лучшая статья месяца — Февраль 2026',
    'Топ-10 блогеров сообщества',
  ],
}

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {},
})

export default profileSlice.reducer
