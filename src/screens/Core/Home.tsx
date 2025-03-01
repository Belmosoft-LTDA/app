import BottomSheet, {BottomSheetView} from '@gorhom/bottom-sheet';
import {useCallback, useRef} from 'react';
import {
  Dimensions,
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';
import {SafeAreaView} from 'react-native-safe-area-context';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import IoniconsIcon from 'react-native-vector-icons/Ionicons';
import logo from '../../assets/logo_white.png';
import {CoreButton} from '../../components/CoreButton';

const PAGE_CONFIG = {
  //defaultBGColor: '#2DAA9E',
  // borderColor="#3D8D7A"
  // defaultBGColor: 'blue',
  // defaultBGColor: '#3D8D7A',
  //defaultBGColor: '#7C00FE',
  //defaultBGColor: '#151515',
  //defaultBGColor: '#4793AF',
  //defaultBGColor: '#89AC46',
  //defaultBGColor: '#FFAB5B',
  // defaultBGColor: '#EB5B00',
  // defaultBGColor: '#3E7B27',
  //defaultBGColor: '#F72C5B',
  // defaultBGColor: '#87A2FF',
  // defaultBGColor: '#6482AD',
  //defaultBGColor: '#72BF78',
  defaultBGColor: '#3D8D7A',
};

export const HomeScreen = () => {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const screenHeight = Dimensions.get('window').height;
  const bottomSheetHeight =
    Platform.OS === 'android' ? screenHeight * 0.68 : screenHeight * 0.68;

  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);

  return (
    <SafeAreaView style={styles.container} edges={['top', 'left', 'right']}>
      <View style={styles.innerContainer}>
        <View style={styles.header}>
          <View style={styles.userInfo}>
            <Image source={logo} resizeMode="contain" style={styles.logo} />
            <Text style={styles.greeting}>Olá, Moisés</Text>
            <Text style={styles.role}>Administrador</Text>
            <Text style={styles.company}>Clínica de Estética</Text>
          </View>
          <View style={styles.iconContainer}>
            <TouchableOpacity>
              <EntypoIcon name="menu" size={RFValue(27)} color={'#FFF'} />
            </TouchableOpacity>
            <TouchableOpacity>
              <FontAwesome5Icon
                name="bell"
                solid
                size={RFValue(24)}
                color={'#FFF'}
              />
            </TouchableOpacity>
          </View>
        </View>
        <BottomSheet
          snapPoints={[bottomSheetHeight, '100%']}
          ref={bottomSheetRef}
          index={1}
          onChange={handleSheetChanges}>
          <BottomSheetView style={styles.contentContainer}>
            <Text style={styles.accessTitle}>Acesso Rápido</Text>
            <View style={styles.buttonContainer}>
              <CoreButton
                label="Cadastrar Contato"
                colorBg="#2B3734"
                borderColor="#2B3734"
                colorText="white"
                borderWidth={1.2}
                textAlign="right"
                icon={
                  <IoniconsIcon
                    name="add-circle"
                    size={RFValue(16)}
                    color={'#FFF'}
                  />
                }
              />
              <CoreButton
                label="Meus Clientes"
                colorBg={PAGE_CONFIG.defaultBGColor}
                borderColor={PAGE_CONFIG.defaultBGColor}
                colorText="#fff"
                borderWidth={1.2}
                icon={
                  <FontAwesome5Icon
                    name="user"
                    solid
                    size={RFValue(15)}
                    color={'#FFF'}
                  />
                }
              />
              <CoreButton
                label="Catálogo"
                colorBg={PAGE_CONFIG.defaultBGColor}
                borderColor={PAGE_CONFIG.defaultBGColor}
                colorText="#fff"
                borderWidth={1.2}
                icon={
                  <FontAwesome5Icon
                    name="images"
                    solid
                    size={RFValue(15)}
                    color={'#FFF'}
                  />
                }
              />
            </View>
            <Text
              style={[
                styles.accessTitle,
                {
                  marginTop: RFPercentage(5),
                },
              ]}>
              Vendas
            </Text>
            <View style={styles.buttonContainer}>
              <CoreButton
                label="Cadastrar Contato"
                colorBg="#fff"
                borderColor={PAGE_CONFIG.defaultBGColor}
                colorText={PAGE_CONFIG.defaultBGColor}
                borderWidth={1.2}
                textAlign="right"
              />
              <CoreButton
                label="Catálogo"
                colorBg="#fff"
                borderColor={PAGE_CONFIG.defaultBGColor}
                colorText={PAGE_CONFIG.defaultBGColor}
                borderWidth={1.2}
                textAlign="right"
              />
              <CoreButton
                label="Catálogo"
                colorBg="#fff"
                borderColor={PAGE_CONFIG.defaultBGColor}
                colorText={PAGE_CONFIG.defaultBGColor}
                borderWidth={1.2}
                textAlign="right"
              />
            </View>
          </BottomSheetView>
        </BottomSheet>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: PAGE_CONFIG.defaultBGColor,
  },
  innerContainer: {
    flex: 1,
    backgroundColor: PAGE_CONFIG.defaultBGColor,
    paddingTop: Platform.OS === 'android' ? RFPercentage(5) : RFPercentage(1),
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingHorizontal: RFPercentage(5),
  },
  userInfo: {
    display: 'flex',
    flexDirection: 'column',
  },
  logo: {
    height: RFPercentage(7),
    width: RFPercentage(22),
  },
  greeting: {
    fontWeight: '500',
    fontSize: RFValue(19),
    color: '#fff',
    marginTop: RFPercentage(3),
  },
  role: {
    fontWeight: '400',
    fontSize: RFValue(14),
    color: '#fff',
    marginTop: RFPercentage(2),
  },
  company: {
    fontWeight: '400',
    fontSize: RFValue(14),
    color: '#fff',
  },
  iconContainer: {
    marginTop: RFPercentage(1.5),
    gap: RFPercentage(3),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  accessTitle: {
    fontSize: RFValue(16),
    fontWeight: '500',
    // color: '#8a8a8a',
    color: '#000',
    marginBottom: RFPercentage(3),
  },
  buttonContainer: {
    display: 'flex',
    gap: RFPercentage(2),
  },
  contentContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    paddingHorizontal: RFPercentage(3),
    paddingBottom: RFPercentage(2),
    marginTop: RFPercentage(2),
    backgroundColor: '#fff',
  },
});
