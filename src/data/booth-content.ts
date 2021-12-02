import { BoothContent } from '@interfaces';

// @TODO: 더미데이터 채우기!
export const BOOTH_CONTENT_DATA: BoothContent[] = [
  {
    id: 1,
    boothId: 1,

    imageUrl: '/images/booth_content1.png',
    description:
      '안녕하세요. 이번 중앙대 2021 가을 축제에서 마켓 부스로 참여하게 된 일러스트레이터 한나입니다. 늘 제 옆에서 저를 응원해주는 친구들의 권유로 그간 저의 애정을 듬뿍 담아 만든 굿즈들을 판매하게 되었어요! 예쁘게 지켜봐주세요 :)',

    tags: [
      {
        id: 1,
        boothContentId: 1,

        name: '한나메이드 스티커',
        price: 3000,

        positionX: 20,
        positionY: 50,
      },
    ],
  },
  {
    id: 2,
    boothId: 1,

    imageUrl: '/images/booth_content2.png',
    description: '평소 저의 작업 스타일은 색감이 강렬한 기하학적 패턴이 많이 쓰여요.',

    tags: [
      {
        id: 1,
        boothContentId: 1,

        name: '한나메이드 스티커',
        price: 3000,

        positionX: 20,
        positionY: 50,
      },
    ],
  },
  {
    id: 3,
    boothId: 1,

    imageUrl: '/images/booth_content3.png',
    description:
      '2017년부터 꾸준히 그린 작업물을 담아 엽서와 스티커를 제작했습니다. 스티커는 한 묶음에 15장의 스티커가 들어있고, 엽서는 한 묶음에 3장 들어있어요.',

    tags: [
      {
        id: 1,
        boothContentId: 1,

        name: '한나메이드 스티커',
        price: 3000,

        positionX: 210,
        positionY: 125,
      },
    ],
  },
];
