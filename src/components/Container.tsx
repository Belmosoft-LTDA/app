import {useNavigation} from '@react-navigation/native';
import React, {ReactNode} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
  TextStyle,
} from 'react-native';
import {RFPercentage} from 'react-native-responsive-fontsize';
import IoniconsIcon from 'react-native-vector-icons/Ionicons';
import {RootStackParamList} from '../../App';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

type IContainerProps = {
  children?: ReactNode;
  style?: ViewStyle;
  title?: string;
};

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

export const Container: React.FC<IContainerProps> = ({
  children,
  style,
  title,
}) => {
  const navigation = useNavigation<NavigationProp>();

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={[styles.container, style]}>
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.backButton}>
            <IoniconsIcon name="arrow-back" size={30} />
          </TouchableOpacity>
          <Text style={styles.title}>{title}</Text>
        </View>
        {children}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    paddingTop: RFPercentage(2.5),
  },
  header: {
    position: 'relative',
    width: '100%',
    flexDirection: 'row',
    marginBottom: RFPercentage(4),
    justifyContent: 'center',
    alignItems: 'center',
  } as ViewStyle,
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: RFPercentage(2),
    position: 'absolute',
    left: RFPercentage(2.7),
  } as ViewStyle,
  title: {
    fontWeight: '500',
    fontSize: RFPercentage(2.4),
  } as TextStyle,
});
