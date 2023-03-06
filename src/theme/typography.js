import {Platform} from 'react-native';

export const typography = {
  /**
   * The primary font.  Used in most places.
   */
  RB_B: Platform.select({ios: 'Roboto-Bold', android: 'Roboto-Bold'}),
  RB_R: Platform.select({
    ios: 'Roboto-Regular',
    android: 'Roboto-Regular',
  }),
};
