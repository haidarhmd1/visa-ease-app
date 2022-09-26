export const columns = [
  {
    name: 'Title',
    selector: (row: { title: any }) => row.title,
  },
  {
    name: 'Year',
    selector: (row: { year: any }) => row.year,
  },
];

export const data = [
  {
    id: 1,
    title: 'Beetlejuice',
    year: '1988',
  },
  {
    id: 2,
    title: 'Ghostbusters',
    year: '1984',
  },
];
