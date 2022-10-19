import { css } from "styled-components";

/**
 * Compute values then generates CSS code
 * @param scale scale
 * @param values base numbers
 * @returns A string with 'px' appended to each 'value' multiplied by 'scale'
 */
export function compute(scale: number, values: Array<number>) {
  let result = "";
  for (let val of values) {
    result += `${String(val * scale)}px `;
  }
  return result;
}

/**
 * Generate text shadow CSS code
 * @param scale scale
 * @param size [top, right, bottom, left]
 * @returns text-shadow CSS code
 */
export const genTextShadow = (scale: number, size: number[]) => {
  const freq = 5;
  const diff = 1 / (freq - 1);
  return css`
    text-shadow: ${() => {
      let result = "";
      let x: number, y: number;
      let top = size[0],
        right = size[1],
        bottom = size[2],
        left = size[3];
      for (let i = (-freq + 1) * left; i < freq * right; i++) {
        x = diff * scale * i;
        for (let j = (-freq + 1) * top; j < freq * bottom; j++) {
          y = diff * scale * j;

          result += `${x}px ${y}px var(--text-shadow-color),`;
        }
      }
      return result.replace(/,$/, "");
    }};
  `;
};
