import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { MainTheme } from '../../../../invariables/invariables'
import Info_add from "./Info_add";
import Window_images from "./Window_images";
import About from "./About";
import Books from "./Books";
import Info from "./Window_info";

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
                component={Info_add}
            />
        </Stack.Navigator>
    )
}

const Tab = createMaterialBottomTabNavigator();

const Slide_Navigator = () => {
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
                    name='Books'
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
                    component={Window_images}
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
export default Slide_Navigator
