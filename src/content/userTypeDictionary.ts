import { TUserType } from 'types';

type TUserTypeDictionary = {
  [key in TUserType]: TUserTypeValue;
};

type TUserTypeValue = {
  presentationText: string;
};

const userTypeDictionary: TUserTypeDictionary = {
  OWNER: {
    presentationText: 'ownerPresentationText',
  },
  SCHOLAR: {
    presentationText: 'scholarPresentationText',
  },
};

export default userTypeDictionary;
