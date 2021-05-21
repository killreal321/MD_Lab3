import React from "react";
import {
    View, Text,
    StyleSheet, ScrollView, Dimensions, Image
} from 'react-native'
import { Appbar } from 'react-native-paper';
import BooksList from '../../../../assets/BooksList.json'
import { useScreenDimensions, AppTabTheme, getImage} from '../../../../invariables/invariables'
import SearchBar from "react-native-dynamic-search-bar";

const Books = ({ navigation }) => {

    let books = [];
    BooksList.books.map( item => (books.push(item)) )


    const Home = () => {
        navigation.navigate('Creator');
    }

    // const dim = Dimensions.get('screen')
    const screenData = useScreenDimensions();

    return (
        <ScrollView style={{ backgroundColor: '#FFFFFF' }}>
            <View>
                <Appbar.Header theme={ AppTabTheme }>
                    <Appbar.Action
                        icon="lab3"
                        onPress={Home}
                    />
                    <SearchBar
                        style={{ backgroundColor: '#FFFFFF', flex: 1}}
                        placeholder="********"
                    />
                    <Appbar.Action
                        icon="plus"
                    />
                </Appbar.Header>
            </View>
            <View>
                {
                    books.map(( item, index) => {
                        return(
                            <View key={ index }>
                                <View style={{
                                    backgroundColor: '#FFFFFF',
                                    borderRadius: 0,
                                    flexDirection: 'row',
                                    margin: 0,
                                }}>
                                    <View>
                                        <Image
                                            resizeMode="cover"
                                            source={
                                                getImage(item.image)
                                            }
                                            style={{
                                                borderRadius: 0,
                                                height: 200,
                                                width: 150
                                            }}
                                        />
                                    </View>
                                    <View style={{
                                        marginLeft: '5%'
                                    }}>
                                        <Text style={{
                                            flex: 0,
                                            width: screenData.isLandscape ? '100%' : '45%',
                                            fontSize: 18,
                                            marginBottom: 10,
                                            marginTop: 10,
                                            textAlign: 'left',
                                        }}>
                                            {
                                                item.title.length >= 43 ?
                                                    item.title.slice(0, 43 - 1) + '…' :
                                                    item.title
                                            }
                                        </Text>
                                        <Text style={{
                                            flex: 0,
                                            width: screenData.isLandscape ? '100%' : '45%',
                                            fontSize: 15,
                                            marginBottom: 10,
                                            marginTop: 10,
                                            textAlign: 'left',
                                        }}>
                                            {
                                                item.subtitle.length === 0 ?
                                                    'The best book to improve your programming skills' :
                                                    item.subtitle.length >= 40 ?
                                                        item.subtitle.slice(0, 40 - 1) + '…' :
                                                        item.subtitle
                                            }
                                        </Text>
                                        <Text style={{
                                            position: 'absolute',
                                            bottom: -5,
                                            marginBottom: '5%'
                                        }}>
                                            Price: {
                                            item.price.length === 0 ?
                                                'Priceless' :
                                                item.price
                                        }
                                        </Text>
                                    </View>
                                </View>
                            </View>
                        )
                    })
                }
            </View>
        </ScrollView>
    )
}

export default Books
