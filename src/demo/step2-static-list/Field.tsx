import { useResourceContext } from "./ResourceContext";

export const Field: React.FunctionComponent<{
  name: string;
}> = ({ name }) => {
  const { resource } = useResourceContext();

  return <div>{resource[name]}</div>;
};
