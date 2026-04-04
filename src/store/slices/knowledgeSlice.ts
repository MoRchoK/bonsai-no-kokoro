import { createSlice } from '@reduxjs/toolkit'

export type Difficulty = 'Начинающий' | 'Средний' | 'Продвинутый'

export interface Article {
  id: string
  title: string
  excerpt: string
  section: string
  difficulty: Difficulty
  image?: string
  readTime: string
}

export interface FaqItem {
  id: string
  question: string
  answer: string
}

interface KnowledgeState {
  articles: Article[]
  faqItems: FaqItem[]
  popularArticles: string[]
  sections: string[]
  difficulties: Difficulty[]
}

const initialState: KnowledgeState = {
  articles: [
    {
      id: '1',
      title: 'Что такое бонсай?',
      excerpt: 'История и философия бонсай — от древнего Китая до наших дней.',
      section: 'Основы бонсай',
      difficulty: 'Начинающий',
      image: '/src/assets/mainBonsay.png',
      readTime: '5 мин',
    },
    {
      id: '2',
      title: 'Выбор первого дерева',
      excerpt: 'Как выбрать правильное дерево для начинающего и на что обратить внимание.',
      section: 'Основы бонсай',
      difficulty: 'Начинающий',
      image: '/src/assets/mainBonsay.png',
      readTime: '7 мин',
    },
    {
      id: '3',
      title: 'Необходимые инструменты',
      excerpt: 'Набор базовых инструментов, без которых не обойтись при работе с бонсай.',
      section: 'Основы бонсай',
      difficulty: 'Начинающий',
      readTime: '4 мин',
    },
    {
      id: '4',
      title: 'Хокидати — метловидный стиль',
      excerpt: 'Прямой ствол с симметричной кроной, напоминающей метлу.',
      section: 'Виды бонсай',
      difficulty: 'Средний',
      image: '/src/assets/mainBonsay.png',
      readTime: '6 мин',
    },
    {
      id: '5',
      title: 'Тёккан — прямостоячий стиль',
      excerpt: 'Классический вертикальный силуэт — символ силы и стабильности.',
      section: 'Виды бонсай',
      difficulty: 'Начинающий',
      image: '/src/assets/mainBonsay.png',
      readTime: '5 мин',
    },
    {
      id: '6',
      title: 'Кэнгай — каскадный стиль',
      excerpt: 'Ветви ниспадают ниже края горшка, имитируя дерево на скалистом утёсе.',
      section: 'Виды бонсай',
      difficulty: 'Продвинутый',
      image: '/src/assets/mainBonsay.png',
      readTime: '8 мин',
    },
    {
      id: '7',
      title: 'Полив и влажность',
      excerpt: 'Как часто и сколько поливать бонсай в зависимости от вида и сезона.',
      section: 'Уход за бонсай',
      difficulty: 'Начинающий',
      readTime: '6 мин',
    },
    {
      id: '8',
      title: 'Удобрения и питание',
      excerpt: 'Какие макро- и микроэлементы необходимы дереву на разных этапах роста.',
      section: 'Уход за бонсай',
      difficulty: 'Средний',
      readTime: '9 мин',
    },
    {
      id: '9',
      title: 'Пересадка бонсай',
      excerpt: 'Когда и как правильно пересаживать, чтобы не навредить корневой системе.',
      section: 'Уход за бонсай',
      difficulty: 'Средний',
      image: '/src/assets/mainBonsay.png',
      readTime: '10 мин',
    },
    {
      id: '10',
      title: 'Формирование проволокой',
      excerpt: 'Пошаговый мастер-класс по обматыванию ветвей медной или алюминиевой проволокой.',
      section: 'Мастер-классы',
      difficulty: 'Средний',
      image: '/src/assets/mainBonsay.png',
      readTime: '12 мин',
    },
    {
      id: '11',
      title: 'Техника джин и шари',
      excerpt: 'Создание мёртвой древесины для придания возраста и характера дереву.',
      section: 'Мастер-классы',
      difficulty: 'Продвинутый',
      readTime: '15 мин',
    },
  ],
  faqItems: [
    {
      id: 'f1',
      question: 'Сколько лет нужно, чтобы вырастить бонсай с нуля?',
      answer: 'В среднем от 5 до 15 лет, в зависимости от породы дерева и желаемой формы.',
    },
    {
      id: 'f2',
      question: 'Можно ли держать бонсай в квартире?',
      answer: 'Да, если выбрать тропические виды (фикус, фикус Бенджамина, серисса). Они адаптированы к комнатным условиям.',
    },
    {
      id: 'f3',
      question: 'Как часто нужно обрезать бонсай?',
      answer: 'Формирующую обрезку проводят раз в год (весна), поддерживающую — по мере отрастания побегов.',
    },
  ],
  popularArticles: [
    'Топ-5 деревьев для новичков',
    'Как правильно поливать бонсай',
    'Техника проволоки — с чего начать',
    'Почва и субстраты для бонсай',
    'Зимовка бонсай в домашних условиях',
  ],
  sections: [
    'Основы бонсай',
    'Виды бонсай',
    'Уход за бонсай',
    'Мастер-классы',
    'FAQ',
  ],
  difficulties: ['Начинающий', 'Средний', 'Продвинутый'],
}

const knowledgeSlice = createSlice({
  name: 'knowledge',
  initialState,
  reducers: {},
})

export default knowledgeSlice.reducer
