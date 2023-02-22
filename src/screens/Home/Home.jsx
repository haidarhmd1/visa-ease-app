import React, { useState } from 'react';
import { AppHeader } from 'components/general/AppHeader';
import {
  Layout,
  Spacer,
  StyledScrollView,
} from 'components/general/Layout/Layout';
import { Slideshow } from 'components/Slideshow';
import { ModalSheet } from 'components/general/ModalSheet';
import { Card, Dialog, Divider, List, Text } from 'react-native-paper';
import {
  ScrollView,
  TouchableWithoutFeedback,
  StyleSheet,
  Button,
} from 'react-native';
import { ServiceItems } from './ServiceItems';

const dataSource = [
  {
    title: 'VISA SERVICE',
    caption: 'Your Visa are a couple of steps away!',
    url:
      'https://visastar.de/wp-content/uploads/brizy/8/assets/images/iW=991&iH=1020&oX=91&oY=345&cW=870&cH=268/element5-digital-uE2T1tCFsn8-unsplash-1-scaled.jpg',
  },
  {
    title: 'VIP TOUREN',
    caption: 'Discover our VIP TOURS',
    url:
      'http://ktimorocco.com/wp-content/uploads/2016/11/morocco-123978-1030x685.jpg',
  },
  {
    title: 'LEGALISIERUNG',
    caption: 'Legalize your paper here!',
    url:
      'https://visastar.de/wp-content/uploads/brizy/16/assets/images/iW=160&iH=217&oX=0&oY=48&cW=160&cH=160/administrate-4916652_1280.jpg',
  },
];

const messageBadgeIcon = properties => (
  <List.Icon {...properties} icon="message-badge-outline" />
);

export const Home = ({ navigation }) => {
  const [visible, setVisible] = useState(false);
  const [extraContentVisible, setExtraContentVisible] = useState(false);
  const hideModal = () => setVisible(false);

  return (
    <>
      <AppHeader
        openNotification={() => setVisible(true)}
        navigation={navigation}
        role="main"
      />
      <StyledScrollView>
        <TouchableWithoutFeedback onPress={() => setVisible(false)}>
          <Layout>
            {extraContentVisible && (
              <Card mode="elevated" elevation={5} style={styles.container}>
                <Card.Content>
                  <Text variant="headlineSmall">Complete you profile</Text>
                  <Spacer />
                  <Divider />
                  <Spacer />
                  <Text variant="bodyMedium">70% is done</Text>
                </Card.Content>
                <Card.Actions>
                  <Button
                    title="dismiss"
                    onPress={() => setExtraContentVisible(false)}
                  />
                </Card.Actions>
              </Card>
            )}
            <Slideshow dataSource={dataSource} />
            <ServiceItems hideModal={hideModal} navigation={navigation} />
          </Layout>
        </TouchableWithoutFeedback>
      </StyledScrollView>
      <ModalSheet
        detached={false}
        contentMore
        openModal={() => setVisible(true)}
        visible={visible}
        setVisible={setVisible}
      >
        <Dialog.Title style={{ fontWeight: 'bold' }}>
          Notifications
        </Dialog.Title>
        <ScrollView>
          <Layout>
            <List.Item
              title="First Item"
              description="Item description"
              left={messageBadgeIcon}
            />
            <Spacer />
            <Divider />
            <Spacer />
            <List.Item
              title="First Item"
              description="Item description"
              left={messageBadgeIcon}
            />
            <Spacer />
            <Divider />
            <Spacer />
            <List.Item
              title="First Item"
              description="Item description"
              left={messageBadgeIcon}
            />
            <Spacer />
            <Divider />
            <Spacer />
          </Layout>
        </ScrollView>
      </ModalSheet>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  image: {
    alignSelf: 'center',
    width: 250,
    height: 250,
  },
});
