import { BackdropAttach } from './backdrop.types';

export const getBackdropDistanceStyle = (
  isOpen: boolean,
  attach: BackdropAttach,
  additionalDistance: number,
) =>
  `${attach === 'bottom' ? 'top' : 'bottom'}: ${
    isOpen ? '0' : `calc(100vh + ${additionalDistance}px)`
  };`;

export const getBackdropWrapperBgColor = (isOpen: boolean, hasOverlay: boolean) =>
  !hasOverlay ? 'transparent' : isOpen ? 'rgba(0, 0 ,0, 0.5)' : 'rgba(0, 0 ,0, 0)';
