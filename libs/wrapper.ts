import assert from 'assert';

export const withoutEmpty = <T>(value: T, message?: string | null) => {
  assert(value !== undefined && value !== null, message || 'value can not be empty');

  return value as NonNullable<T>;
};

export const withEmpty = <T>(value: T, message?: string | null) => {
  assert(value === undefined || value === null, message || 'value should be empty');
};
