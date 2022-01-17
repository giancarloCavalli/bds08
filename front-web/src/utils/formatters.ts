import { Gender } from '../types/types';

export const formatPrice = (value: number) => {
  return new Intl.NumberFormat('pt-BR', {
    minimumFractionDigits: 2,
    style: 'currency',
    currency: 'BRL'
  }).format(value);
};

export const formatGender = (gender: Gender) => {
  const genderMap = {
    FEMALE: 'Feminino',
    MALE: 'Masculino',
    OTHER: 'Outro'
  };

  return genderMap[gender];
};
