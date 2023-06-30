
import React from 'react';
import ChatInfo from '../ChatInfo';
import { StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useState } from 'react';
import { View, Text, FlatList, TextInput, TouchableOpacity } from 'react-native';
import Message from '../Message';
import * as firebase from "firebase/app";
import { getDatabase, ref, set, onValue } from "firebase/database";
import 'firebase/database';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { initializeFirestore, CACHE_SIZE_UNLIMITED } from "firebase/firestore";


// Initialize Firebase app

const ChatScreen = () => {
    const firebaseConfig = {
        apiKey: 'AIzaSyDj6EJAzxOLt0GLosuKuWHWpF7HIRlm4UM',
        authDomain: 'chat-plopso.firebaseapp.com',
        databaseURL: 'https://chat-plopso-default-rtdb.asia-southeast1.firebasedatabase.app',
        projectId: 'chat-plopso',
        storageBucket: 'chat-plopso.appspot.com',
        messagingSenderId: '687517769988',
        appId: '1:687517769988:android:c8b8f3b3b50164abedf051',
    };


    const app = firebase.initializeApp(firebaseConfig);
    //console.log('Firebase app initialized:', app);

    console.log
    const renderMessageItem = (item, index) => {
        console.log(item);
        return (
            <Message msg_obj={item} />
        );
    }


    // Send message to Firebase
    function writeUserData(msg) {
        const db = getDatabase();
        sender_id = msg.sender_id;
        receiver_id = msg.receiver_id;
        chat_id = sender_id + receiver_id;
        time = msg.time;

        set(ref(db, `/${chat_id}/${time}`), msg);
    }

    const [messages, setMessages] = useState([]);
    const [inputText, setInputText] = useState('');
    const handleMessageSend = () => {
        if (inputText.trim() === '') {
            return;
        }

        const newMessage = {
            content: inputText,
            time: new Date().toLocaleTimeString(),
            belongs_to: true,
            sender_id: "RITIK",
            receiver_id: "AMIT",
            msg_type: "text"
        };

        setMessages([...messages, newMessage]);
        writeUserData(newMessage);
        setInputText('');
    };
    const db = getDatabase();
    const remote_copy = ref(db, 'RITIKAMIT');
    const local_copy = ref(db, 'RITIKAMIT');
    onValue(remote_copy, (snapshot) => {
        local_copy.set(snapshot.val());
    });
    console.log(local_copy);
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
        console.log(auth);
        if (user) {
            const uid = user.uid;
            console.log(uid);
        } else {
            console.log('user is not here');
        }
    });
    const compDetails = {
        role: 'FrontEnd Role',
        company: 'Amazon',
        description:
            'We are looking for an adept Software Developer. You will develop top-notch software that work across platforms and is scalable.',
    };
    return (
        <ScrollView>
            <ScrollView>
                <View style={styles.container}>
                    <View>
                        <Text style={styles.text_header}>This chat is related to...</Text>
                        <ChatInfo compDetails={compDetails} />
                        <View style={styles.info_header}>
                            <Text style={styles.contact_text}>
                                The referrer is from your contact list
                            </Text>
                            <Text style={styles.date_time}>Today, 12:00 PM</Text>
                        </View>
                        <View>
                            <FlatList
                                data={messages}
                                renderItem={({ item }) => messages.length > 0 ? renderMessageItem({ item }) : null}
                                keyExtractor={(item) => item.index}
                            />
                        </View>
                        <View
                            style={{
                                alignItems: 'flex-end',
                            }}>
                        </View>
                    </View>

                </View>
            </ScrollView>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Type a message"
                    value={inputText}
                    onChangeText={setInputText}
                />
                <TouchableOpacity style={styles.sendButton} onPress={handleMessageSend}>
                    <Text style={styles.sendButtonText}>Send</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({

    container: {
        flex: 1,
    },
    scrollContainer: {
        flex: 1,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderTopWidth: 1,
        borderTopColor: '#C4E8C2',
        paddingHorizontal: 15,
        paddingBottom: 10,
        bottom: 0,
        left: 0,
        right: 0,
    },
    input: {
        flex: 1,
        height: 40,
        borderWidth: 1,
        borderColor: '#C4E8C2',
        borderRadius: 20,
        paddingHorizontal: 15,
        marginRight: 10,
    },
    sendButton: {
        backgroundColor: '#C4E8C2',
        borderRadius: 20,
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    sendButtonText: {
        fontWeight: '500',
        color: 'white',
    },
    text_header: {
        padding: 10,
        fontSize: 13,
        fontWeight: 400,
        fontStyle: 'italic',
        lineHeight: 16,
    },
    info_header: {
        marginTop: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    contact_text: {
        fontSize: 16,
        fontWeight: 600,
        lineHeight: 19,
        textAlign: 'center',
        color: ' rgba(0, 77, 64, 0.5)',
    },
    date_time: {
        paddingTop: 10,
        fontSize: 14,
        fontWeight: 400,
        lineHeight: 17,
        color: 'rgba(38, 50, 56, 0.5)',
    },
    inputView: {
        marginTop: 120,
        padding: 10,
    },
    chatInput: {
        borderWidth: 1,
        borderColor: '#46A094',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 6,
    },


});



export default ChatScreen;