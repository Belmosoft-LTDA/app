import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {RFPercentage} from 'react-native-responsive-fontsize';
import {BOILERPLATE_CONFIG} from '../../../../boilerplate';
import {PhotoGallery} from 'react-native-photos-gallery';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export const data = [
  {
    id: 1,
    source: {
      uri: 'https://cdn.prod.website-files.com/64ac367920744d8ec5cb556f/651370323f60c8b9581b9e89_rafael_before.webp',
    },
  },
  //   {
  //     id: 2,
  //     source: {
  //       uri: 'https://cdn.prod.website-files.com/64ac367920744d8ec5cb556f/65137057d71c4c7e79f1b154_rafael_after.webp',
  //     },
  //   },
  {
    id: 3,
    source: {
      uri: 'https://cdn.prod.website-files.com/64ac367920744d8ec5cb556f/651afd8f469271abd64726dc_Henrique_before%20160px.webp',
    },
  },
  //   {
  //     id: 4,
  //     source: {
  //       uri: 'https://cdn.prod.website-files.com/64ac367920744d8ec5cb556f/651afd9eeb81578cdd55f1ae_Henrique_after%20160px.webp',
  //     },
  //   },
  {
    id: 5,
    source: {
      uri: 'https://cdn.prod.website-files.com/64ac367920744d8ec5cb556f/651afdb862a9295dd4031010_marco_before_%20160px.webp',
    },
  },
  //   {
  //     id: 6,
  //     source: {
  //       uri: 'https://cdn.prod.website-files.com/64ac367920744d8ec5cb556f/651afdca9c7acecc2a40c8f2_marco_after%20160px.webp',
  //     },
  //   },
  {
    id: 7,
    source: {
      uri: 'https://cdn.prod.website-files.com/64ac367920744d8ec5cb556f/651afddbff6def256c342088_Gadiel_before%20160px.webp',
    },
  },
  //   {
  //     id: 8,
  //     source: {
  //       uri: 'https://cdn.prod.website-files.com/64ac367920744d8ec5cb556f/651afde9152f4c65f99993a6_Gadiel_after%20160px.webp',
  //     },
  //   },
];

export const ModalBeforePhotos: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.modalContent}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.closeButton}>
            <MaterialIcons name="close" size={35} color={'gray'} />
            <Text style={styles.closeText}>Fechar</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.modalText}>
          # Tire foto do seu cliente e salve na pasta (ANTES)
        </Text>
        <PhotoGallery
          data={data}
          onImageExpand={({visible}) => console.log(visible)}
          animatedImageDelay={60}
          modalBackgroundStyle={styles.modalBackgroundStyle}
        />
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
  modalContent: {
    width: '100%',
    backgroundColor: '#FFF',
    paddingHorizontal: RFPercentage(0),
    borderRadius: 8,
    height: '100%',
    marginTop: '5%',
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingHorizontal: RFPercentage(2),
  },
  closeButton: {
    flexDirection: 'column',
    alignItems: 'center',
    gap: RFPercentage(1),
  },
  closeText: {
    fontWeight: '500',
  },
  modalText: {
    fontSize: RFPercentage(2.8),
    fontWeight: '700',
    color: BOILERPLATE_CONFIG.text.primary,
    marginTop: RFPercentage(2),
    marginBottom: RFPercentage(5),
    textAlign: 'center',
    width: '80%',
  },
  modalBackgroundStyle: {
    backgroundColor: 'white',
  },
});
