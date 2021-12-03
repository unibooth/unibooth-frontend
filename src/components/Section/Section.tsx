import styled from 'styled-components';

type SectionProps = {
  size?: 'small' | 'large';

  title: string;
  description?: string;

  children: React.ReactNode;
};

export default function Section({ title, description, children, size = 'large' }: SectionProps) {
  return (
    <Wrapper>
      <Title style={{ fontSize: size === 'large' ? '20px' : '20px' }}>{title}</Title>
      {description != null && <Description>{description}</Description>}
      {children}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  padding: 24px;
  padding-bottom: 0;
  border-bottom: 8px solid #f1f2f4;
`;

const Title = styled.h3`
  font-weight: 600;
  line-height: 24px;
  margin-bottom: 10px;
`;

const Description = styled.p`
  font-size: 14px;
  line-height: 18px;
  color: #818798;

  margin-bottom: 4px;
`;
