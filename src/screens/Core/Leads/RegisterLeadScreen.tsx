import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Container} from '../../../components/Container';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';
import {BOILERPLATE_CONFIG} from '../../../../boilerplate';
import {Input} from '../../../components/Input';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {Button} from '../../../components/Button';
import {ModalBeforePhotos} from './ModalBeforePhotos';

export const RegisterLeadScreen: React.FC = () => {
  return (
    <Container title="Cadastro de Cliente" style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>
          # Preencha nos campos abaixo para cadastrar seu cliente.
        </Text>
        <View style={styles.inputContainer}>
          <Input placeholder="Nome do Cliente aqui." label="Nome" />
          <Input
            keyboardType="decimal-pad"
            placeholder="WhatsApp aqui."
            label="WhatsApp."
          />
          <Input
            keyboardType="email-address"
            placeholder="Email aqui."
            label="Email."
          />
        </View>
        <Text style={styles.photoTitle}># Fotos</Text>
        <Text style={styles.photoDescription}>
          Adicione fotos de antes e depois de seu cliente.
        </Text>
        <View style={styles.photoContainer}>
          <TouchableOpacity style={styles.photoButton}>
            <MaterialIcons
              name="add-a-photo"
              size={30}
              color={BOILERPLATE_CONFIG.defaultBGColor}
            />
            <Text style={styles.photoText}>Antes</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.photoButton}>
            <MaterialIcons
              name="add-a-photo"
              size={30}
              color={BOILERPLATE_CONFIG.defaultBGColor}
            />
            <Text style={styles.photoText}>Depois</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.photoTitle}># Salvar Cliente</Text>
        <Text style={styles.photoDescription}>
          Clique em "Salvar Cliente" para adicionar em sua lista de clientes.
        </Text>
        <Button
          label="Salvar Cliente"
          colorBg={BOILERPLATE_CONFIG.defaultBGColor}
          colorText="#FFF"
        />
      </ScrollView>
      <ModalBeforePhotos />
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  scrollContent: {
    flexGrow: 1,
    paddingBottom: RFPercentage(5), // Ensures space at the bottom for scrolling
    paddingHorizontal: RFPercentage(4),
  },
  title: {
    width: '80%',
    fontSize: RFPercentage(3),
    fontWeight: '700',
    color: BOILERPLATE_CONFIG.text.primary,
    marginBottom: RFPercentage(5),
  },
  inputContainer: {
    flexDirection: 'column',
    gap: RFPercentage(2),
  },
  photoTitle: {
    width: '80%',
    fontSize: RFPercentage(2.8),
    fontWeight: '700',
    color: BOILERPLATE_CONFIG.text.primary,
    marginTop: RFPercentage(5),
  },
  photoDescription: {
    width: '80%',
    fontSize: RFPercentage(2.3),
    fontWeight: '500',
    color: BOILERPLATE_CONFIG.text.gray,
    marginTop: RFPercentage(1),
    marginBottom: RFPercentage(3),
  },
  photoContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 6,
  },
  photoButton: {
    height: RFPercentage(10),
    width: '47%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: BOILERPLATE_CONFIG.defaultBGColor,
    gap: 6,
  },
  photoText: {
    color: BOILERPLATE_CONFIG.defaultBGColor,
    fontWeight: '500',
    fontSize: RFValue(13),
  },
});
