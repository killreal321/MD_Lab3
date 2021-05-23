import React, { useState } from 'react';
import {
    View, Text,
    ScrollView, Dimensions
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { Appbar } from 'react-native-paper';
import { AppTabTheme, useScreenDimensions } from "../../../../invariables/invariables";
import SearchBar from "react-native-dynamic-search-bar";
import ImagesMagic from "./ImagesMagiс";

const arrayStatement = (arr = [], maxArrSize = 7) => {

    const result = [];

    for (let i = 0; i < Math.ceil(arr.length / maxArrSize); i++) {
        result[i] = arr.slice(i * maxArrSize, (i * maxArrSize) + maxArrSize);
    }

    return result;
};

const ImagesBox = () => {

    const [box, setBox] = useState([]);

    const pickImage = async () => {
        const pickedImage = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [3, 4],
            quality: 1
        });

        if (pickedImage.cancelled) {
            console.log('error')
        } else {
            setBox(prevState => [...prevState, { uri: pickedImage.uri }])
        }
    };

    const screenData = useScreenDimensions();

    const ImgComponent = arrayStatement(box).map(
        image => (
            <ImagesMagic
                key={image[0].uri}
                imagesData={image}
                width={screenData.width / 5}
                height={
                    screenData.isLandscape ?
                        screenData.height / 2.5 :
                        screenData.height / 8
                }
            />
        )
    );

    return (
        <>
            <View>
                <Appbar.Header theme={ AppTabTheme }>
                    <Appbar.Action
                        icon="home"
                    />
                    <SearchBar
                        style={{ backgroundColor: '#fff', flex: 1}}
                        placeholder="Search"
                    />
                    <Appbar.Action
                        icon="plus"
                        onPress={pickImage}
                    />
                </Appbar.Header>
            </View>
            <View style={{
                flex: 1
            }}>
                {
                    box.length === 0 ?
                        <View style={{
                            backgroundColor: '#fff',
                            height: Dimensions.get('screen').height,
                            paddingTop: screenData.isLandscape ? '20%' : '65%',
                            flexDirection:'column',
                            alignItems:'center'
                        }}>
                            <Text style={{fontSize: 20}}>
                                No one there
                            </Text>
                        </View> :
                        <ScrollView style={{
                            backgroundColor: '#fff'
                        }}>
                            { ImgComponent }
                        </ScrollView>
                }
            </View>
        </>
    );
};

export default ImagesBox
