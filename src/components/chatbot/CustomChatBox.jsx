import React from 'react'
import ChatBox from 'react-simple-chatbot'
import { ThemeProvider } from "styled-components";

const CustomChatBox = () => {
    const config = {
        width: "300px",
        height: "400px",
        floating: true
    };

    const theme = {
        background: "white",
        fontFamily: "Arial, Helvetica, sans-serif",
        headerBgColor: "#00B2B2",
        headerFontColor: "#fff",
        headerFontSize: "25px",
        botBubbleColor: "#00B2B2",
        botFontColor: "#fff",
        userBubbleColor: "#fff",
        userFontColor: "#4c4c4c"
    };

    const steps = [
        {
            id: "1",
            message: "Hi, there! May i help you? ",
            trigger: '2'
        },
        {
            id: '2',
            options: [
                { 
                    value: 'login',
                    label: 'login',
                    trigger: '3'
                },
                { 
                    value: 'signup',
                    label: 'signup',
                    trigger: '3'
                }
            ]
        },
        {
            id: '3',
            component: (
                <button>Yes</button>
            ),
            trigger: 'Done'
        },
        {
            id: "Done",
            message: "No Problem. Have a great day !!",
            end: true
        }
    ];

    return (
        <ThemeProvider theme={theme}>
            <ChatBox headerTitle="Sweet Accountant" steps = {steps} {...config} speechSynthesis={{ enable: false, lang: 'en' }}/>
        </ThemeProvider>     
    )
}

export default CustomChatBox
