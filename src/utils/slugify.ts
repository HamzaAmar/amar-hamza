export const slugify = (text: string) =>
  text
    .toString()
    .normalize("NFD")
    .replace(/[\u0300-\u036F]/g, "")
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "")
    .replace(/-{2,}/g, "-");
