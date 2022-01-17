import { Store } from './types/types';

export const buildParams = (filterData: Store | undefined) => {
  if (filterData === undefined) {
    return undefined;
  }

  return { storeId: filterData.id };
};
