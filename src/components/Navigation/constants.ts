export interface NavItem {
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href?: string;
}

export const NAV_ITEMS: NavItem[] = [
  {
    label: 'Articles',
    children: [
      {
        label: 'France',
        subLabel: 'Ligue 1',
        href: '#',
      },
      {
        label: 'Espagne',
        subLabel: 'Liga',
        href: '#',
      },
      {
        label: 'Italie',
        subLabel: 'Serie A',
        href: '#',
      },
      {
        label: 'Allemagne',
        subLabel: 'Bundesliga',
        href: '#',
      },
    ],
  },
  {
    label: 'Actus',
    children: [
      {
        label: 'Job Board',
        subLabel: 'Find your dream design job',
        href: '#',
      },
      {
        label: 'Freelance Projects',
        subLabel: 'An exclusive list for contract work',
        href: '#',
      },
    ],
  },
  {
    label: 'Forum',
    href: '#',
  },
  {
    label: 'Contact',
    href: '#',
  },
];
