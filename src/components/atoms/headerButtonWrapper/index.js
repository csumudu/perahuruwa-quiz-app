import React from 'react';
import {HeaderButton} from 'react-navigation-header-buttons';
import Icon from 'react-native-vector-icons/FontAwesome';

const HeaderButtonWrapper = (props) => {
  return <HeaderButton {...props} IconComponent={Icon} iconSize={20} />;
};

export default HeaderButtonWrapper;
