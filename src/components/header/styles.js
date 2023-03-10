import { StyleSheet } from 'react-native';

import { THEME } from '../../constants/theme/index';

export const styles = StyleSheet.create({
  mainContainer: {
    paddingHorizontal: 24,
    backgroundColor: 'white',
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 10,
    backgroundColor: 'white',
  },
  title: {
    color: THEME.colors.black,
    fontSize: 16,
    fontWeight: 'bold',
  },
  icon: {
    width: 24,
    height: 24,
  },
  space: {
    width: 24,
  },
  circle: {
    width: 44,
    height: 44,
    borderRadius: 44 / 2,
  },
});
