import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import { BtnTheme } from "../../../../invariables/invariables";
import { Button } from "react-native-elements";
import { FloatingLabelInput } from 'react-native-floating-label-input';

const Info_add = ({ navigation, route }) => {

    const { bookList } = route.params;
    const { setBookList } = route.params;

    const [title, setTitle] = useState('');
    const [subtitle, setSubtitle] = useState('');
    const [price, setPrice] = useState('');

    function trySpread(arr, setArr) {
        try {
            const parsed = parseInt(price);

            let Idx = 50

            if (title === '') {
                setTitle('Title empty')
                setTimeout(() => {
                    setTitle('')
                }, 2000);
            } else if (subtitle === '') {
                setSubtitle('Subtitle empty')
                setTimeout(() => {
                    setSubtitle('')
                }, 2000);
            } else if (isNaN(parsed)) {
                setPrice('must be a number')
                setTimeout(() => {
                    setPrice('')
                }, 2000);
            } else {
                const newItem = {
                    image: '',
                    isbn13: Idx,
                    price: price,
                    subtitle: subtitle,
                    title: title,
                }

                const newBooksData = [...arr, newItem]

                setArr(newBooksData)

                console.log(newBooksData)
                navigation.navigate('Books')
            }
        }catch(error) {
            console.log('error', error);
        }
    }

    return (
        <ScrollView
            keyboardShouldPersistTaps="handled"
        >
            <View style={{padding: 50, flex: 1}}>
                <View style={{marginBottom: 20}}>
                    <FloatingLabelInput
                        countdownLabel="chars left"
                        placeholder={''}
                        maxLength={100}
                        showCountdown={true}
                        style={{color: '#fff'}}
                        label={'Title'}
                        value={title}
                        rightComponent={(
                            <TouchableOpacity
                                style={{
                                    alignContent:'center',
                                    justifyContent:'center'
                                }}
                                onPress={()=>{
                                    setTitle('')
                                }}>
                                <Text>✕</Text>
                            </TouchableOpacity>
                        )}
                        onChangeText={(val) => setTitle(val)}
                    />
                </View>
                <View style={{marginBottom: 20}}>
                    <FloatingLabelInput
                        label={'Subtitle'}
                        value={subtitle}
                        rightComponent={(
                            <TouchableOpacity
                                style={{
                                    alignContent:'center',
                                    justifyContent:'center'
                                }}
                                onPress={()=>{
                                    setSubtitle('')
                                }}>
                                <Text>✕</Text>
                            </TouchableOpacity>
                        )}
                        onChangeText={(val) => setSubtitle(val)}
                    />
                </View>
                <View style={{marginBottom: 20}}>
                    <FloatingLabelInput
                        keyboardType="numeric"
                        label={'Price'}
                        value={price}
                        rightComponent={(
                            <TouchableOpacity
                                style={{
                                    alignContent:'center',
                                    justifyContent:'center'
                                }}
                                onPress={()=>{
                                    setPrice('')
                                }}>
                                <Text>✕</Text>
                            </TouchableOpacity>
                        )}
                        onChangeText={(val) => setPrice(val)}
                    />
                </View>
                <View style={{ flex: 1, alignItems: 'center' }}>
                    <Button
                        onPress={() => {
                            trySpread(bookList, setBookList)
                        }}
                        theme={BtnTheme}
                        title="Add"
                        buttonStyle={{ width: 150 }}
                    />
                </View>
            </View>
        </ScrollView>
    )
}

export default Info_add
