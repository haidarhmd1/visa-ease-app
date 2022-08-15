import styled from 'styled-components/native';

// Regular

export const RegularCaption = styled.Text`
  /* Default/Regular/Caption1 */

  font-style: normal;
  font-weight: 400;
  font-size: ${({ theme }) => theme.fontSize.caption};

  /* Label Color/Light/Primary */

  color: ${({ theme }) => theme.colors.primaryFont};
`;

export const SubHeadline = styled.Text`
  /* Default/Regular/Subheadline */

  font-style: normal;
  font-weight: 400;
  font-size: ${({ theme }) => theme.fontSize.subHeadline};
  letter-spacing: -0.24px;

  /* Label Color/Light/Primary */

  color: ${({ theme }) => theme.colors.primaryFont};
`;

export const BodyText = styled.Text`
  /* Default/Regular/Body */

  font-style: normal;
  font-weight: 400;
  font-size: ${({ theme }) => theme.fontSize.caption};
  letter-spacing: -0.408px;

  /* Label Color/Light/Primary */

  color: ${({ theme }) => theme.colors.primaryFont};
`;

export const Headline = styled.Text`
  /* Default/Regular/Headline */

  font-style: normal;
  font-weight: 600;
  font-size: ${({ theme }) => theme.fontSize.title};
  letter-spacing: -0.408px;

  /* Label Color/Light/Primary */

  color: ${({ theme }) => theme.colors.primaryFont};
`;

export const Title = styled.Text`
  /* Default/Regular/Title1 */

  font-style: normal;
  font-weight: 400;
  font-size: ${({ theme }) => theme.fontSize.title};
  letter-spacing: 0.364px;

  /* Label Color/Light/Primary */

  color: ${({ theme }) => theme.colors.primaryFont};
`;

export const SecondaryTitle = styled.Text`
  /* Default/Regular/Title2 */

  font-style: normal;
  font-weight: 400;
  font-size: ${({ theme }) => theme.fontSize.secondaryText};
  letter-spacing: 0.35px;

  /* Label Color/Light/Primary */

  color: ${({ theme }) => theme.colors.primaryFont};
`;

export const LargeTitle = styled.Text`
  /* Default/Regular/LargeTitle */

  font-style: normal;
  font-weight: 400;
  font-size: ${({ theme }) => theme.fontSize.largeTitle};
  letter-spacing: 0.374px;

  /* Label Color/Light/Primary */

  color: ${({ theme }) => theme.colors.primaryFont};
`;

// Bold

export const RegularCaptionBold = styled(RegularCaption)`
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
