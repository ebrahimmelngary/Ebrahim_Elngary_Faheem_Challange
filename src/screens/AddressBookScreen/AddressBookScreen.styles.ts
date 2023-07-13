import { StyleSheet } from 'react-native';
import { COLORS } from '../../common/colors';
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  loader: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerContainer: {
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
