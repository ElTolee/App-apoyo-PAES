import React, { ReactElement, ReactNode } from 'react'
import { Button, Linking, SectionList, StyleSheet, Text } from 'react-native'


const UnityContentList = (list: any): ReactElement => {
    return (
        <>
            <SectionList sections={list["list"]}
                renderItem={({ item }) => <Button title={"Descargar PDF"} onPress={() => Linking.openURL(item)} />}
                renderSectionHeader={({ section }) => <Text style={styles.listItem}>{section.title}</Text>}
                keyExtractor={(item, index) => `basicListEntry-${item}`}
            />
            <Text> </Text>
        </>
    )
}

const styles = StyleSheet.create({
    listItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        fontSize: 20
    },
    title: {
        color: 'black',
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 5
    },


});

export default UnityContentList;