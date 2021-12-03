import styled from 'styled-components';

import SchoolIcon from '@assets/school.svg';
import { Booth } from '@interfaces';

export default function BoothComment({ comments }: Pick<Booth, 'comments'>) {
  return (
    <Wrapper>
      {comments.slice(0, 2).map((comment) => (
        <div
          key={comment.id}
          style={{ display: 'flex', flexDirection: 'column', width: '100%', marginBottom: '16px' }}
        >
          <p style={{ color: '#222', fontSize: '14px', lineHeight: '22px' }}>
            {comment.user.nickname}
          </p>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              marginBottom: '8px',
            }}
          >
            {comment.user.isVerified && (
              <SchoolIcon width={18} height={18} fill="#818798" style={{ marginRight: '4px' }} />
            )}
            <p style={{ color: '#818798', fontSize: '12px', lineHeight: '16px' }}>
              {comment.user.univercity}
            </p>
          </div>
          <p style={{ color: '#222', fontSize: '16px', lineHeight: '24px' }}>{comment.content}</p>
        </div>
      ))}
      {comments.length > 2 && <MoreButton>{comments.length}개의 댓글 전체 보기</MoreButton>}
      <InputWrapper>
        <Input placeholder="댓글을 입력하세요" />
        <InputSubmit>등록</InputSubmit>
      </InputWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  width: 343px;
  margin: 24px auto 80px;
`;

const MoreButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 48px;
  margin-bottom: 48px;

  color: #222;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;

  border: 0.5px solid #d5d7dd;
  border-radius: 8px;
`;

const InputWrapper = styled.div`
  width: 100%;
  position: relative;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px 16px;

  font-size: 16px;
  line-height: 24px;
  background: #f7f8f9;
  border-radius: 8px;
  border: none;
  outline: none;
`;

const InputSubmit = styled.p`
  position: absolute;
  top: 0;
  right: 16px;

  font-size: 16px;
  line-height: 48px;
`;
