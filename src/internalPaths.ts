export const internalPaths = {
  home: '/',
  about: '/about',
  articles: '/articles',
  article: (alias: string): string => `/articles/${alias}`,
}