import { StyledButton, StyledCircularProgress } from "./styles";

export interface Props {
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  disabled?: boolean;
  loading?: boolean;
  extraStyles?: Record<string, string>;
}

export const Button: React.FC<Props> = ({
  loading,
  children,
  onClick,
  disabled,
  extraStyles,
}) => {
  return (
    <StyledButton
      loading={loading}
      onClick={onClick}
      disabled={disabled}
      style={extraStyles}
    >
      {children}
      {loading && <StyledCircularProgress size={15} />}
    </StyledButton>
  );
};