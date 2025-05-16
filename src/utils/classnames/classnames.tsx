type ObjectType = Record<string, any>;

export type CxArgs =
  | string
  | number
  | ObjectType
  | Array<string | number | ObjectType | null | undefined>
  | null
  | undefined;

export function c(...args: CxArgs[]): { className: string } {
  const classNames: string[] = [];

  for (const arg of args) {
    if (arg == null || !arg) {
      continue;
    }
    if (typeof arg === "string" || typeof arg === "number") {
      classNames.push(arg.toString().trim());
    } else if (Array.isArray(arg)) {
      arg.forEach(
        value => value && classNames.push(value.toString()),
      );
    } else {
      Object.entries(arg).forEach(
        ([key, value]) => value && classNames.push(key),
      );
    }
  }
  return { className: classNames.join(" ").trim() };
}
