export type Gender = 'FEMALE' | 'MALE' | 'OTHER';

export type SaleByGender = {
  gender: Gender;
  sum: number;
};

export type Store = {
  id: number;
  name: string;
};

export type SalesSummary = {
  sum: number;
};
