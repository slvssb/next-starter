export const slugify = (value: string) => {
  const slug = value
    .replace(/[^A-Za-z0-9\s]/g, '-')
    .replace(/\s+/g, '-')
    .trim()
    .toLowerCase()

  return slug
}
