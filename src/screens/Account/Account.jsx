import React from 'react';
import { HeadlineBold } from 'components/general/Typography/Typography';
import { Layout } from 'components/general/Layout/Layout';
import { ScrollView } from 'react-native';
import { Header } from 'components/general/Header';
import { AccountName } from './AccountName/AccountName';
import { AccountDelete } from './AccountDelete';

export const Account = ({ navigation }) => {
  return (
    <>
      <Header navigation={navigation} title="Account" />
      <ScrollView>
        <Layout>
          <HeadlineBold> Account </HeadlineBold>
          <AccountName />
          <AccountDelete />
        </Layout>
      </ScrollView>
    </>
  );
};
