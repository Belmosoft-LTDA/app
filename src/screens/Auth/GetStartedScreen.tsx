import {Image, StyleSheet, Text, View} from 'react-native';
import circles from '../../assets/circles.png';
import hand from '../../assets/hand.png';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';
import {Button} from '../../components/Button';
import {Link, StackActions, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../../App';

type NavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'GetStartedScreen'
>;

export const GetStartedScreen = () => {
  const navigation = useNavigation<NavigationProp>();

  const handleJoinButton = () => {
    navigation.navigate('LoginScreen');
  };

  return (
    <View style={styles.container}>
      <Image resizeMode="stretch" style={styles.circles} source={circles} />
      <Image style={styles.hand} source={hand} />
      <Text style={styles.title}>
        Bem vindo ao <Text style={styles.secondTitle}>Contatow</Text>
      </Text>
      <Text style={styles.paragraph}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer t
      </Text>
      <Button
        onPress={handleJoinButton}
        label="Entrar"
        colorBg="#5ED0B3"
        colorText="#fff"
      />
      <Link action={StackActions.replace('LoginScreen')} style={styles.link}>
        Não possui uma conta?{' '}
        <Text style={styles.registerTextLink}>Cadastre-se</Text>
      </Link>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    paddingHorizontal: RFPercentage(4),
    backgroundColor: '#FFF',
  },
  circles: {
    height: RFPercentage(18),
    width: RFPercentage(18),
    position: 'absolute',
    top: 0,
    left: 0,
  },
  hand: {
    width: RFPercentage(25),
    height: RFPercentage(25),
  },
  title: {
    marginTop: RFPercentage(4),
    fontSize: RFValue(19),
    color: '#5ED0B3',
    fontWeight: '900',
  },
  secondTitle: {
    color: '#B4B4B4',
  },
  paragraph: {
    fontSize: RFValue(12),
    color: '#838383',
    fontWeight: '300',
    textAlign: 'center',
    marginTop: RFPercentage(2),
    marginBottom: RFPercentage(3),
  },
  link: {
    marginTop: RFPercentage(2),
    color: '#838383',
  },
  registerTextLink: {
    fontWeight: 800,
  },
});
