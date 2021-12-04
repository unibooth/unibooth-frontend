import styled from 'styled-components';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import BookmarkLineIcon from '@assets/bookmark-line.svg';
import BoothContentImage from '../BoothContentImage';
import { Carousel } from 'react-responsive-carousel';
import { Booth } from '@interfaces';
import {BoothContent} from '@interfaces'
const translateByte = (image:any) => {
  return 'data:image/png;base64,' + image;
}

type BoothDetailProps = Pick<
  Booth,
  'university' | 'type' | 'name' | 'entertainer' | 'location' | 'date' | 'contents' | 'image'
>;

export default function BoothDetail({
  university,
  type,
  name,
  entertainer,
  location,
  date,
  contents,
  image
}: BoothDetailProps) {

  const base64Image = 'data:image/png;base64,' + entertainer.image;


  return (

    <article>
      <Carousel 
      style={{
        width : '100%',
        height: '375px',
        border: '1px solid'
      }}
        showIndicators={false}
        showThumbs={false}
      >
          <div style={{
                height: '100%',
                width: '100%'
              }}>
              <img src={translateByte(image)} style={{height: 375}}/>
          </div>
        {contents.map((content: BoothContent) => (
          <div style={{
                height: '100%',
                width: '100%'
              }} key={content.id}>
              <img src={translateByte(content.image)} style={{height: 375}}/>
          </div>
         
      ))}
    
    
      </Carousel>
      <IntroWrapper>

        <p style={{ color: '#818798', fontSize: '12px', lineHeight: '16px', marginBottom: '10px' }}>
          {university} | {type}
        </p>
        <p
          style={{
            color: '#222',
            fontWeight: 500,
            fontSize: '24px',
            lineHeight: '30px',
            marginBottom: '14px',
          }}
        >
          {name}
        </p>
        <Line />
        <BioWrapper>
          <img
            src={base64Image}
            style={{ width: '36px', height: '36px', borderRadius: '50%', marginRight: '12px' }}
          />
          <div style={{ display: 'flex', flexDirection: 'column', marginRight: 'auto' }}>
            <p
              style={{
                color: '#818798',
                fontSize: '14px',
                lineHeight: '18px',
                marginBottom: '2px',
              }}
            >
              {entertainer.role}
            </p>
            <p
              style={{
                color: '#222',
                fontWeight: 500,
                fontSize: '20px',
                lineHeight: '24px',
              }}
            >
              {entertainer.nickname}
            </p>
          </div>
          <BookmarkLineIcon width={24} height={24} fill="#222" />
        </BioWrapper>
        <Line />
       
        <Line />
      </IntroWrapper>
      {contents.map((content) => (
        <ContentWrapper key={content.id}>
          <BoothContentImage {...content} />
          <p
            style={{
              width: '343px',
              marginBottom: '48px',
              color: '#222',
              fontSize: '16px',
              lineHeight: '24px',
            }}
          >
            {content.description}
          </p>
        </ContentWrapper>
      ))}
      <Line />
      <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            width: '100%',
            height: '94px',
            alignItems: 'center',
            paddingLeft: 16,
            paddingRight: 16
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', marginRight: '16px' }}>
            <p
              style={{
                color: '#818798',
                fontSize: '14px',
                lineHeight: '18px',
                marginBottom: '4px',
              }}
            >
              부스 위치
            </p>
            <p
              style={{
                color: '#222',
                fontWeight: 500,
                fontSize: '20px',
                lineHeight: '24px',
              }}
            >
              {location}번
            </p>
          </div>
          <div
            style={{
              width: '0.5px',
              height: '48px',
              marginRight: '16px',
              backgroundColor: '#d5d7dd',
            }}
          />
          <div style={{ display: 'flex', flexDirection: 'column', marginRight: '16px' }}>
            <p
              style={{
                color: '#818798',
                fontSize: '14px',
                lineHeight: '18px',
                marginBottom: '4px',
              }}
            >
              운영 날짜
            </p>
            <p
              style={{
                color: '#222',
                fontWeight: 500,
                fontSize: '20px',
                lineHeight: '24px',
              }}
            >
              {date}
            </p>
          </div>
        </div>
        <Line/>
    </article>
  );
}

const IntroWrapper = styled.div`
  width: 343px;
  margin: 32px auto 48px;
`;

const Line = styled.div`
  width: 343px;
  height: 1px;
  margin: 0 auto;

  background-color: #f1f2f4;
`;

const BioWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  height: 76px;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
`;
