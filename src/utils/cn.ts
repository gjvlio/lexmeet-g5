/**
 * Tiny classNames helper — joins truthy class strings.
 * Keeps components readable without pulling in clsx.
 */
export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(' ');
}
