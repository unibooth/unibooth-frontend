const backdropAttaches = ['bottom', 'top'] as const;
export type BackdropAttach = typeof backdropAttaches[number];
export const bdrAttach2PaperBorderRadius = (attach: BackdropAttach) =>
  attach === 'bottom' ? '8px 8px 0 0' : '0 0 8px 8px';

export type BackdropProps = {
  isOpen: boolean;
  children: React.ReactNode | React.ReactNodeArray;

  onClose?: (e?: unknown) => void;

  /** @default 999 */
  zIndex?: number;
  /** @default 'bottom' */
  attach?: BackdropAttach;
  /** @default true */
  hasOverlay?: boolean;
  /** @default true */
  round?: boolean;
  /** attach point에서 입력한 값만큼 떨어진 곳부터 rendering됩니다.
   * @default 0*/
  additionalDistance?: number;

  className?: string;
  style?: React.CSSProperties;
  paperStyle?: React.CSSProperties;
};
