import {StyleSheet} from 'react-native';
export const styles = StyleSheet.create({
  header: {
    flex: 0.2,
    justifyContent: 'flex-end',
    // marginTop: 10,
    paddingHorizontal: 100,
    paddingBottom: 10,
  },
  footer: {
    flex: 3,
    backgroundColor: '#fff',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  text_header: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'center',
  },
  text_footer: {
    color: '#05375a',
    fontSize: 18,
  },
  inputBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    borderWidth: 1,
    borderColor: 'blue',
    borderRadius: 10,
    padding: 7,
  },
  actionError: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#FF0000',
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === 'android' ? 0 : 12,
    paddingLeft: 10,
    color: '#05375a',
  },
  errorMsg: {
    color: '#FF0000',
    fontSize: 14,
  },
  button: {
    alignItems: 'center',
    marginTop: 30,
  },
  signIn: {
    width: '100%',
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: 'rgba(16, 176, 176, 1)',
  },
  signUp: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    marginTop: 15,
  },
  textSign: {
    fontWeight: 'bold',
    color: '#009387',
    fontSize: 15,
  },
});
