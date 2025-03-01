import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';

type IButtonProps = {
  label: string;
  onPress?: () => void;
  colorText?: string;
  colorBg?: string;
  marginTop?: any;
  borderColor?: string;
  borderWidth?: number;
};

export const Button = ({
  label,
  colorBg,
  colorText,
  borderColor,
  borderWidth,
  onPress,
  marginTop,
}: IButtonProps) => {
  return (
    <TouchableOpacity
      style={[
        styles.btnWrapper,
        {
          backgroundColor: colorBg,
          marginTop: marginTop,
          borderColor: borderColor,
          borderWidth: borderWidth,
        },
      ]}
      onPress={onPress}>
      <Text style={[styles.textButton, {color: colorText}]}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btnWrapper: {
    padding: RFPercentage(1.8),
    borderRadius: RFValue(8),
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textButton: {
    fontWeight: 500,
    fontSize: RFValue(14),
  },
});
