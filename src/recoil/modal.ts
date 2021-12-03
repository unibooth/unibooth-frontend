import { atom } from 'recoil';

export const aboutStampInfo = atom({
  key: 'aboutStampInfo',
  default: false,
});

export const requestStamp = atom({
  key: 'requestStamp',
  default: false,
});

export const doneVisible = atom({
  key: 'doneVisible',
  default: false,
});

export const splashState = atom({
  key: 'splashState',
  default: true,
});
