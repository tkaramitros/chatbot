const express = require('express');
const router = express.Router();
const structjson = require('./structjson.js');
const dialogflow = require('dialogflow');
const uuid = require('uuid');
const config = require('../config/keys');


const projectId = config.googleProjectID
const sessionId = config.dialogFlowSessionID
const languageCode = config.dialogFlowSessionLanguageCode
const filename = config.keyFilename


// Create a new session
const sessionClient = new dialogflow.SessionsClient({
    keyFilename : filename
  
});
const sessionPath = sessionClient.sessionPath(projectId, sessionId);

// We will make two routes 


// Text Query Route
let city
let propType
let buyOrRent
let price
let size

router.post('/textQuery', async (req, res) => {
  
    //We need to send some information that comes from the client to Dialogflow API 
    // The text query request.
    const request = {
        session: sessionPath,
        queryInput: {
            text: {
                // The query to send to the dialogflow agent
              
                text: req.body.text,
                // The language used by the client (en-US)
                languageCode: languageCode,
            },
        },
    };

    // Send request and log result
    const responses = await sessionClient.detectIntent(request);
    console.log('Detected intent');
    const result = responses[0].queryResult;
    console.log(`  Query: ${result.queryText}`);
    console.log(`  Response: ${result.fulfillmentText}`);
    if(result.intent.displayName ==='what to do - RentBuy - HouseLandOffice - Money - city - next - next'){
        if(result.queryText==='Yes'||'yes'){
            console.log("buyOrRent : "+buyOrRent )
            console.log("city : "+city )
            console.log("propType : "+propType )
            console.log("price : "+price )  
            console.log("size : "+size )            
            //res.redirect("/post/");        
           res.send(result) 
        }
    }else{
        res.send(result)
    }
   
    
    if(result.intent.displayName === 'what to do - RentBuy - HouseLandOffice - Money - city - next'){      
        buyOrRent=result.outputContexts[3].parameters.fields.BoR.stringValue
        city=result.outputContexts[3].parameters.fields.city.stringValue
        propType=result.outputContexts[3].parameters.fields.HOL.stringValue
        price = result.outputContexts[3].parameters.fields.number.numberValue
        size=  result.outputContexts[3].parameters.fields.size.numberValue  
    }
})



//Event Query Route

router.post('/eventQuery', async (req, res) => {
    //We need to send some information that comes from the client to Dialogflow API 
    // The text query request.
    //yes yes yes
    const request = {
        session: sessionPath,
        queryInput: {
            event: {
                // The query to send to the dialogflow agent
                name: req.body.event,
                // The language used by the client (en-US)
                languageCode: languageCode,
            },
        },
    };

    // Send request and log result
    const responses = await sessionClient.detectIntent(request);
    console.log('Detected intent');
    const result = responses[0].queryResult;
    console.log(`  Query: ${result.queryText}`);
    console.log(`  Response: ${result.fulfillmentText}`);

    res.send(result)
})







module.exports = router;
