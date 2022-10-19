import React, { useState } from "react";
import styled from "styled-components";
import { JsxElement } from "typescript";

import { ClashButton, ClashExpansion, ClashIconButton } from "../../src/";

const Container = styled.div`
  margin: 0 auto;
  box-sizing: border-box;
  max-width: 1000px;
  width: 100%;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const Section = styled.div`
  min-height: 80px;
  box-sizing: border-box;
  background: #00000033;
  border-radius: 8px;
  padding: 16px 24px;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const ComponentBox = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
`;

const CodeBox = styled.div`
  overflow: scroll;
  font-family: monospace;
  font-size: 14px;
  border-radius: 4px;
  padding: 12px;
  background: #1e1e1e;
  color: white;
  width: 50%;
  white-space: nowrap;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const Color = styled.span<{ color: string }>`
  color: ${({ color }) => color};
`;

function colorize(arr: Array<Array<string | number>>) {
  return arr
    .map((elem, i) => {
      let color;
      switch (Number(elem[1])) {
        case 0:
          color = "#D4D4D4";
          break;
        case 1:
          color = "#808080";
          break;
        case 2:
          color = "#4EC9B0";
          break;
        case 3:
          color = "#569CD6";
          break;
        case 4:
          color = "#9CDCFE";
          break;
      }
      return (
        <Color key={i} color={String(color)}>
          {elem[0]}
        </Color>
      );
    })
    .reduce((prev, curr) => [prev, curr]);
}

function App() {
  return (
    <Container>
      <Section>
        <ComponentBox>
          <ClashButton>Party!</ClashButton>
        </ComponentBox>
        <CodeBox>
          {colorize([
            ["<", 1],
            ["ClashButton", 2],
            [">", 1],
            ["Party!", 0],
            ["</", 1],
            ["ClashButton", 2],
            [">", 1],
          ])}
        </CodeBox>
      </Section>
      <Section>
        <ComponentBox>
          <ClashIconButton>?</ClashIconButton>
          <ClashIconButton scale={2}>?</ClashIconButton>
        </ComponentBox>
        <CodeBox>
          {colorize([
            ["<", 1],
            ["ClashIconButton", 2],
            [">", 1],
            ["?", 0],
            ["</", 1],
            ["ClashIconButton", 2],
            [">", 1],
          ])}
          <br />
          {colorize([
            ["<", 1],
            ["ClashIconButton", 2],
            [" scale", 4],
            ["=", 0],
            ["{", 3],
            ["2", 0],
            ["}", 3],
            [">", 1],
            ["?", 0],
            ["</", 1],
            ["ClashIconButton", 2],
            [">", 1],
          ])}
        </CodeBox>
      </Section>
      <Section>
        <ComponentBox>
          <ClashExpansion>
            <span style={{ color: "white", fontSize: "32px" }}>Click</span>
          </ClashExpansion>
        </ComponentBox>
        <CodeBox>
          {colorize([
            ["<", 1],
            ["ClashExpansion", 2],
            [">", 1],
            ["Click", 0],
            ["</", 1],
            ["ClashExpansion", 2],
            [">", 1],
          ])}
        </CodeBox>
      </Section>
    </Container>
  );
}

export default App;
