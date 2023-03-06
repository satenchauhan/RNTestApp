import {StyleSheet, Dimensions} from 'react-native';
const height = Dimensions.get('screen').height;
export default StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: height,
  },
  homeTabs: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
    marginTop: '30%',
  },
  btnTab: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    height: 100,
    margin: 10,
    paddingVertical: 12,
    paddingHorizontal: 12,
    backgroundColor: '#fff',
    borderWidth: 2,
    borderRadius: 8,
    shadowColor: '#3851DD',
    // borderColor: 'rgba(5, 30, 117, 0.8)',
    borderColor: '#3851DD',
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 10,
  },
  btnLabel: {
    color: '#3851DD',
    fontSize: 15,
    fontWeight: 'bold',
    marginVertical: 5,
  },
  pressed: {
    backgroundColor: '#3851DD',
  },
});
