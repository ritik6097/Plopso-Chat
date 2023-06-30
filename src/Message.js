import { View, Text } from 'react-native';
import React from 'react';
import { StyleSheet } from 'react-native';

const Message = (props) => {
    console.log(props);
    return (
        <View style={[styles.container, props.msg_obj.item.belongs_to ? styles.right : styles.left]} >
            <Text style={styles.content}>
                {props.msg_obj.item.content}
            </Text>
            <Text style={styles.date}>{props.msg_obj.item.time}</Text>
        </View>

    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgba(196, 232, 194, 0.7)',
        marginVertical: 10,
        marginRight: 10,
        marginLeft: 10,
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderWidth: 2,
        borderColor: '#C4E8C2',
        borderTopLeftRadius: 5,
        borderTopRightRadius: 20,
        borderBottomRightRadius: 5,
        borderBottomLeftRadius: 20,
        alignItems: 'flex-end',
        justifyContent: 'center',
        minHeight: 5,
    },
    content: {
        fontSize: 14,
        fontWeight: 400,
        marginBottom: 5,
    },
    date: {
        fontSize: 10,
        fontWeight: 300,
    },
    right: {
        alignSelf: 'flex-end',
    },
    left: {
        alignSelf: 'flex-start',
    },

});

export default Message;