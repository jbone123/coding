import React, { useState } from "react";
// import styled from "styled-components";

// const Switch = () => {
//   return <StyledSwitch>Switch hello2</StyledSwitch>;
// };

// const StyledSwitch = styled.h1`
//   color: hotpink;
// `;
// export default Switch;

//2

import { css } from "@emotion/core";
import { motion } from "framer-motion";
const Switch = () => {
  const [state, setstate] = useState(false);
  const handleOnTap = () => {
    setstate(!state);
  };
  return (
    <motion.div
      className="container"
      css={css`
        width: 100px;
        height: 50px;
        background: whitesmoke;
        border-radius: 50px;
        position: relative;
      `}
      onTap={handleOnTap}
    >
      <motion.div
        className="ball"
        css={css`
          width: 50px;
          height: 50px;
          background: royalblue;
          border-radius: 50%;
          position: absolute;
          left: ${state ? "unset" : 0};
          right: ${state ? 0 : "unset"};
        `}
        positionTransition
      ></motion.div>
    </motion.div>
  );
};
export default Switch;
