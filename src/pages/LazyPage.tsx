import React, { Suspense } from 'react'
import { PAGE_NAMES } from './PageNames'

function extractComponentByName(pageName: PAGE_NAMES): React.ExoticComponent<any> {
  return React.lazy(() => import(`./${pageName}`).then((module) => ({ default: module[pageName] })))
}

export function LazyPage<T extends { name: PAGE_NAMES }>(props: T) {
  //TODO
  const Component = extractComponentByName(props.name)

  return (
    <Suspense fallback="Loading..">
      <Component {...props} />
    </Suspense>
  )
}

export function loadLazyPage(name: string): React.LazyExoticComponent<any> {
  const component = React.lazy(() =>
    import(`./${name}`).then((module) => ({ default: module[name] })),
  )

  return component
}
