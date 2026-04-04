import { createSlice } from '@reduxjs/toolkit'

export type ContestStatus = 'active' | 'upcoming' | 'finished'

export interface Contest {
  id: string
  title: string
  description: string
  image: string
  deadline: string
  prize: string
  status: ContestStatus
  participants: number
  category: string
}

export interface ParticipateStep {
  step: number
  title: string
  description: string
}

interface ContestsState {
  contests: Contest[]
  participateSteps: ParticipateStep[]
}

const initialState: ContestsState = {
  contests: [
    {
      id: '1',
      title: 'Лучший листопадный бонсай',
      description: 'Покажите красоту осеннего листопада в миниатюре. Принимаются деревья любых листопадных пород в осенней окраске.',
      image: 'assets/mainBonsay.png',
      deadline: '30 апреля 2026',
      prize: '15 000 ₽',
      status: 'active',
      participants: 84,
      category: 'Листопадные',
    },
    {
      id: '2',
      title: 'Каскадный стиль — Кэнгай',
      description: 'Конкурс на лучшее каскадное дерево. Оценивается форма, пропорции и общее художественное впечатление.',
      image: 'assets/mainBonsay.png',
      deadline: '15 мая 2026',
      prize: '10 000 ₽',
      status: 'active',
      participants: 47,
      category: 'Стиль',
    },
    {
      id: '3',
      title: 'Бонсай для начинающих',
      description: 'Специальная номинация для тех, кто занимается бонсай менее 2 лет. Оценивается прогресс и потенциал.',
      image: 'assets/mainBonsay.png',
      deadline: '20 мая 2026',
      prize: '5 000 ₽',
      status: 'active',
      participants: 112,
      category: 'Новички',
    },
    {
      id: '4',
      title: 'Хвойные мастера',
      description: 'Конкурс среди хвойных пород: сосна, ель, можжевельник, лиственница.',
      image: 'assets/mainBonsay.png',
      deadline: '10 июня 2026',
      prize: '20 000 ₽',
      status: 'upcoming',
      participants: 0,
      category: 'Хвойные',
    },
    {
      id: '5',
      title: 'Лесная группа — Ёсэ-уэ',
      description: 'Создайте миниатюрный лес из нескольких деревьев в одном горшке.',
      image: 'assets/mainBonsay.png',
      deadline: '1 июля 2026',
      prize: '12 000 ₽',
      status: 'upcoming',
      participants: 0,
      category: 'Группы',
    },
    {
      id: '6',
      title: 'Тропические виды',
      description: 'Фикус, серисса, питтоспорум и другие тропические виды.',
      image: 'assets/mainBonsay.png',
      deadline: '15 июля 2026',
      prize: '8 000 ₽',
      status: 'upcoming',
      participants: 0,
      category: 'Тропические',
    },
  ],
  participateSteps: [
    {
      step: 1,
      title: 'Зарегистрируйтесь',
      description: 'Создайте аккаунт и заполните профиль участника.',
    },
    {
      step: 2,
      title: 'Выберите конкурс',
      description: 'Ознакомьтесь с условиями и выберите подходящую номинацию.',
    },
    {
      step: 3,
      title: 'Загрузите фото',
      description: 'Прикрепите качественные фотографии вашего дерева.',
    },
    {
      step: 4,
      title: 'Ждите результатов',
      description: 'Жюри оценит работы и объявит победителей в срок.',
    },
  ],
}

const contestsSlice = createSlice({
  name: 'contests',
  initialState,
  reducers: {},
})

export default contestsSlice.reducer
