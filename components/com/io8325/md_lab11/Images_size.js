import React from 'react';
import { View, StyleSheet } from 'react-native';
import Image from 'react-native-image-progress';

const styles = StyleSheet.create({
    imageBlockContainer: {
        display: "flex",
        flexDirection: "column",
    },
    smallImageContainer: {
        display: "flex",
        flexDirection: "row"
    },
    centralBlock:  {
        display: "flex",
        flexDirection: "row"
    },
    centralBlockColumn: {
        display: "flex",
        flexDirection: "column"
    }
})

const ImagesMagic = ({ imagesData, width, height}) => {

    const normalImageSize = {
        width: width,
        height: height
    }

    const tripleImageSize = {
        width: width * 2,
        height: height * 2
    };

    const ImageOf = (uri, optionsStyles = normalImageSize) => (
        <Image
            style={optionsStyles}
            source={uri}
            threshold={150}
        />
    );

    return (
        <View style={styles.imageBlockContainer}>
            <View style={styles.smallImageContainer}>
                {imagesData[0] && ImageOf(imagesData[0])}
                {imagesData[1] && ImageOf(imagesData[1])}
                {imagesData[2] && ImageOf(imagesData[2])}
            </View>
            <View style={styles.centralBlock}>
                <View style={styles.centralBlockColumn}>
                    {imagesData[3] && ImageOf(imagesData[3])}
                    {imagesData[5] && ImageOf(imagesData[4])}
                </View>
                {imagesData[4] && ImageOf(imagesData[0], tripleImageSize)}
            </View>
            <View style={styles.smallImageContainer}>
                {/*{imagesData[6] && ImageOf(imagesData[5])}*/}
                {imagesData[7] && ImageOf(imagesData[6])}
                {imagesData[8] && ImageOf(imagesData[7])}
            </View>
        </View>
    );
};

export default ImagesMagic
