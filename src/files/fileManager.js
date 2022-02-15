function readFile(filePath = "/app/src/files/message.json")
{
    let messages;
    try
    {
        const fs = require("fs");
        let messageFile = fs.readFileSync(filePath);
        messages = JSON.parse(messageFile);
    }
    catch(e)
    {
        messages = {messages:[]};
    }

    return messages;
}

function saveFile(newText, filePath = "/app/src/files/message.json")
{
    const fs = require("fs");
    fs.writeFileSync(filePath, JSON.stringify({messages: newText}));

    return true;
}

const fileManager =
{
    readFile,
    saveFile
}

module.exports = fileManager;