export const filterByBrandId = <T extends { brandId: string }>(values: Array<T>, brandId: string) => {
  return values.filter((value) => value.brandId === brandId);
};
