<!-- # tiket-api
GET BASE-URL/user/:id - получить чат по айди пользователя
POST BASE-URL/message/:id - отправить сообщение в чат по айди пользователя
UPDATE BASE-URL/message/:id - отредактировать сообщение 
DELETE BASE-URL/message/:id - удалить сообщение по айди
схемы
user {
    id
    name
    email
    tikets: [id тикетов, созданных пользователем]   
},
messages {
    id,
    isOwner,
    attach: {},
    createdAt,
},
tiket {
    id,
    checked,
    answers,
    createdAt,
    updatedAt,
    status,
    owner,
    
} -->