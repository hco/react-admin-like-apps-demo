import { PropsWithChildren } from "react";
import { createContext, useContext } from "react";

export type Resource = any;
type ResourceContextType = {
  resource: Resource;
};

const ResourceContext = createContext<null | ResourceContextType>(null);

export const useResourceContext = () => {
  const context = useContext(ResourceContext);

  if (!context) {
    throw new Error(
      "useResourceContext must be used within a ResourceContextProvider",
    );
  }

  return context;
};

export const ResourceContextProvider: React.FunctionComponent<
  PropsWithChildren<{
    resource: Resource;
  }>
> = ({ resource, children }) => {
  return (
    <ResourceContext.Provider value={{ resource }}>
      {children}
    </ResourceContext.Provider>
  );
};
