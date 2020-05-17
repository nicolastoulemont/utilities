interface RGB {
  r: number;
  g: number;
  b: number;
}

const HEX_REGEX = /#([a-f0-9]{3}|[a-f0-9]{4}(?:[a-f0-9]{2}){0,2})\b/gi;
export function isHex(hex: string): boolean {
  return Boolean(hex.match(HEX_REGEX));
}
export function isRgb({ r, g, b }: RGB): boolean {
  if (r < 0 || r > 255) {
    return false;
  } else if (g < 0 || g > 255) {
    return false;
  } else if (b < 0 || b > 255) {
    return false;
  } else {
    return true;
  }
}

export function hexToRgb(hex: string): RGB {
  if (!isHex(hex)) throw new Error('Invalid hex string');
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  if (!result) throw new Error('Hex string parsing error');
  return {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16),
  };
}

export function rgbToHex({ r, g, b }: RGB): string {
  if (!isRgb({ r, g, b })) throw new Error('Invalid rgb object');
  return '#' + [r, g, b].map(x => x.toString(16).padStart(2, '0')).join('');
}

export function colorBasedOnBg(
  bgHex: string,
  lightColor: string,
  darkColor: string
) {
  if (!isHex(bgHex)) throw new Error('Invalid hex string');
  const { r, g, b } = hexToRgb(bgHex);
  if (r * 0.299 + g * 0.587 + b * 0.114 > 186) {
    return darkColor;
  } else {
    return lightColor;
  }
}

export function randomHex(): string {
  const hex = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  if (isHex(hex)) return hex;
  return randomHex();
}
