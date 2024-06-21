
// serverTimestamp showtime at which msg was created
// adds document to collection
import { query, addDoc, collection, onSnapshot, serverTimestamp, where, orderBy } from "firebase/firestore";
import { useEffect, useState } from "react";

import { auth, db } from "../firebase";
import '../Styles/Chat.css';


export const Chat = (props) => {

    const { room } = props;
    const [newMessage, setNewMessage] = useState("");
    const [messages, setMessages] = useState([]);
    const messagesRef = collection(db, "message");

    useEffect(() => {
        const queryMessages = query(messagesRef,
             where("room", "==", room),
             orderBy("createdAt")
            );
        const unsuscribe = onSnapshot(queryMessages, (snapshot) => {
            // console.log("new message");
            let messages = [];
            snapshot.forEach((doc) => {
                messages.push({ ...doc.data(), id: doc.id });
            });
            setMessages(messages);
        });
        return () => unsuscribe();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        // console.log(newMessage);
        if (newMessage === "")
            return;
        await addDoc(messagesRef, {
            text: newMessage,
            createdAt: serverTimestamp(),
            user: auth.currentUser.displayName,
            room,
        });

        // empty msg
        setNewMessage("");
    };
    return (
        <div className="chat-app">

            <div className="header">
                <h1>Welcome to: {room.toUpperCase()} </h1>
            </div>

            <div className="messages">
                {messages.map((message) => (
                    <div className="message" key={message.id}>
                        <span className="user">{message.user}</span>
                        {message.text}
                    </div>
                ))}
            </div>

            <form onSubmit={handleSubmit} className="new-message-form">
                <input className="new-message-input"
                    placeholder="type your message here.."
                    onChange={(e) => setNewMessage(e.target.value)}
                    value={newMessage}
                />
                <button type="submit" className="send-button">
                    Send
                </button>

            </form>
        </div>
    );
};
