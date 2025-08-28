import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { Dimensions } from 'react-native';

const W_WIDTH = Dimensions.get('window').width;
const W_HEIGHT = Dimensions.get('window').height;

const S_Width = Dimensions.get('screen').width;
const S_Height = Dimensions.get('screen').height;

export { wp, hp, W_WIDTH, W_HEIGHT, S_Width, S_Height };
