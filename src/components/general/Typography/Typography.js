import styled from 'styled-components/native';

// Regular

export const RegularCaption = styled.Text`
  /* Default/Regular/Caption1 */

  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;

  /* Label Color/Light/Primary */

  color: #000000;
`;

export const RegularCaptionTwo = styled.Text`
  /* Default/Regular/Caption2 */

  font-style: normal;
  font-weight: 400;
  font-size: 11px;
  line-height: 13px;
  letter-spacing: 0.066px;

  /* Label Color/Light/Primary */

  color: #000000;
`;

export const SubHeadline = styled.Text`
  /* Default/Regular/Subheadline */

  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 20px;
  letter-spacing: -0.24px;

  /* Label Color/Light/Primary */

  color: #000000;
`;

export const BodyText = styled.Text`
  /* Default/Regular/Body */

  font-style: normal;
  font-weight: 400;
  font-size: 17px;
  line-height: 22px;
  letter-spacing: -0.408px;

  /* Label Color/Light/Primary */

  color: #000000;
`;

export const Headline = styled.Text`
  /* Default/Regular/Headline */

  font-style: normal;
  font-weight: 600;
  font-size: 17px;
  line-height: 22px;
  letter-spacing: -0.408px;

  /* Label Color/Light/Primary */

  color: #000000;
`;

export const Title = styled.Text`
  /* Default/Regular/Title1 */

  font-style: normal;
  font-weight: 400;
  font-size: 28px;
  line-height: 34px;
  letter-spacing: 0.364px;

  /* Label Color/Light/Primary */

  color: #000000;
`;

export const SecondaryTitle = styled.Text`
  /* Default/Regular/Title2 */

  font-style: normal;
  font-weight: 400;
  font-size: 22px;
  line-height: 28px;
  letter-spacing: 0.35px;

  /* Label Color/Light/Primary */

  color: #000000;
`;

export const LargeTitle = styled.Text`
  /* Default/Regular/LargeTitle */

  font-style: normal;
  font-weight: 400;
  font-size: 34px;
  line-height: 41px;
  letter-spacing: 0.374px;

  /* Label Color/Light/Primary */

  color: #000000;
`;

// Bold

export const RegularCaptionBold = styled(RegularCaption)`
  font-weight: 600;
`;

export const RegularCaptionTwoBold = styled(RegularCaptionTwo)`
  font-weight: 600;
`;

export const SubHeadlineBold = styled(SubHeadline)`
  font-weight: 600;
`;

export const BodyTextBold = styled(BodyText)`
  font-weight: 600;
`;

export const HeadlineBold = styled(Headline)`
  font-weight: 600;
`;

export const TitleBold = styled(Title)`
  font-weight: 600;
`;

export const SecondaryTitleBold = styled(SecondaryTitle)`
  font-weight: 600;
`;

export const LargeTitleBold = styled(LargeTitle)`
  font-weight: 600;
`;
