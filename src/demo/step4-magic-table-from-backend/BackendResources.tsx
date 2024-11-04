import { PropsWithChildren, useEffect, useState } from "react";
import { ResourceListContextProvider } from "./ResourceListContext";

type Props = PropsWithChildren<{
  url: string;
}>;
export const BackendResources = ({ url, children }: Props) => {
  const [data, setData] = useState<any>();

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
  }, [url]);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <ResourceListContextProvider resources={data}>
      {children}
    </ResourceListContextProvider>
  );
};
