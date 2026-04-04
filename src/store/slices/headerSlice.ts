import { createSlice } from '@reduxjs/toolkit'

export interface NavLink {
  id: string
  label: string
  href: string
  active: boolean
}

interface HeaderState {
  links: NavLink[]
}

const initialState: HeaderState = {
  links: [
    { id: 'media',    label: 'Лента',      href: '#', active: false },
    { id: 'news',     label: 'Конкурсы',    href: '#', active: false },
    { id: 'afisha',   label: 'База знаний',      href: '#', active: false },
    { id: 'about',    label: 'Сообщество',  href: '#', active: false },
    { id: 'login',    label: 'Войти | Регистрация', href: '#', active: false },
  ],
}

const headerSlice = createSlice({
  name: 'header',
  initialState,
  reducers: {
    setActiveLink(state, action: { payload: string }) {
      state.links.forEach(link => {
        link.active = link.id === action.payload
      })
    },
  },
})

export const { setActiveLink } = headerSlice.actions
export default headerSlice.reducer
