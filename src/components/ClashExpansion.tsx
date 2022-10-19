import React, { useState } from "react";
import styled, { keyframes } from "styled-components";

const expansionAnm = keyframes`
  0% {
    transform: scale(0.93);
  }
  30% {
    transform: scale(1.07);
  }
  100% {
    transform: scale(1);
  }
`;

const Expansion = styled.div`
  box-sizing: border-box;
  display: inline-block;
  transition: 0.2s;
  height: auto;
  &:active {
    transition: 0.2s;
    transform: scale(0.93);
  }
  &.cc-clicked {
    animation: ${expansionAnm} 0.34s;
  }
`;

const ClashExpansion = (props: { children: any }) => {
  const [clicked, setClicked] = useState(false);
  return (
    <Expansion
      className={clicked ? "cc-clicked" : ""}
      onTouchStart={() => {
        setClicked(false);
      }}
      onMouseDown={() => {
        setClicked(false);
      }}
      onClick={() => {
        setClicked(true);
      }}
    >
      {props.children}
    </Expansion>
  );
};

export default ClashExpansion;
