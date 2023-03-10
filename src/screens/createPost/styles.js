import { StyleSheet } from 'react-native';

import { THEME } from '../../constants/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  textAreaContainer: {
    padding: 5,
  },
  textArea: {
    marginVertical: 30,
    marginHorizontal: 10,
    backgroundColor: 'white',
    height: 100,
    justifyContent: 'flex-start',
    padding: 5,
  },
});
