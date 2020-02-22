import React from 'react';
import {  StyleSheet, View, Text, FlatList } from 'react-native';

export default function History(props) {
    navigationOptions = {title: 'History'};

    const {params} =props.navigation.state;

    return(
        <View style={styles.wholeScreen}>
            <View>
                <Text style={styles.titleText}> History </Text>
                    <FlatList
                    data={params.equations}
                    renderItem={( { item } ) =>
                    <Text style={styles.listText}> {item} </Text> }
                    keyExtractor= {(item, index) => index.toString() }
                    // inverted={true} uusin tulos ensin
                />
            </View>
        </View>
    );
};
History.navigationOptions = ({navigate}) => ({title: 'History'});

const styles = StyleSheet.create({
    wholeScreen: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center'
    },
    titleText: {
        fontSize: 22,
        color: 'purple',
        fontWeight: 'bold'
      },
      listText: {
        fontSize: 18,
        color: 'purple'
      }
  });
  