import React from 'react';
import {FAB, Portal, Provider} from 'react-native-paper';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
// import useNavigation from '@react-navigation/native';

const HomeFloatButtons = props => {
  // const navigation = useNavigation();
  const [state, setState] = React.useState({open: open});
  const onStateChange = ({open}) => setState({open});
  const {open} = state;

  // const clientScreen = () => navigation.navigate('Client');
  // const createNewQuoteScreen = () => navigation.navigate('NewQuote');
  // const createNewJobScreen = () => navigation.navigate('NewJob');
  // const createNewInvoiceScreen = () => navigation.navigate('NewInvoice');
  // const createNewNoteScreen = () => navigation.navigate('NewNote');
  // const signUpScreen = () => navigation.navigate('signup');

  return (
    <Provider>
      <Portal>
        <FAB.Group
          fabStyle={{backgroundColor: '#3851DD'}}
          style={{marginBottom: -12}}
          open={open}
          icon={open ? 'close' : 'plus'}
          color="white"
          actions={[
            {
              icon: props => <MaterialIcons {...props} name="group" />,
              label: 'New Client',
              color: '#fff',
              // onPress: clientScreen,
              style: {backgroundColor: '#23BF7E'},
            },
            {
              icon: props => <MaterialIcons {...props} name="request-page" />,
              label: 'New Request',
              color: '#fff',
              onPress: () => {
                console.log('RequestsScreen');
              },
              style: {backgroundColor: '#DA1552'},
            },
            {
              icon: props => <MaterialIcons {...props} name="calculate" />,
              label: 'New Quote',
              color: '#fff',
              // onPress: createNewQuoteScreen,
              style: {backgroundColor: '#ECB22E'},
            },
            {
              icon: props => <MaterialIcons {...props} name="work" />,
              label: 'New Job',
              color: '#fff',
              onPress: () => {
                console.log('JobsScreen');
              },
              style: {backgroundColor: '#5A155B'},
            },
            {
              icon: props => <MaterialIcons {...props} name="file-copy" />,
              label: 'New Invoice',
              color: '#fff',
              onPress: () => {
                console.log('InvoicesScreen');
              },
              style: {backgroundColor: '#225091'},
            },
            {
              icon: props => <MaterialIcons {...props} name="sticky-note-2" />,
              label: 'New Note',
              color: '#fff',
              onPress: () => {
                console.log('NoteScreen');
              },
              style: {backgroundColor: '#3851DD'},
            },
          ]}
          onStateChange={onStateChange}
          onPress={() => {
            if (open) {
            }
          }}
        />
      </Portal>
    </Provider>
  );
};

export default HomeFloatButtons;
