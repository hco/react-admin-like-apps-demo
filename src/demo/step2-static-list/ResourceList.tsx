import {
  Children,
  cloneElement,
  isValidElement,
  PropsWithChildren,
} from "react";
import { Resource, ResourceContextProvider } from "./ResourceContext";

type Props = PropsWithChildren<{
  resources: Resource[];
}>;
export const ResourceList: React.FunctionComponent<Props> = ({
  resources,
  children,
}) => {
  return (
    <>
      {resources.map((resource, index) => (
        <ResourceContextProvider key={index} resource={resource}>
          {Children.map(children, (child) => {
            if (!isValidElement(child)) {
              return null;
            }

            return cloneElement(child);
          })}
        </ResourceContextProvider>
      ))}
    </>
  );
};
