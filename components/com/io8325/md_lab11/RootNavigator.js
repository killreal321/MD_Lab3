import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { MainTheme } from '../../../../invariables/invariables'
import About from "./About";
import Books from "./Books";

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
                    name="lab1"
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
                    name="Lab3"
                    component={Books}
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
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
}
export default RootNavigator
