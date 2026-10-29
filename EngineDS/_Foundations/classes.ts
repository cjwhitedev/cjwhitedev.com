type ClassPart = string | false | null | undefined;

export const joinClasses = (...parts: ClassPart[]) =>
  parts.filter(Boolean).join(" ");

// Returns the modifier class, or undefined if the value is the default
export const nonDefaultModifier = (
  prefix: string,
  value: string,
  defaultValue: string,
) => (value === defaultValue ? undefined : `${prefix}${value}`);
