export const getById = <Entity extends { id: number }>(id: number, entities: Entity[]): Entity => {
  return entities.find((v) => v.id === id)!;
};
