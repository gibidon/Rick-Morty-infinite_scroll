export const internalPaths = {
  home: '/',
  about: '/about',
  articles: '/articles',
  article: (alias: string): string => `/articles/${alias}`,
}

export enum intPaths {
  home = '/',
  characters = '/characters',
  character = '/character/:id',
}
