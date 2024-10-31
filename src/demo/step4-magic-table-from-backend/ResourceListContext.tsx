import { createContext, PropsWithChildren, useContext } from "react";
import { Resource } from "./ResourceContext";

type ResourceListContextType = {
  resources: Resource[];
};

const ResourceListContext = createContext<null | ResourceListContextType>(null);

export const useResourceListContext = () => {
  const context = useContext(ResourceListContext);

  if (!context) {
    throw new Error(
      "useResourceListContext must be used within a ResourceListContextProvider",
    );
  }

  return context;
};

export const ResourceListContextProvider: React.FunctionComponent<
  PropsWithChildren<{
    resources: Resource[];
  }>
> = ({ resources, children }) => {
  console.log("providing resources", resources);
  return (
    <ResourceListContext.Provider value={{ resources }}>
      {children}
    </ResourceListContext.Provider>
  );
};
