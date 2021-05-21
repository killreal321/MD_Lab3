import React from "react";
import {View, Text, ScrollView, Image, Dimensions, TouchableHighlight, TouchableOpacity} from 'react-native'
import { Appbar } from 'react-native-paper';
import BooksList from '../../../../assets/BooksList.json'
import { useScreenDimensions, AppTabTheme, getImage } from '../../../../invariables/invariables'
import SearchBar from "react-native-dynamic-search-bar";
import Icon from 'react-native-vector-icons/FontAwesome'

let books = [];
BooksList.books.map( item => (books.push(item)) )

const Books = ({ navigation }) => {

    const [bookList, setBookList] = React.useState(books)
    const [searchRes, setSearchRes] = React.useState('')

    const screenData = useScreenDimensions();

    const deleteBook = (id) => {
        const idx = bookList.findIndex((el) => el.isbn13 === id)
        const newBooksData = [...bookList.slice(0, idx),...bookList.slice(idx + 1)]
        setBookList(newBooksData)
    };

    const filterBooks = (booksData, text) => {
        if(text.trim().length === 0 || text.length === 0) {
            return booksData
        } else {
            return booksData.filter((item) => {
                if(
                    item.title
                        .replace(/[^a-zA-Z ]/g, "")
                        .toLowerCase()
                        .indexOf(text)> -1 ){
                    return (
                        item
                    )
                }
            })
        }
    }

    const visibleItems = filterBooks(bookList, searchRes)

    return (
        <ScrollView style={{ backgroundColor: '#eee'}}>
            <View>
                <Appbar.Header theme={ AppTabTheme }>
                    <Appbar.Action
                        icon="home"
                    />
                    <SearchBar
                        style={{ backgroundColor: '#eee', flex: 1}}
                        placeholder="Search"
                        onClearPress={() => {setSearchRes('')}}
                        onChangeText={(text) =>
                            setSearchRes(
                                text.toLowerCase()
                                    .replace(/[^a-zA-Z ]/g, "")
                                    .replace(/\s+/g, ' ')
                                    .trim()
                                    .replace(/,/g, '')
                            )}
                    />
                    <Appbar.Action
                        icon="plus"
                        onPress={() => {
                            navigation.navigate('AddThere', {
                                bookList: bookList,
                                setBookList: setBookList
                            });
                        }}
                    />
                </Appbar.Header>
            </View>
            <View>
                {
                    visibleItems.length === 0 ?
                        <View style={{
                            height: Dimensions.get('screen').height,
                            paddingTop: screenData.isLandscape ? '15%' : '65%',
                            flexDirection:'column',
                            alignItems:'center'
                        }}>
                            <Text style={{fontSize: 20}}>
                                Books not found
                            </Text>
                        </View> :
                    visibleItems.map(( item, index) => {
                        return(
                            <View key={ index }>
                                <TouchableOpacity
                                    onPress={() => {
                                        navigation.navigate('Info', {
                                            Id: item.isbn13,
                                        });
                                    }}
                                >
                                    <View style={{
                                        backgroundColor: '#FFFFFF',
                                        borderRadius: 0,
                                        flexDirection: 'row',
                                        marginTop: 2,
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
                                            marginLeft: '5%',
                                            width: '76%'
                                        }}>
                                            <Text style={{
                                                flex: 0,
                                                width: screenData.isLandscape ? '100%' : '40%',
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
                                                width: screenData.isLandscape ? '100%' : '60%',
                                                fontSize: 15,
                                                marginBottom: 10,
                                                marginTop: 10,
                                                textAlign: 'left',
                                            }}>
                                                {
                                                    item.subtitle.length === 0 ?
                                                        'That is book' :
                                                        item.subtitle.length >= 40 ?
                                                            item.subtitle.slice(0, 40 - 1) + '…' :
                                                            item.subtitle
                                                }
                                            </Text>
                                            <Text style={{
                                                position: 'absolute',
                                                bottom: -15,
                                                marginBottom: '5%'
                                            }}>
                                                Price: {
                                                item.price.length === 0 ?
                                                    'Priceless' :
                                                    item.price
                                            }
                                            </Text>
                                        </View>
                                        <TouchableHighlight
                                            style={{
                                                position: "absolute",
                                                right: 0,
                                                width: screenData.isLandscape ? '10%' : '12%',
                                                height: '22%',
                                                borderRadius: screenData.isLandscape ? 25 : 30,
                                                backgroundColor: '#FFFFFF'
                                            }}
                                            onPress={() => { deleteBook(item.isbn13) }}>
                                            <View>
                                                <Icon
                                                    onPress={() => { deleteBook(item.isbn13) }}
                                                    style={[{
                                                        color: 'black',
                                                        flex: 0,
                                                        marginTop: screenData.isLandscape ? '15%' : '23%',
                                                        alignSelf: 'center',
                                                    }]}
                                                    size={22}
                                                    name={'trash'}
                                                />
                                            </View>
                                        </TouchableHighlight>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        )
                    })
                }
            </View>
        </ScrollView>
    )
}

export default Books
