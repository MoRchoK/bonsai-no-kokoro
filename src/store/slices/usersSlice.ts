import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface UserProfile {
  id: string
  name: string
  location: string
  bio: string
  joined: string
  avatar: string
  stats: { label: string; value: string }[]
  specialization: string[]
  gallery: string[]
}

interface UsersState {
  selectedUserId: string | null
  suggestedUsers: UserProfile[]
  bloggerProfiles: UserProfile[]
}

const initialState: UsersState = {
  selectedUserId: null,
  suggestedUsers: [
    {
      id: '1',
      name: 'Hiroshi M.',
      location: 'Japan',
      bio: 'Мастер бонсай с 20-летним стажем. Специализируюсь на японской сосне и можжевельнике.',
      joined: 'Январь 2019',
      avatar: 'H',
      stats: [
        { label: 'Деревьев', value: '87' },
        { label: 'Публикаций', value: '214' },
        { label: 'Подписчиков', value: '12K' },
      ],
      specialization: ['Сосна', 'Можжевельник', 'Формальный вертикаль'],
      gallery: [
        'assets/mainBonsay.png',
        'assets/mainBonsay.png',
        'assets/mainBonsay.png',
        'assets/mainBonsay.png',
      ],
    },
    {
      id: '2',
      name: 'Elena V.',
      location: 'Russia',
      bio: 'Увлекаюсь тропическими видами. Фикус и баньян — моя страсть уже 8 лет.',
      joined: 'Июнь 2020',
      avatar: 'E',
      stats: [
        { label: 'Деревьев', value: '31' },
        { label: 'Публикаций', value: '76' },
        { label: 'Подписчиков', value: '2.4K' },
      ],
      specialization: ['Фикус', 'Баньян', 'Тропические виды'],
      gallery: [
        'assets/mainBonsay.png',
        'assets/mainBonsay.png',
        'assets/mainBonsay.png',
        'assets/mainBonsay.png',
      ],
    },
    {
      id: '3',
      name: 'Carlos R.',
      location: 'Spain',
      bio: 'Коллекционирую европейские оливы. Участник конкурса EBA 2024.',
      joined: 'Март 2022',
      avatar: 'C',
      stats: [
        { label: 'Деревьев', value: '19' },
        { label: 'Публикаций', value: '48' },
        { label: 'Подписчиков', value: '980' },
      ],
      specialization: ['Олива', 'Каскад', 'Лесная группа'],
      gallery: [
        'assets/mainBonsay.png',
        'assets/mainBonsay.png',
        'assets/mainBonsay.png',
        'assets/mainBonsay.png',
      ],
    },
  ],
  bloggerProfiles: [
    {
      id: 'b1',
      name: 'Агата Зальтед',
      location: 'Germany',
      bio: 'Создаю бонсай уже 12 лет. Увлекаюсь европейскими видами и лиственными деревьями.',
      joined: 'Февраль 2018',
      avatar: 'А',
      stats: [
        { label: 'Деревьев', value: '53' },
        { label: 'Публикаций', value: '128' },
        { label: 'Подписчиков', value: '5.2K' },
      ],
      specialization: ['Клён', 'Граб', 'Лесная группа'],
      gallery: [
        'assets/mainBonsay.png',
        'assets/mainBonsay.png',
        'assets/mainBonsay.png',
        'assets/mainBonsay.png',
      ],
    },
    {
      id: 'b2',
      name: 'Бонсай Грандвью',
      location: 'France',
      bio: 'Студия бонсай с 2015 года. Проводим мастер-классы и выставки по всей Европе.',
      joined: 'Март 2019',
      avatar: 'Б',
      stats: [
        { label: 'Деревьев', value: '120' },
        { label: 'Публикаций', value: '97' },
        { label: 'Подписчиков', value: '8.7K' },
      ],
      specialization: ['Сосна', 'Можжевельник', 'Азалия'],
      gallery: [
        'assets/mainBonsay.png',
        'assets/mainBonsay.png',
        'assets/mainBonsay.png',
        'assets/mainBonsay.png',
      ],
    },
    {
      id: 'b3',
      name: 'Жорам Гомаа',
      location: 'Egypt',
      bio: 'Привожу в культуру местные средиземноморские виды. Олива и фисташка — моя специализация.',
      joined: 'Сентябрь 2020',
      avatar: 'Ж',
      stats: [
        { label: 'Деревьев', value: '38' },
        { label: 'Публикаций', value: '84' },
        { label: 'Подписчиков', value: '3.1K' },
      ],
      specialization: ['Олива', 'Фисташка', 'Пустынные виды'],
      gallery: [
        'assets/mainBonsay.png',
        'assets/mainBonsay.png',
        'assets/mainBonsay.png',
        'assets/mainBonsay.png',
      ],
    },
    {
      id: 'b4',
      name: 'Одолупо Собсумба',
      location: 'Nigeria',
      bio: 'Развиваю культуру бонсай в Западной Африке. Тропические виды и фикусы.',
      joined: 'Июль 2021',
      avatar: 'О',
      stats: [
        { label: 'Деревьев', value: '27' },
        { label: 'Публикаций', value: '76' },
        { label: 'Подписчиков', value: '2.0K' },
      ],
      specialization: ['Фикус', 'Баобаб', 'Тропические виды'],
      gallery: [
        'assets/mainBonsay.png',
        'assets/mainBonsay.png',
        'assets/mainBonsay.png',
        'assets/mainBonsay.png',
      ],
    },
    {
      id: 'b5',
      name: 'Ниови Мирихава',
      location: 'Japan',
      bio: 'Традиционная школа бонсай. Практикую стиль Bunjin и Literati более 15 лет.',
      joined: 'Январь 2020',
      avatar: 'Н',
      stats: [
        { label: 'Деревьев', value: '45' },
        { label: 'Публикаций', value: '61' },
        { label: 'Подписчиков', value: '4.4K' },
      ],
      specialization: ['Bunjin', 'Literati', 'Сосна', 'Кипарис'],
      gallery: [
        'assets/mainBonsay.png',
        'assets/mainBonsay.png',
        'assets/mainBonsay.png',
        'assets/mainBonsay.png',
      ],
    },
  ],
}

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    selectUser(state, action: PayloadAction<string>) {
      state.selectedUserId = action.payload
    },
    clearSelectedUser(state) {
      state.selectedUserId = null
    },
  },
})

export const { selectUser, clearSelectedUser } = usersSlice.actions
export default usersSlice.reducer
