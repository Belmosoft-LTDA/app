import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {RFPercentage} from 'react-native-responsive-fontsize';
import {BOILERPLATE_CONFIG} from '../../../../boilerplate';

export const ModalBeforePhotos: React.FC = () => {
  return (
    <View style={styles.container}>
      <View
        style={{
          width: '85%',
          backgroundColor: '#FFF',
          paddingHorizontal: RFPercentage(2),
          borderRadius: 8,
          height: '100%',
          marginTop: '5%',
        }}>
        <Text
          style={{
            fontSize: RFPercentage(2.8),
            fontWeight: '700',
            color: BOILERPLATE_CONFIG.text.primary,
            marginTop: RFPercentage(2),
            textAlign: 'center',
          }}>
          # Tire foto do seu cliente e salve na pasta (ANTES)
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(254, 254, 254, 0.88)',
    position: 'absolute',
    height: '100%',
    width: '100%',
    top: 1,
    left: 0,
    zIndex: 999,
    alignItems: 'center',
  },
});
