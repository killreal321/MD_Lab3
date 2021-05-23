import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { MainTheme } from '../../../../invariables/invariables'
import AddScreen from "./AddScreen";
import ImagesBox from "./ImagesBox";
import About from "./About";
import Books from "./Books";
import Info from "./Info";

const Stack = createStackNavigator();

const stackOfScreens = () => {
    return(
        <Stack.Navigator initialRouteName="Books">
            <Stack.Screen
                name="Books"
                component={Books}
                options={{
                    headerShown: false,
                    tabBarLabel: 'Books',
                    tabBarIcon: () => (
                        <View>
                            <Icon
                                name={'film'}
                            />
                        </View>
                    ),
                }}
            />
            <Stack.Screen
                name="Info"
                component={Info}
            />
            <Stack.Screen
                name="AddThere"
                component={AddScreen}
            />
        </Stack.Navigator>
    )
}

const Tab = createMaterialBottomTabNavigator();

const RootNavigator = () => {
    return (
        <NavigationContainer theme={MainTheme}>
            <Tab.Navigator
                shifting={true}
                sceneAnimationEnabled={true}
                initialRouteName="Creator"
            >
                <Tab.Screen
                    name="About"
                    component={About}
                    options={{
                        tabBarLabel: 'Lab1',
                        tabBarIcon: () => (
                            <View>
                                <Icon
                                    style={[{color: '#F9F3E7'}]}
                                    size={25}
                                    name={'home'}
                                />
                            </View>
                        ),
                    }}
                />

                <Tab.Screen
                    name='Lab3'
                    options={{
                        tabBarLabel: 'Lab3',
                        tabBarIcon: () => (
                            <View>
                                <Icon
                                    style={[{color: '#F9F3E7'}]}
                                    size={25}
                                    name={'book'}
                                />
                            </View>
                        ),
                    }}
                    component={stackOfScreens}
                />
                <Tab.Screen
                    name="ImagesBox"
                    component={ImagesBox}
                    options={{
                        tabBarLabel: 'Lab5',
                        tabBarIcon: () => (
                            <View>
                                <Icon
                                    style={[{color: '#F9F3E7'}]}
                                    size={25}
                                    name={'th'}
                                />
                            </View>
                        ),
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
}
export default RootNavigator
