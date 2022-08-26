interface Props {
  label: string;
  [x: string]: any;
}
const Label = ({ label, ...props }: Props) => {
  return <h1 {...props}>{label}</h1>;
};

export default Label;
