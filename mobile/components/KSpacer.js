import React from 'react';
import { View } from 'react-native-ui-lib';

export const KSpacer = ({ wid = 10, hei = 10, bg = 'transparent' }) => (
  <View style={{ width: wid, height: hei, backgroundColor: bg }} />
);
