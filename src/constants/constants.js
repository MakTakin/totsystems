export const mockChats = [
   {
        name: 'general',
        id: 1,
        active: true,
        to: '/1',
        messages: [
            {
            id: 1,
            body: 'Привет всем',
            senderName: 'Ilya',
            fromMe: 'false',
            },
            {
            id: 2,
            body: 'Привет',
            senderName: 'Irina',
            fromMe: 'false',
            },
        ]
    },
    {
        name: 'kitchen',
        id: 2,
        active: false,
        to: '/kitchen',
        messages: [
            {
            id: 1,
            body: 'Привет на кухне',
            senderName: 'Ilya',
            fromMe: false,
            },
            {
            id: 2,
            body: 'Привет и тут',
            senderName: 'Konstantin',
            fromMe: false,
            },
        ]
    }
]