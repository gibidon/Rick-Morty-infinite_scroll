import React, { Suspense } from 'react'
import { PageNames } from './PageNames'

interface LazyPageProps {
  name: string
}

function extractComponentByName(pageName: PageNames): React.ExoticComponent<any> {
  return React.lazy(() => import(`./${pageName}`).then((module) => ({ default: module[pageName] })))
}

export function LazyPage<T extends { name: PageNames }>(props: T) {
  //??
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
