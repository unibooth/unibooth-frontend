import React from 'react';
import styled from 'styled-components';

import { getBackdropDistanceStyle, getBackdropWrapperBgColor } from './backdrop.helpers';
import { BackdropProps, bdrAttach2PaperBorderRadius } from './backdrop.types';

const StyledWrapper = styled.div<
  Pick<BackdropProps, 'isOpen' | 'attach' | 'zIndex' | 'hasOverlay' | 'additionalDistance'>
>`
  display: flex;
  flex-direction: column;
  flex: 1 0 auto;
  position: fixed;
  z-index: ${({ zIndex }) => zIndex};
  ${({ isOpen, attach, additionalDistance }) =>
    getBackdropDistanceStyle(isOpen, attach, additionalDistance)}
  width: 100vw;
  height: calc(100% - ${({ additionalDistance }) => additionalDistance}px);
  background-color: ${({ isOpen, hasOverlay }) => getBackdropWrapperBgColor(isOpen, hasOverlay)};
  outline: 0;
  overflow-y: auto;
  webkit-overflow-scrolling: touch;
  transition: all 0.3s ease-out;
`;

const StyledOverlay = styled.div`
  flex: 1;
  background-color: transparent;
`;

const StyledPaper = styled.div<Pick<BackdropProps, 'attach' | 'round'>>`
  display: flex;
  flex-direction: column;
  height: auto;
  border-radius: ${({ attach, round }) => (round ? bdrAttach2PaperBorderRadius(attach) : 0)};
  background-color: #fff;
  box-shadow: 0px -4px 4px rgba(0, 0, 0, 0.08);
`;

export default function Backdrop(props: BackdropProps) {
  const propsWithDefault: BackdropProps = {
    zIndex: 999,
    attach: 'bottom' as const,
    hasOverlay: true,
    round: true,
    additionalDistance: 0,
    ...props,
  };

  const { isOpen, attach, onClose, paperStyle, children, round } = propsWithDefault;

  return (
    <StyledWrapper {...propsWithDefault}>
      {attach === 'bottom' && <StyledOverlay onClick={onClose} />}
      {isOpen && (
        <StyledPaper attach={attach} round={round} style={paperStyle}>
          {children}
        </StyledPaper>
      )}
      {attach === 'top' && <StyledOverlay onClick={onClose} />}
    </StyledWrapper>
  );
}
