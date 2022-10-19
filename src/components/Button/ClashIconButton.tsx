import React from "react";
import styled from "styled-components";

import { compute, genTextShadow } from "../../utils/style-utils";

import ClashExpansion from "../ClashExpansion";

const ButtonBody = styled.div<{
  size: {
    width: string;
    height: string;
  };
  scale: number;
}>`
  font-family: "Supercell Magic";
  -webkit-tap-highlight-color: transparent;
  box-sizing: border-box;
  position: relative;
  color: #fff;
  padding: ${({ scale }) => compute(scale, [0.6, 0.4])} 0;
  border-radius: ${({ scale }) => compute(scale, [5])};
  border: none;
  outline: none;
  cursor: pointer;
  box-shadow: ${({ scale }) => compute(scale, [0, 0, 0, 1.2])} #192235;
  background-color: #75d9f0;
  user-select: none;
  transition: 0.2s;
  width: ${({ size }) => size.width};
  height: ${({ size }) => size.height};
`;

const ButtonInner = styled.div<{ scale: number }>`
  padding-bottom: ${({ scale }) => compute(scale, [3])};
  height: 100%;
  width: 100%;
  background: #2457ab;
  border-radius: ${({ scale }) => compute(scale, [6, 6, 3, 3])};
  box-sizing: border-box;
`;

const ButtonTopTextBox = styled.div<{ highlight: boolean; scale: number }>`
  color: #fff;
  letter-spacing: ${({ scale }) => compute(scale, [0.8])};
  box-sizing: border-box;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${({ scale }) => compute(scale, [0.4, 1.8, 2.6])};
  background: #4394f8;
  border-radius: ${({ scale }) => compute(scale, [6, 6, 5, 5])};
  position: relative;
  overflow: hidden;

  --text-shadow-color: #162c5d;
  ${({ scale }) => genTextShadow(scale, [0.65, 0.65, 1.3, 0.65])}

  &::after {
    content: ${({ highlight }) => (highlight ? '""' : "none")};
    min-width: 4px;
    min-height: 3px;
    width: ${({ scale }) => compute(scale, [4])};
    height: ${({ scale }) => compute(scale, [3])};
    background: #c9eafe;
    position: absolute;
    top: ${({ scale }) => compute(scale, [0.4])};
    right: 0;
    border-radius: 50%;
    transform: rotate(45deg);
  }
`;

const ButtonTopText = styled.div<{
  size: {
    width: string;
    height: string;
  };
  scale: number;
  shine: boolean;
  fontsize?: string;
}>`
  box-sizing: border-box;

  z-index: 100;
  font-size: ${({ fontsize, scale }) => {
    return fontsize || compute(scale, [13]);
  }};
  box-shadow: ${({ scale }) => compute(scale, [0, 1, 0.6, 0.4])} #00000022;
  background: #4fadf7;
  width: 100%;
  height: 100%;
  border-radius: ${({ scale }) => compute(scale, [4])};
  display: flex;
  align-items: center;
  justify-content: center;

  &::before {
    content: ${({ shine }) => (shine ? '""' : "none")};
    background: #ffffff2b;
    width: 96%;
    height: 40%;
    display: block;
    position: absolute;
    z-index: -1;
    float: left;
    top: ${({ scale }) => compute(scale, [2])};
    left: 2%;
    border-radius: ${({ scale }) => compute(scale, [3])};
  }
`;

const ClashIconButton = (props: {
  size?: {
    w?: string;
    h?: string;
    font?: string;
  };
  scale?: number;
  children: any;
  shine?: any;
  highlight?: boolean;
}) => {
  const scale = props.scale || 1;
  const shine = props.shine ? true : false;
  const highlight = props.highlight === true ? true : false;
  const size = {
    width: props.size?.w || `${24 * scale}px`,
    height: props.size?.h || `${24 * scale}px`,
  };

  return (
    <ClashExpansion>
      <ButtonBody size={size} scale={scale}>
        <ButtonInner scale={scale}>
          <ButtonTopTextBox highlight={highlight} scale={scale}>
            <ButtonTopText
              fontsize={props.size?.font}
              size={size}
              scale={scale}
              shine={shine}
            >
              {props.children}
            </ButtonTopText>
          </ButtonTopTextBox>
        </ButtonInner>
      </ButtonBody>
    </ClashExpansion>
  );
};

export default ClashIconButton;
