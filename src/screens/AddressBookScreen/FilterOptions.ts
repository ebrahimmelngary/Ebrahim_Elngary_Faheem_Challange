type Filters = {
  id: number;
  title: string;
  value: string;
};
export const filters: Filters[] = [
  { id: 0, title: 'All', value: 'all' },
  { id: 1, title: 'Male', value: 'male' },
  { id: 2, title: 'Female', value: 'female' },
];
