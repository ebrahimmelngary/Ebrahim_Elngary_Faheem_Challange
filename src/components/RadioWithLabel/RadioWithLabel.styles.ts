
import { StyleSheet } from 'react-native';
import { COLORS } from '../../common/colors';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioButton: {
    width: 25,
    height: 25,
    marginHorizontal: 10,
    borderRadius: 25,
    borderWidth: 3,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: COLORS.white,
  },
  activeRadioButton: {
    width: 15,
    height: 15,
    borderRadius: 15,
    backgroundColor: COLORS.white,
    alignSelf: 'center',
  },
  inActiveRadioButton: {
    width: 15,
    height: 15,
  },
});
