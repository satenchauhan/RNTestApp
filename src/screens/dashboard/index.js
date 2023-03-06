import React from 'react';
import {Text, View, Pressable, SafeAreaView, ScrollView} from 'react-native';
import styles from './styles';
import {homeItems} from './home-items';
import {AppIcon, HomeFloatButtons, TopStatusBar} from '../../components';
import {Colors} from '../../theme';

const HomeScreen = () => {
  let id = 0;
  const renderItem = React.useCallback(
    item => (
      <Pressable
        key={item.id}
        style={({pressed}) => [styles.btnTab, pressed && styles.pressed]}
        onPress={null}>
        <Text style={styles.btnLabel}>{item.name}</Text>
        {item.name === 'Expenses' ? (
          <AppIcon type="fa" name="money" size={40} color="lightgreen" />
        ) : (
          item.icon
        )}
      </Pressable>
    ),
    [],
  );
  return (
    <SafeAreaView>
      <TopStatusBar bgColor={Colors.primary} />
      <ScrollView containerStyle={{flex: 1}}>
        <View style={styles.mainContainer} horizontal={false}>
          <View style={styles.homeTabs}>{homeItems.map(renderItem)}</View>
          <HomeFloatButtons />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
