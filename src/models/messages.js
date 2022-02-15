function getRandomMessage(messages)
{
    const randomIndex = Math.floor(Math.random() * messages.length);
    
    return messages[randomIndex];
}

function addMessage(msg = "", messages)
{
    if(msg === "")
        return false;
    
    const isDuplicate = messages.findIndex((text) => text.toLowerCase() === msg.toLowerCase()) >= 0;
    if(isDuplicate)
        throw("already exist!");

    messages.push(msg);

    return messages;
}

const Messages = 
{
    getRandomMessage,
    addMessage
}

module.exports = Messages;