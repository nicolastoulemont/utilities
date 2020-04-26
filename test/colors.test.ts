import { hexToRgb, rgbToHex, colorBasedOnBg, isHex, isRgb } from '../src';

describe('Testing colors utils', () => {
  it('isHex', () => {
    const one = isHex('#ff');
    expect(one).toBe(false);
    const two = isHex('#ffF');
    expect(two).toBe(true);
  });
  it('isRgb', () => {
    const one = isRgb({ r: 256, g: 255, b: 255 });
    expect(one).toBe(false);
    const two = isRgb({ r: 255, g: 255, b: 255 });
    expect(two).toBe(true);
  });
  it('rgbToHex', () => {
    const hex = rgbToHex({ r: 255, g: 255, b: 255 });
    expect(hex).toBe('#ffffff');
  });
  it('hexToRgb', () => {
    const rgb = hexToRgb('#ffffff');
    expect(rgb).toStrictEqual({ r: 255, g: 255, b: 255 });
  });
  it('colorBasedOnBg', () => {
    const lightColor = '#ffffff';
    const darkColor = '#000000';
    const darkGrey = '#383636';
    const lightGrey = '#383636';

    const first = colorBasedOnBg(darkGrey, lightColor, darkColor);
    expect(first).toBe(lightColor);
    const second = colorBasedOnBg(lightGrey, lightColor, darkColor);
    expect(second).toBe(lightColor);
  });
});
