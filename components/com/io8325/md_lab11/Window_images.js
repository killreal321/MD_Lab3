import React, { useState, useEffect } from 'react';
import {
    View, Text,
    ScrollView, Dimensions
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { Appbar } from 'react-native-paper';
import { AppTabTheme, useScreenDimensions } from "../../../../invariables/invariables";
import SearchBar from "react-native-dynamic-search-bar";
import ImagesMagic from "./Images_size";
import { useSelector, useDispatch } from 'react-redux';
import { addImagesToStorage } from '../../../../bd/actions';
import * as Network from 'expo-network';

const arrayStatement = (arr = [], maxArrSize = 7) => {

    const result = [];

    for (let i = 0; i < Math.ceil(arr.length / maxArrSize); i++) {
        result[i] = arr.slice(i * maxArrSize, (i * maxArrSize) + maxArrSize);
    }

    return result;
};

const Window_images = () => {

    const [box, setBox] = useState([]);

    useEffect(() => {
        const url = `https://pixabay.com/api/?key=19193969-87191e5db266905fe8936d565&q=night+city&image_type=photo&per_page=31`;
        let cleanupFunction = false;
        const fetchData = async () => {
            try {
                const fetchResult = await fetch(url);
                const loadedData = await fetchResult.json();
                const loadedDataURIs = loadedData['hits'].map((lD) => ({ uri: lD['largeImageURL'] }));
                setBox(loadedDataURIs)
            } catch (e) {
                console.error(e.message)
            }
        };
        fetchData();
        return () => cleanupFunction = true;
    }, []);

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
                            backgroundColor: '#ccc',
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
                            backgroundColor: '#ccc'
                        }}>
                            { ImgComponent }
                        </ScrollView>
                }
            </View>
        </>
    );
};

export default Window_images
