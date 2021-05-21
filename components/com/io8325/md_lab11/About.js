import React from "react";
import {
    View, Text,
    StyleSheet
} from 'react-native'

const About = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.txt}>Сушильников Кирило</Text>
            <Text style={styles.txt}>Група ІО-83</Text>
            <Text style={styles.txt}>ЗК ІО-8325</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        flexDirection:'column',
        alignItems:'center',
    },
    txt: {
        fontSize: 20
    },
});

export default About
