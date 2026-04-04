import { createSlice } from '@reduxjs/toolkit'

export interface Post {
  id: string
  author: string
  avatar: string
  image: string
  likes: number
  comments: number
  timeAgo: string
  featured?: boolean
}

export interface Blogger {
  id: string
  name: string
  avatar: string
  posts: number
}

export interface Comment {
  id: string
  author: string
  avatar: string
  text: string
  timeAgo: string
  postTitle: string
}

interface CommunityState {
  posts: Post[]
  topBloggers: Blogger[]
  latestComments: Comment[]
}

const initialState: CommunityState = {
  posts: [
    {
      id: '1',
      author: 'Эмма Лукас',
      avatar: '',
      image: 'assets/mainBonsay.png',
      likes: 142,
      comments: 34,
      timeAgo: '2 ч назад',
      featured: true,
    },
    {
      id: '2',
      author: 'Рашид Омаров',
      avatar: '',
      image: 'assets/mainBonsay.png',
      likes: 87,
      comments: 15,
      timeAgo: '4 ч назад',
    },
    {
      id: '3',
      author: 'Ровна Рами',
      avatar: '',
      image: 'assets/mainBonsay.png',
      likes: 63,
      comments: 9,
      timeAgo: '6 ч назад',
    },
    {
      id: '4',
      author: 'Фарида Хасан',
      avatar: '',
      image: 'assets/mainBonsay.png',
      likes: 101,
      comments: 22,
      timeAgo: '8 ч назад',
    },
    {
      id: '5',
      author: 'Нэй Чжэн',
      avatar: '',
      image: 'assets/mainBonsay.png',
      likes: 55,
      comments: 7,
      timeAgo: '10 ч назад',
    },
    {
      id: '6',
      author: 'Камила Янг',
      avatar: '',
      image: 'assets/mainBonsay.png',
      likes: 78,
      comments: 18,
      timeAgo: '12 ч назад',
    },
    {
      id: '7',
      author: 'Иван Тихонов',
      avatar: '',
      image: 'assets/mainBonsay.png',
      likes: 44,
      comments: 11,
      timeAgo: '1 д назад',
    },
  ],
  topBloggers: [
    { id: 'b1', name: 'Агата Зальтед',    avatar: '', posts: 128 },
    { id: 'b2', name: 'Бонсай Грандвью',  avatar: '', posts: 97  },
    { id: 'b3', name: 'Жорам Гомаа',      avatar: '', posts: 84  },
    { id: 'b4', name: 'Одолупо Собсумба', avatar: '', posts: 76  },
    { id: 'b5', name: 'Ниови Мирихава',   avatar: '', posts: 61  },
  ],
  latestComments: [
    {
      id: 'c1',
      author: 'Мара О. Мрева',
      avatar: '',
      text: 'Потрясающее дерево! Сколько лет вы его формировали?',
      timeAgo: '30 мин назад',
      postTitle: 'Каскадный можжевельник',
    },
    {
      id: 'c2',
      author: 'Лукас Перрен',
      avatar: '',
      text: 'Отличная работа с проволокой, очень вдохновляет.',
      timeAgo: '1 ч назад',
      postTitle: 'Сосна в стиле Сякан',
    },
    {
      id: 'c3',
      author: 'Юки Танака',
      avatar: '',
      text: 'Какую почвенную смесь вы используете для этого вида?',
      timeAgo: '3 ч назад',
      postTitle: 'Фикус Бенджамина',
    },
  ],
}

const communitySlice = createSlice({
  name: 'community',
  initialState,
  reducers: {},
})

export default communitySlice.reducer
