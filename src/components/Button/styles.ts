import { styled } from "@mui/material";
import { CircularProgress } from "@mui/material";
import { COLORS } from "../../utils/colors";

export const StyledButton = styled("button")({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: "#fff",
  background: "linear-gradient(90deg, #8456EC 3.25%, #E87BF8 100%)",
  left: 'calc(50% - 187px/2)',
  fontWeight: "normal",
  padding: "16px",
  width: "187px",
  border: "none",
  height: "50px",
  borderRadius: "10px",
  whiteSpace: "nowrap",
  fontSize: "1.2rem",
  fontewight: "400",
  cursor: "pointer",
  gap: "10px",

  "&:hover": {
    transform: "scale(1.005)",
    opacity: "0.6",
  },
  "&:active": {
    transform: "scale(0.98)",
    /* Scaling button to 0.98 to its original size */
    boxShadow: "3px 2px 22px 1px rgba(0, 0, 0, 0.24)",
    /* Lowering the shadow */

    opacity: "0.7",
    transition: "0.5s",
  },
  "&:disabled": {
    PointerEvent: "none",
    opacity: "0.6",
    transform: "none",
    /* Scaling button to 0.98 to its original size */
    boxShadow: "none",
    /* Lowering the shadow */
    transition: "none !important",
  }
})

export const StyledCircularProgress = styled(CircularProgress)({
  color: COLORS.white,
  marginLeft: "0.5rem",
});