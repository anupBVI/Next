import styled from "styled-components";
import * as style from "./Button.style";

interface IButton {
  label: string;
  onClick?: () => void;
  
  lIcon?: React.ReactNode;
  rIcon?: React.ReactNode;

  background?: string;
  color?: string;
  rounded?: boolean;
  curved?: boolean;

  primary?: boolean;
  secondary?: boolean;
  tertiary?: boolean;
  danger?: boolean;
}

const Box = styled.div`
  display: flex;
  width: 80%;
  justify-content: space-around;
  margin: 0px auto;
  align-items:center;

  div{
    display: flex;
    align-items:center
  }
`;

const ALLOWED_BUTTON_PROPS = ["rounded", "curved"];

const Button = (props: IButton) => {
  const { label, onClick, lIcon, rIcon, rounded, curved , primary,
    secondary,
    tertiary,
    danger } = props;
  let CustomBtn = style.Button;

  if (
    (rounded ? 1 : 0) + (curved ? 1 : 0) > 1 ||
    (lIcon ? 1 : 0) + (rIcon ? 1 : 0) > 1 ||
    (primary ? 1 : 0) + (secondary ? 1 : 0) + (tertiary ? 1 : 0) +  (danger ? 1 : 0) > 1 
  ) {
    throw new Error(
      "Only one of the `rounded` or `curved` props can be provided."
    );
  }

  return (
    <CustomBtn {...props}>
      <Box>
        {lIcon && (
          <>
            <div>{lIcon}</div>
            <div>{label}</div>
          </>
        )}
        {rIcon && (
          <>
            <div>{label}</div>
            <div>{rIcon}</div>
          </>
        )}

        {!lIcon && !rIcon && label}
      </Box>
    </CustomBtn>
  );
};

export default Button;
