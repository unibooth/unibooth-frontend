import styled from 'styled-components';

import BookmarkFillIcon from '@assets/bookmark-fill.svg';
import BookmarkLineIcon from '@assets/bookmark-line.svg';

export type UnivRowProps = {
  name: string;

  starred?: boolean;
  soon?: boolean;
};

export default function UnivRow({ name, starred, soon }: UnivRowProps) {
  return (
    <Wrapper>
      <p
        style={{
          fontSize: '16px',
          lineHeight: '24px',
          marginRight: 'auto',
        }}
      >
        {name}
      </p>
      {soon === true && (
        <p
          style={{
            color: '#818798',
            fontSize: '16px',
            lineHeight: '24px',
            marginRight: '20px',
          }}
        >
          {Math.floor(Math.random() * 7 + 1)}일 남음
        </p>
      )}
      {starred ? (
        <BookmarkFillIcon width={24} height={24} fill="#222" />
      ) : (
        <BookmarkLineIcon width={24} height={24} fill="#D5D7DD" />
      )}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  width: 100%;
  padding: 12px 0;
`;
