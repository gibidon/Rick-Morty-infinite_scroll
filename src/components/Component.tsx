import React, { Suspense } from 'react'

function extractComponentByName(name: string) {
  return React.lazy(() =>
    import(`../components/${name}`).then((module) => ({ default: module[name] })),
  )
}

export function Component(props: any) {
  //??
  //TODO
  const Component = extractComponentByName(props.name)

  return (
    <Suspense fallback="Loading..">
      <Component {...props} />
    </Suspense>
  )
}
