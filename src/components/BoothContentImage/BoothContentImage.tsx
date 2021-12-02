import { useState } from 'react';
import styled from 'styled-components';

import TagIcon from '@assets/tag.svg';
import ChevronRightIcon from '@assets/chevron-right.svg';

import { addCommaToNumber } from '@helpers';
import { BoothContent } from '@interfaces';

export default function BoothContentImage({
  imageUrl,
  tags,
}: Pick<BoothContent, 'imageUrl' | 'tags'>) {
  const [isTagsVisible, setIsTagsVisible] = useState(false);

  return (
    <Wrapper
      onClick={() => {
        setIsTagsVisible(!isTagsVisible);
      }}
    >
      <Image src={imageUrl} />
      {tags.length > 0 && (
        <TagIconWrapper>
          <TagIcon width={18} height={18} fill="white" />
        </TagIconWrapper>
      )}
      {tags.map((tag) => (
        <TagWrapper
          key={tag.id}
          style={{
            left: tag.positionX,
            top: tag.positionY,
            opacity: isTagsVisible ? 1 : 0,
          }}
        >
          <p
            style={{
              color: '#fff',
              fontSize: '12px',
              lineHeight: '16px',
              marginRight: '4px',
            }}
          >
            {tag.name}
            <br />₩{addCommaToNumber(tag.price)}
          </p>
          <ChevronRightIcon width={18} height={18} fill="white" />
        </TagWrapper>
      ))}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;

  width: 100%;
  height: fit-content;
  margin-bottom: 16px;
`;

const Image = styled.img`
  width: 100%;
`;

const TagIconWrapper = styled.div`
  position: absolute;
  left: 16px;
  bottom: 16px;

  width: 36px;
  height: 36px;
  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: #ff6433;
`;

const TagWrapper = styled.div`
  position: absolute;

  display: flex;
  flex-direction: row;

  padding: 4px 8px;
  border-radius: 4px;

  background-color: #222;

  transition: opacity 0.2s ease-out;
`;
