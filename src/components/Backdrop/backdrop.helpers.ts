import { BackdropAttach } from './backdrop.types';

export const getBackdropDistanceStyle = (
  isOpen: boolean,
  attach: BackdropAttach,
  additionalDistance: number,
) => {
  return {
    [attach === 'bottom' ? 'top' : 'bottom']: isOpen ? 0 : `calc(100vh + ${additionalDistance}px)`,
  };
};
