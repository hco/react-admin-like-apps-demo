import { PropsWithChildren } from "react";
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
          {children}
        </ResourceContextProvider>
      ))}
    </>
  );
};
