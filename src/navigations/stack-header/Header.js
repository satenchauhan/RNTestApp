import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {StackActions} from '@react-navigation/native';
import {Icon} from '../../components';
import {typography} from './../../theme/typography';
// import {Colors} from '../../theme/colors';
import {Colors} from './../../theme/colors';
const popAction = StackActions.pop(1);

const ScreenOptionStyle = {
  headerStyle: {
    backgroundColor: Colors.primary,
  },
  headerTintColor: 'white',
  headerBackTitle: 'Back',
};

const HEADERTITLE = {
  fontFamily: typography.Roboto_Bold,
  fontWeight: '900',
  fontSize: 24,
  color: Colors.dark,
  textAlign: 'center',
  // textTransform:'uppercase'
};

const goBackButton = navigation => {
  return (
    <TouchableOpacity activeOpacity={0.2}>
      <Icon
        type="ionicon"
        name="arrow-back"
        size={25}
        color="#fff"
        underlayColor={'#23BF7E'}
        backgroundColor={'#23BF7E'}
        onPress={() => navigation.navigate('WORKBOOK')}
      />
    </TouchableOpacity>
  );
};

const HeaderMenubar = () => {
  const navigation = useNavigation();
  return (
    <Icon
      type="feather"
      name="menu"
      size={25}
      color={color.dark}
      style={{marginLeft: 5, marginTop: 5}}
      onPress={() => navigation.openDrawer()}
    />
  );
};

const HeaderLeftButton = ({navigation}) => {
  // const navigation = useNavigation();
  return (
    <Icon
      type="ionicon"
      name="arrow-back"
      size={25}
      color="white"
      onPress={() => navigation.goBack(null)}
    />
  );
};

const HeaderTitle = props => {
  const navigation = useNavigation();
  return (
    <View style={{}}>
      <Text style={HEADERTITLE}>{props.headerName}</Text>
    </View>
  );
};

const HeaderRightButton = ({navigation}) => {
  // const navigation = useNavigation();
  const GotoRoute = () => navigation.navigate('NewClient');
  return (
    <TouchableOpacity style={{flexDirection: 'row'}} onPress={GotoRoute}>
      <Icon
        type="material"
        name="edit"
        size={25}
        style={{color: '#fff', marginRight: 20}}
      />
      <Icon
        type="Entypo"
        name="dots-three-vertical"
        size={25}
        style={{color: '#fff', marginRight: 10}}
      />
    </TouchableOpacity>
  );
};

const StackHeader = ({route}) => {
  // const {hide, setHide} = useContext(SuperContext);
  // console.log(route)
  const routeName = route.name;
  return {
    headerLeft: () => <HeaderMenubar />,
    headerTitleAlign: 'center',
    headerTitle: () => <HeaderTitle headerName={routeName} />,
    headerRight: () => null,
    // headerRight: () => ( routeName==="WORKBOOK" ?  <HeaderRightButton />  : null   ),
  };
};

export {
  ScreenOptionStyle,
  HeaderMenubar,
  HeaderLeftButton,
  HeaderRightButton,
  HeaderTitle,
  StackHeader,
};

const Stackstyles = StyleSheet.create({
  common: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingRight: 10,
  },
  saveBtn: {
    backgroundColor: 'rgba(256,256,256,0.5)',
    color: '#fff',
    fontSize: 18,
    marginRight: 20,
    lineHeight: 21,
    padding: 2.5,
    paddingLeft: 10,
    paddingRight: 10,
  },
  dots: {
    borderRadius: 20,
    margin: 3,
  },
  createBtn: {
    /*  shadowColor: "gray",
            shadowOffset: {
            width: -1,
            height: 2,
            },
            shadowOpacity: 1,
            shadowRadius: 5,
            elevation: 5,   */
  },
  Btn: {
    backgroundColor: '#2196F3',
    color: '#fff',
    fontSize: 16,
    lineHeight: 20,
    textAlign: 'center',
    padding: 8,
    paddingLeft: 20,
    paddingRight: 20,
    width: '100%',
    borderRadius: 8,
    shadowColor: 'gray',
    shadowOffset: {
      width: -1,
      height: 2,
    },
    shadowOpacity: 1,
    shadowRadius: 5,
    elevation: 5,
  },
  headerTitle: {
    fontSize: 30,
    color: '#FFFFFF',
    fontFamily: 'Roboto-Black',
    textAlign: 'center',
  },
  NoteTxt: {
    fontFamily: 'Roboto-Black',
    fontSize: 22,
    color: '#FFFFFF',
    marginRight: 20,
  },
});
