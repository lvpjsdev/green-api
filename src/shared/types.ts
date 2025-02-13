export type WASettingsResponse = {
    avatar: string;
    phone: string;
    stateInstance: string;
    deviceId: string;
};

export type SendMessageResponse = {
    idMessage: string;
};

export type NotificationResponse = {
    receiptId: number;
    body: {
        typeWebhook: string;
        instanceData: {
            idInstance: number;
            wid: string;
            typeInstance: string;
        };
        timestamp: number;
        idMessage: string;
        senderData: {
            chatId: string;
            sender: string;
            chatName: string;
            senderName: string;
            senderContactName: string;
        };
        messageData: {
            typeMessage: string;
            textMessageData: {
                textMessage: string;
            };
        };
    };
};

export type GetAvatarResponse = {
    urlAvatar: string;
    available: boolean;
};
