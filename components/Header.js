/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {Dimensions} from 'react-native';
import {Header, Icon} from '@rneui/base';

const SCREEN_WIDTH = Dimensions.get('window').width;

export default () => {
  return (
    <Header
      backgroundColor="#4c00b0"
      backgroundImageStyle={{}}
      barStyle="default"
      centerComponent={{
        text: 'Expense Tracker',
        style: {color: '#fff'},
      }}
      centerContainerStyle={{paddingVertical: 10}}
      containerStyle={{width: SCREEN_WIDTH}}
      // leftComponent={{icon: 'menu', color: '#fff'}}
      placement="center"
      // rightComponent={{icon: 'home', color: '#fff'}}
    />
  );
};
