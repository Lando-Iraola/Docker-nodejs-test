function readFile(filePath = "/app/src/files/message.json")
{
    const fs = require("fs");
    let messageFile = fs.readFileSync(filePath);
    let messages = JSON.parse(messageFile);

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