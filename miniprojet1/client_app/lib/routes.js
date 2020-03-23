import {
  AlertCircle,
  Bold,
  Droplet,
  Gift,
  HelpCircle,
  Home,
  Image,
  Link,
  MapPin,
  MessageCircle,
  Navigation,
  PieChart,
  Sidebar,
  Terminal,
  Type,
  Underline,
  User
} from 'react-feather';

export default [
  {
    path: '/',
    name: 'Dashboard',
    icon: <Home strokeWidth={1} size={16} />
  },

  {
    name: 'Authentication',
    icon: <User strokeWidth={1} size={16} />,
    children: [
      {
        path: '/signin',
        name: 'Signin'
      },
      {
        path: '/signup',
        name: 'Signup'
      },
      {
        path: '/forgot',
        name: 'Forgot'
      },
      {
        path: '/lockscreen',
        name: 'Lockscreen'
      }
    ]
  },
  {
    name: 'Error',
    icon: <AlertCircle strokeWidth={1} size={16} />,
    children: [
      {
        path: '/thisroutedoesntwork',
        name: '404'
      },
      {
        path: '/500',
        name: 'Error'
      }
    ]
  },
  {
    name: 'General elements',
    icon: <Bold strokeWidth={1} size={16} />,
    children: [
      {
        path: '/general/button',
        name: 'Button'
      },
      {
        path: '/general/icon',
        name: 'Icon'
      }
    ]
  }
];
