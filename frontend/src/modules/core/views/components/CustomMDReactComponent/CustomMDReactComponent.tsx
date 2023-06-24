import ReactMarkdown, { Options } from "react-markdown";

type Props = Omit<Options, "children"> & {
  text: string | number;
};

const CustomMDReactComponent = ({ text = "", ...rest }: Props) => (
  <ReactMarkdown {...rest}>{String(text)}</ReactMarkdown>
);

export default CustomMDReactComponent;
