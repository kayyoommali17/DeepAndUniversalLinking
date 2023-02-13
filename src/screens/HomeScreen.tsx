import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation<any>();
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>HomeScreen</Text>
      <Button
        onPress={() => navigation.navigate('Detail')}
        title="Goto Details Screen"
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
