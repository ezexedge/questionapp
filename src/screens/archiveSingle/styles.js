import { StyleSheet } from 'react-native';

import { THEME } from '../../constants/theme';

export const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginVertical: 10,
    textAlign: 'center',
  },
  title: {
    textAlign: 'left',
  },
  information: {
    marginVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  contentList: {
    flex: 1,
  },
  textArea: {
    marginVertical: 20,
    backgroundColor: 'white',
    height: 100,
    justifyContent: 'flex-start',
    padding: 5,
  },
  commentsContainer: {
    justifyContent: 'center',
    marginVertical: 40,
  },
  commentsText: {
    textAlign: 'center',
  },
});
