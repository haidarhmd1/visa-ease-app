import React from 'react';
import { StyledCard } from 'components/general/Layout/Layout';
import { Card } from 'react-native-paper';
import CircularProgress from 'react-native-circular-progress-indicator';
import { View } from 'react-native';

export const VisaStatus = () => {
  return (
    <StyledCard mode="elevated" style={{ marginTop: 12 }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingRight: 12,
        }}
      >
        <Card.Title
          style={{ flex: 1 }}
          title="Visa Status"
          subtitle="In Progress..."
        />
        <View style={{ margin: 8 }}>
          <CircularProgress
            value={50}
            valueSuffix="%"
            radius={32}
            progressValueColor="#000"
            strokeColorConfig={[
              { color: 'red', value: 0 },
              { color: 'skyblue', value: 50 },
              { color: 'yellowgreen', value: 100 },
            ]}
          />
        </View>
      </View>
    </StyledCard>
  );
};
