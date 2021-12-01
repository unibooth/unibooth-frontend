import React from 'react';

import { getBackdropDistanceStyle } from './backdrop.helpers';
import { BackdropProps } from './backdrop.types';

import styles from './backdrop.module.scss';

export default function Backdrop(props: BackdropProps) {
  const propsWithDefault: BackdropProps = {
    zIndex: 999,
    attach: 'bottom' as const,
    hasOverlay: true,
    round: true,
    additionalDistance: 0,
    ...props,
  };

  const {
    isOpen,
    hasOverlay,
    additionalDistance,
    attach,
    onClose,
    paperStyle,
    children,
    round,
    zIndex,
    style,
  } = propsWithDefault;

  return (
    <div
      className={styles.wrapper}
      {...propsWithDefault}
      style={{
        zIndex,
        height: `calc(100% - ${additionalDistance}px`,
        ...getBackdropDistanceStyle(isOpen, attach, additionalDistance),
        ...style,
      }}
      data-is-open={isOpen}
      data-has-overlay={hasOverlay}
    >
      {attach === 'bottom' && <div className={styles.overlay} onClick={onClose} />}
      {isOpen && (
        <div className={styles.paper} data-round={round} data-attach={attach} style={paperStyle}>
          {children}
        </div>
      )}
      {attach === 'top' && <div className={styles.overlay} onClick={onClose} />}
    </div>
  );
}
