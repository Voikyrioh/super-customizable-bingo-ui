interface UserMessage {
    at: Date;
    username: string;
    message: string;
    type: 'MESSAGE';
}

interface SystemMessage {
    type: 'SYSTEM' | 'NOTIFICATION';
    message: string;
    at: Date;
}

export type ChatMessage = UserMessage | SystemMessage;
