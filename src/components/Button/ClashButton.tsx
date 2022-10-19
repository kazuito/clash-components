import React from "react";
import styled from "styled-components";

import { compute, genTextShadow } from "../../utils/style-utils";
import ClashExpansion from "../ClashExpansion";

const ButtonBody = styled.button<{
  width: string;
  height: string;
  scale: number;
}>`
  font-family: "Supercell Magic";
  -webkit-tap-highlight-color: transparent;
  box-sizing: border-box;
  position: relative;
  color: #fff;
  padding: ${({ scale }) => compute(scale, [1.2, 0.4])} 0;
  border-radius: ${({ scale }) => compute(scale, [5])};
  border: none;
  outline: none;
  cursor: pointer;
  box-shadow: ${({ scale }) => compute(scale, [0, 0.6, 0, 1.4])} #192235;
  background-color: #75d9f0;
  user-select: none;
  transition: 0.2s;
  overflow: hidden;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
`;

const ButtonOuter = styled.div<{ scale: number }>`
  background: #2457ab;
  padding-bottom: ${({ scale }) => compute(scale, [3])};
  border-radius: ${({ scale }) => compute(scale, [6, 6, 3, 3])};
  border-top: ${({ scale }) => compute(scale, [1.2])} solid #5ac3f8;
  height: 100%;
  box-sizing: border-box;
`;

const ButtonInner = styled.div<{ scale: number }>`
  padding: ${({ scale }) => compute(scale, [1, 1.8, 2])};
  border-radius: ${({ scale }) => compute(scale, [5])};
  background: #4394f8;
  border-bottom: ${({ scale }) => compute(scale, [0.4])} solid #5ca7f8;
  height: 100%;
  box-sizing: border-box;
`;

const ButtonTopTextBox = styled.div<{ highlight: boolean; scale: number }>`
  background-color: #4fadf7;
  padding: ${({ scale }) => compute(scale, [14])};
  border-radius: ${({ scale }) => compute(scale, [3])};
  border-top: ${({ scale }) => compute(scale, [0.2])} solid #347eed;
  border-right: ${({ scale }) => compute(scale, [0.4])} solid #347eed;
  border-left: ${({ scale }) => compute(scale, [0.4])} solid #347eed;
  border-bottom: ${({ scale }) => compute(scale, [1.6])} solid #347eed;
  color: #fff;
  letter-spacing: ${({ scale }) => compute(scale, [0.8])};
  box-sizing: border-box;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  --text-shadow-color: #162c5d;
  ${({ scale }) => genTextShadow(scale, [1, 1, 2, 1])}

  position: relative;
  overflow: hidden;

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
  scale: number;
  shine: boolean;
  fontsize?: string;
}>`
  background: transparent;
  z-index: 100;
  font-size: ${({ fontsize, scale }) => {
    return fontsize || compute(scale, [14]);
  }};

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

const ClashButton = (props: {
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
  const highlight = props.highlight === false ? false : true;

  return (
    <ClashExpansion>
      <ButtonBody
        width={props.size?.w || "auto"}
        height={props.size?.h || "auto"}
        scale={scale}
      >
        <ButtonOuter scale={scale}>
          <ButtonInner scale={scale}>
            <ButtonTopTextBox highlight={highlight} scale={scale}>
              <ButtonTopText
                fontsize={props.size?.font}
                scale={scale}
                shine={shine}
              >
                {props.children}
              </ButtonTopText>
            </ButtonTopTextBox>
          </ButtonInner>
        </ButtonOuter>
      </ButtonBody>
    </ClashExpansion>
  );
};

export default ClashButton;
