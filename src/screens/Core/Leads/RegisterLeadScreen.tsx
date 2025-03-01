import React from 'react';
import {View} from 'react-native';
import {RootStackParamList} from '../../../../App';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';

type NavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'RegisterLeadScreen'
>;

export const RegisterLeadScreen: React.FC = () => {
  const navigation = useNavigation<NavigationProp>();

  return <View />;
};
