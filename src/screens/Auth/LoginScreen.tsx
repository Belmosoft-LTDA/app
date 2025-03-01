import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
} from 'react-native';
import {RFPercentage} from 'react-native-responsive-fontsize';
import React, {useEffect, useState} from 'react';
import logo from '../../assets/logo_soft.png';
import {Input} from '../../components/Input';
import {Button} from '../../components/Button';
import {Link, StackActions, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../../App';

type NavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'LoginScreen'
>;

export const LoginScreen = () => {
  const navigation = useNavigation<NavigationProp>();
  const [isKeyboardVisible, setIsKeyboardVisible] = useState(false);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setIsKeyboardVisible(true);
      },
    );

    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setIsKeyboardVisible(false);
      },
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  const handleLogin = () => {
    navigation.navigate('HomeScreen');
  };

  return (
    <SafeAreaView style={styles.SAcontainer}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={styles.container}>
          <ScrollView
            contentContainerStyle={styles.scrollView}
            keyboardShouldPersistTaps="handled">
            <Image source={logo} resizeMode="contain" style={styles.logo} />
            <Text style={styles.slogan}>
              Bem vindo ao Contatow, facilitando suas vendas a cada toque.
            </Text>

            <View style={styles.formContainer}>
              <Input
                label="Email"
                placeholder="Insira seu e-mail aqui."
                colorText="#838383"
              />
              <Input
                label="Senha"
                placeholder="Insira sua senha aqui."
                colorText="#838383"
                secureTextEntry
              />
              <Button
                onPress={handleLogin}
                label="Acessar App"
                colorBg="#5ED0B3"
                colorText="#fff"
                marginTop={RFPercentage(1.5)}
              />
              <Link
                action={StackActions.replace('HomeScreen')}
                style={styles.link}>
                Não possui uma conta?{' '}
                <Text style={styles.registerTextLink}>Cadastre-se</Text>
              </Link>
            </View>

            {!isKeyboardVisible && (
              <Link
                action={StackActions.replace('LoginScreen')}
                style={styles.forgotPassword}>
                Esquecí minha senha...
              </Link>
            )}
          </ScrollView>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  SAcontainer: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: RFPercentage(4),
    position: 'relative',
  },
  scrollView: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: RFPercentage(14),
  },
  logo: {
    height: RFPercentage(10),
    width: RFPercentage(27),
  },
  slogan: {
    color: '#838383',
    textAlign: 'center',
    paddingHorizontal: RFPercentage(2),
    fontSize: RFPercentage(2),
  },
  formContainer: {
    flexDirection: 'column',
    gap: RFPercentage(2),
    marginTop: RFPercentage(5),
    width: '100%',
  },
  link: {
    marginTop: RFPercentage(1),
    color: '#838383',
    textAlign: 'center',
  },
  registerTextLink: {
    fontWeight: 'bold',
  },
  forgotPassword: {
    position: 'absolute',
    bottom: RFPercentage(2),
    marginTop: RFPercentage(5),
    color: '#37d6B3',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default LoginScreen;
