import { isEmpty } from './is-empty';

export function isNotEmpty<T>(value: T | null | undefined): value is T {
  return !isEmpty(value);
}
