export const withoutEmpty = <T>(value: T | (() => T)) => {
  const result = value instanceof Function ? value() : value;
  if (result === null || result === undefined) {
    throw new Error('value is empty!');
  }

  return result as NonNullable<T>;
};
