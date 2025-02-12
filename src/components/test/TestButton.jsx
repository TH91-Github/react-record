import './button.css';

export const TestButton = ({
  label,
  ...props
}) => {
  return (
    <button
      type="button"
      {...props} 
    >
      {label}
    </button>
  );
}
