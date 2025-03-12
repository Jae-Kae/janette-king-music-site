import {
  FaAddressCard,
  FaEnvelope,
  FaEye,
  FaHome,
  FaShoppingBag,
} from 'react-icons/fa'

const navData = [
  {
    name: 'Home',
    path: '/',
    icon: <FaHome size={36} />,
  },
  {
    name: 'Learn',
    path: '/learn',
    icon: <FaAddressCard size={36} />,
  },
  {
    name: 'Watch',
    path: '/watch',
    icon: <FaEye size={36} />,
  },
  {
    name: 'Shop',
    path: '/shop',
    icon: <FaShoppingBag size={36} />,
  },
  {
    name: 'Contact',
    path: '/contact',
    icon: <FaEnvelope size={36} />,
  },
]

export default navData
