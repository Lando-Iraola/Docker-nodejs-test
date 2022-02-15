const express = require("express");
const router = new express.Router()
const messages = require("../models/messages");
const fileManager = require("../files/fileManager");

router.get(
    "/message",
    async (req, res) =>
    {
        const msg = fileManager.readFile();
        res.status(200).send({message:messages.getRandomMessage(msg.messages)});
    }
)

router.post(
    "/message",
    async (req, res) =>
    {
        try
        {            
            if(!Object.keys(req.body).includes("message"))
                throw("invalid request");

            const msg = fileManager.readFile();
            const isSuccesful = fileManager.saveFile( messages.addMessage(req.body.message, msg.messages) )
            res.status(201).send({added: isSuccesful});
        }
        catch(e)
        {
            res.status(400).send({added: false});
        }
    }
)

module.exports = router;