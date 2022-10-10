import {
  IconEPassport,
  IconLayoutDashboard,
  IconSettings,
  IconUser,
} from '@tabler/icons';

export const mainLinks = [
  { link: '/', label: 'Dashboard', icon: IconLayoutDashboard },
  {
    link: '/visaApplication',
    label: 'Visa Applications',
    icon: IconEPassport,
  },
];

export const footerLinks = [
  { link: '/account', label: 'Account', icon: IconUser },
  { link: '/settings', label: 'Settings', icon: IconSettings },
];
