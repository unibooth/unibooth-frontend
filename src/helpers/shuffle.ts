export const shuffle = <T>(entities: T[]): T[] => [...entities].sort(() => 0.5 - Math.random());
