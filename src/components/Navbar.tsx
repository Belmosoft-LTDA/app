import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import IoniconsIcon from 'react-native-vector-icons/Ionicons';

export const Navbar: React.FC = () => {
  return (
    <View>
      <TouchableOpacity>
        <IoniconsIcon name="bell" />
      </TouchableOpacity>
    </View>
  );
};
