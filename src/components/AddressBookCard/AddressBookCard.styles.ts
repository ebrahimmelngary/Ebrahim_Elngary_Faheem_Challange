import { StyleSheet } from 'react-native';
import { COLORS } from '../../common/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    marginBottom: 10,
    backgroundColor: COLORS.lightGray,
    marginHorizontal: 16,
    borderRadius: 8,
  },
  picture: {
    width: 30,
    height: 30,
    borderRadius: 30,
  },
  details: {
    paddingHorizontal: 10,
  },
});
