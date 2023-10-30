import type { ComponentProps, ComponentType, PropsWithChildren } from 'react';

function combineComponents(components: ComponentType<PropsWithChildren>[]) {
  return components.reduce(
    (AccumulatedComponents, CurrentComponent) => {
      return ({ children }: ComponentProps<typeof CurrentComponent>) => {
        return (
          <AccumulatedComponents>
            <CurrentComponent>{children}</CurrentComponent>
          </AccumulatedComponents>
        );
      };
    },
    ({ children }: PropsWithChildren) => <>{children}</>
  );
}

export default combineComponents;
