import { StyleSheet } from 'react-native';
import { hp, wp } from '../../theme/styles/dimensions';
import { COLORS } from '../../theme/styles/theme';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: wp(1),
    paddingTop: hp(4),
    paddingBottom: hp(1),
    right:6.5
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  backButton: {
    fontWeight: '500',
    borderRadius: 50,
    fontSize: 20,
    borderWidth: 1,
    borderColor: COLORS.tabIcon,
    padding: 9,
    width: 44,
    height: 44,
  },
  heading: {
    fontWeight: '500',
    fontSize: 20,
    lineHeight: 38,
    color: COLORS.black,
    textAlign: 'center',

    flex: 1,
  },
  subheading: {
    fontSize: 15,
    fontWeight: '600',
    color: COLORS.black,
    marginTop: hp(10),
    textAlign: 'center',
  },
});

export default styles;
