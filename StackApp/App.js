import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View, Button, Image, TextInput, ScrollView } from 'react-native';

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'This is an demo app' }}
        />
        <Stack.Screen name="TextScreen" component={TextScreen} />
        <Stack.Screen name="ImageScreen" component={ImageScreen} />
        <Stack.Screen name="TextInputScreen" component={TextInputScreen} />
        <Stack.Screen name="ScrollViewScreen" component={ScrollViewScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Button
        title="Go to Text component"
        onPress={() =>
          navigation.navigate('TextScreen')
        }
      />

      <Text>Second component</Text>
      <Button
        title="Go to Image component"
        onPress={() =>
          navigation.navigate('ImageScreen')
        }
      />

      <Text>Third component</Text>
      <Button
        title="Go to TextInput component"
        onPress={() =>
          navigation.navigate('TextInputScreen')
        }
      />

      <Text>Fourth component</Text>
      <Button
        title="Go to ScrollView component"
        onPress={() =>
          navigation.navigate('ScrollViewScreen')
        }
      />
    </View>
  );
};

const TextScreen = ({ navigation }) => {
  return (
    <Text>
      This is an outer text line {'\n'}
      <Text> {'\t'} This is an inner text line </Text>
    </Text>
  );
};

const ImageScreen = ({ navigation }) => {
  return (
      <Image source = {require('./media/demo.jpg')}></Image>
  );
};

const TextInputScreen = ({ navigation }) => {
  const [text, onChangeText] = React.useState(null);
  return (
    <TextInput
      onChangeText={onChangeText}
      value={text}
      placeholder="You can type here"
    />
  );
};

const ScrollViewScreen = ({ navigation }) => {
  return (
    <ScrollView>
      <Text style={{fontSize: 100}}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      </Text>
    </ScrollView>
  );

};


export default MyStack;

