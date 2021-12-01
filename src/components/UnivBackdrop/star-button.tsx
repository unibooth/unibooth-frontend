import styled from 'styled-components';

export type UnivStarButtonProps = {
  name: string;
  color: string;
};

export default function UnivStarButton({ name, color }: UnivStarButtonProps) {
  return (
    <Wrapper>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: `${color}30`,
          width: '48px',
          height: '48px',
          borderRadius: '8px',
          marginBottom: '6px',
        }}
      >
        <p
          style={{
            color,
            fontSize: '24px',
            lineHeight: '30px',
          }}
        >
          {name[0]}
        </p>
      </div>
      <p style={{ fontSize: '16px', lineHeight: '24px' }}>{name}</p>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 74px;
  margin-right: 10px;
`;
