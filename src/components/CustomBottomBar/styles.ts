import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  bottomBar: {
    backgroundColor: 'black',
    width: '100%',
    height: 72,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
    alignContent: 'center',
    alignSelf: 'center',
    borderRadius: 100,
  },
  Icon: {
    width: 24,
    height: 24 ,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  add: {
    width: 50 ,
    alignItems: 'center',
    justifyContent: 'center',
    height: 50 ,
    backgroundColor: '#B18D5C',
    borderRadius: 100,
    padding: 10,
  },
  tabButton:{
    padding: 10,
    borderRadius: 100, 
    // backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabItem: {
    padding: 10,
    // borderRadius: 10,
  },
  activeTab: {
    backgroundColor: '#222222', // active tab ka background thoda alag
  },
  icon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
});
export default styles;









