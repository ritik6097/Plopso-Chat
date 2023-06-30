import { View, Text } from 'react-native';
import React from 'react';
import { StyleSheet } from 'react-native';

const ChatInfo = ({ compDetails }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.headingText}>
                Looking for a Referral in {compDetails.role} at {compDetails.company}
            </Text>
            <Text style={styles.description}>{compDetails.description}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        margin: 10,
        padding: 15,
        backgroundColor:
            'linear-gradient(179.91deg, rgba(70, 160, 148, 0.3) 16.02%, rgba(183, 254, 244, 0.036) 127.63%)',
    },
    headingText: {
        width: '60%',
        fontSize: 18,
        fontWeight: 700,
        lineHeight: 22,
    },
    description: {
        fontSize: 13,
        fontWeight: 500,
        lineHeight: 16,
        textAlign: 'justify',
        marginTop: 10,
    },
});

export default ChatInfo;