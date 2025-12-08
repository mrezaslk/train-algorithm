import { ReactElement, useState } from "react";

import Home from "@mui/icons-material/Home";
import HomeOutlined from "@mui/icons-material/HomeOutlined";
import "./styles.scss";

type IconProps = {
  color: string;
  size?: "large" | "medium" | "small";
};

type IconState = {
  isHovered: boolean;
};

const HomeIcon = ({ color, size }: IconProps) => (
  <Home style={{ color }} fontSize={size} />
);
const HomeOutlinedIcon = ({ color, size }: IconProps) => (
  <HomeOutlined style={{ color }} fontSize={size} />
);

type ButtonProps = {
  renderIcon: (props: IconProps, state: IconState) => ReactElement;
  size?: "large" | "normal";
  appearance?: "primary" | "secondary";
};
const Button = ({
  appearance = "primary",
  size = "normal",
  renderIcon,
}: ButtonProps) => {
  const [isHovered, setIsHovered] = useState(false);

  // create default props as before
  const defaultIconProps: IconProps = {
    size: size === "large" ? "large" : "medium",
    color: appearance === "primary" ? "white" : "black",
  };

  // and just pass them to the function
  return (
    <button
      onMouseOver={() => setIsHovered(true)}
      onMouseOut={() => setIsHovered(false)}
      className={`button ${appearance}`}
    >
      Submit {renderIcon(defaultIconProps, { isHovered })}
    </button>
  );
};
export default function App() {
  return (
    <>
      <h4>Change icon's color on button's hover</h4>
      <Button
        renderIcon={(props, state) => (
          <HomeIcon {...props} color={state.isHovered ? "red" : "black"} />
        )}
      />
      <h4>Change icon on button's hover</h4>
      <Button
        renderIcon={(props, state) =>
          state.isHovered ? (
            <HomeOutlinedIcon {...props} />
          ) : (
            <HomeIcon {...props} />
          )
        }
      />
    </>
  );
}
