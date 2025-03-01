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
  textAlign?: 'center' | 'left' | 'right' | 'auto' | 'justify' | undefined;
  icon?: any;
};

export const CoreButton = ({
  label,
  colorBg,
  colorText,
  borderColor,
  borderWidth,
  onPress,
  marginTop,
  textAlign = 'right',
  icon,
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
          justifyContent: icon ? 'space-between' : 'center',
        },
      ]}
      onPress={onPress}>
      <Text
        style={[styles.textButton, {color: colorText, textAlign: textAlign}]}>
        {label}
      </Text>
      {icon && icon}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btnWrapper: {
    padding: RFPercentage(1.8),
    borderRadius: RFValue(8),
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
  },
  textButton: {
    fontWeight: 500,
    fontSize: RFValue(14),
  },
});
