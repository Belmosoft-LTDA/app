import {
  KeyboardTypeOptions,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';

type IInputProps = {
  placeholder: string;
  onPress?: () => void;
  colorText?: string;
  colorBg?: string;
  label?: string;
  secureTextEntry?: boolean;
  keyboardType?: KeyboardTypeOptions;
};

export const Input = ({
  placeholder,
  colorBg,
  colorText = '#727D73',
  onPress,
  label,
  secureTextEntry,
  keyboardType = 'default',
}: IInputProps) => {
  return (
    <View style={styles.container}>
      {label && <Text>{label}</Text>}
      <TextInput
        style={[
          styles.inputWrapper,
          {backgroundColor: colorBg, color: colorText},
        ]}
        placeholder={placeholder}
        placeholderTextColor={colorText}
        onPress={onPress}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    gap: RFPercentage(1),
  },
  inputWrapper: {
    padding: RFPercentage(1.8),
    borderRadius: RFValue(8),
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#838383',
  },
  textInput: {
    fontWeight: 500,
    fontSize: RFValue(14),
  },
});
