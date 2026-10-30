const channels = (cssColor: string) => {
  const ctx = document.createElement("canvas").getContext("2d")!;
  ctx.fillStyle = cssColor;
  ctx.fillRect(0, 0, 1, 1);
  return [...ctx.getImageData(0, 0, 1, 1).data.slice(0, 3)];
};

const luminance = (rgb: number[]) => {
  const [r, g, b] = rgb.map((v) => {
    const c = v / 255;
    return c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
  });
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
};

// Resolves a token on an element, then returns the WCAG ratio between two tokens
export const tokenContrast = (el: HTMLElement, a: string, b: string) => {
  const resolve = (token: string) => {
    const probe = document.createElement("span");
    probe.style.color = `var(${token})`;
    el.append(probe);
    const color = getComputedStyle(probe).color;
    probe.remove();
    return luminance(channels(color));
  };
  const [hi, lo] = [resolve(a), resolve(b)].sort((x, y) => y - x);
  return (hi + 0.05) / (lo + 0.05);
};

export const MIN_TEXT = 4.5;
export const MIN_BODY = 7;
