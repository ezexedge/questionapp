import { StyleSheet } from 'react-native';

import { THEME } from '../../constants/theme';

export const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginVertical: 10,
    height: 'auto',
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
    marginVertical: 5,
  },
  commentsText: {
    textAlign: 'center',
    marginVertical: 10,
  },
  user: {
    flexDirection: 'row',
    marginBottom: 6,
  },
  image: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  name: {
    fontSize: 16,
    marginTop: 5,
  },
  card: {
    marginHorizontal: 0,
    marginVertical: 0,
  },
});
