import { StyleSheet } from 'react-native';
import { COLORS } from '../../common/colors';
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  headerContainer: {
    flex: 1,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  headerTitles: {
    backgroundColor: COLORS.lightOrange,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  loader: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  innerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    backgroundColor: COLORS.lightOrange,
    marginBottom: 16,
  },
  emptyText: {
    textAlignVertical: 'center',
    textAlign: 'center',
  },
});
