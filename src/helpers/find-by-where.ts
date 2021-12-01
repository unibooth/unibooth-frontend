export const findByWhere = <T>(where: Partial<T>, entities: T[]): T[] => {
  return entities.filter((v) => {
    return Object.entries(where).every(([key, value]) => {
      return value === v[key as keyof T];
    });
  });
};
