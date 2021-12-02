export const getById = <Entity extends { id: number }>(
  id: number | string,
  entities: Entity[],
): Entity => {
  return entities.find((v) => v.id === Number(id))!;
};
