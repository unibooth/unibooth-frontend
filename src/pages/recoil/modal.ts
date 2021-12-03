import { atom } from 'recoil';

export const aboutStampState = atom({
  key: 'aboutStampState',
  default: true,
});

export const requestStamp = atom({
  key: 'requestStamp',
  default: false,
});

export const doneVisible = atom({
  key: 'doneVisible',
  default: false,
});
