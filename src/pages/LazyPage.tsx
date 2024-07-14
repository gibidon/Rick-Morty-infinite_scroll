import React, { Suspense } from 'react'

function extractComponentByName(name: string) {
  return React.lazy(() =>
    import(`../components/${name}`).then((module) => ({ default: module[name] })),
  )
}

export function LazyPage(props: any) {
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
