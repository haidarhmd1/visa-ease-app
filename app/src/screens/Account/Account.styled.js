import { AntDesign } from '@expo/vector-icons';
import { CardWrapper } from 'components/general/Layout/Layout';
import { RegularCaption } from 'components/general/Typography/Typography';
import styled from 'styled-components/native';

export const ProfileCardWrapper = styled(CardWrapper)`
  flex-direction: row;
`;

export const ProfileSubTitle = styled(RegularCaption)`
  color: #a3a3a3;
`;

export const ProfileUserInfo = styled.View`
  margin-left: 18px;
`;

export const ArrowRight = styled(AntDesign)`
  color: #a3a3a3;
  align-self: center;
  margin-left: auto;
`;
