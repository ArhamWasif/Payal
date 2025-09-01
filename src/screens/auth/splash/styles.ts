import { StyleSheet } from 'react-native';
import { hp, wp } from '../../../theme/styles/dimensions';

const styles = StyleSheet.create({
  container: {
    // left: 10,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    width: "100%",
    height: hp(100),
  },
 
  container1: { backgroundColor: '#fff' },
  logo: {
    width: '50%',
    height: 89,
    alignSelf: 'center',
  },
  logo1: {
    width: 82,
    height: 33,
    position: 'absolute',
    bottom: hp('3'),
    alignSelf: 'center',
  },
});

export default styles;
