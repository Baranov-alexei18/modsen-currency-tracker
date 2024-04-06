export const PATH = {
  HOME: '/',
  TIMELINE: '/timeline',
  BANK_CARD: '/bank-card',
  CONTACT: '/contact',
  NOT_FOUND: '/*',
};

export const ROUTER_LINKS = [
  {
    id: 1,
    path: PATH.HOME,
    name: 'Home',
  },
  {
    id: 2,
    path: PATH.TIMELINE,
    name: 'Timeline',
  },
  {
    id: 3,
    path: PATH.BANK_CARD,
    name: 'Bank card',
  },
  {
    id: 4,
    path: PATH.CONTACT,
    name: 'Contact',
  },
];

export default { ROUTER_LINKS, PATH };
