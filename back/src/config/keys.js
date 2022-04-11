if (process.env.NODE_ENV === 'production'){
    module.exports = require('./prod');
}else{
    module.exports = require('./dev');
}


// module.exports = {
//     GOOGLE_APPLICATION_CREDENTIALS:"C:\Udemy_Others\MERN\chatbot-app\GOOGLE_KEY\test-chat-bot-app-345017-f32d2043d869.json",
//     googleProjectID: 'test-chat-bot-app-345017',
//     dialogFlowSessionID: 'bot-session',
//     dialogFlowSessionLanguageCode: 'en-US',
//     googleClientEmail:'test-chat-app@test-chat-bot-app-345017.iam.gserviceaccount.com',
//     googlePrivateKey:  '-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCNRoj8rScdkXDF\niw2EJgEtUb90X8uYmXFpXmk+bARGHaDCC9vLh5SnAXh1dm7RnXKJIz7EzPezwyhj\nfoflRhoaFdV2Zg4EUQC2EzKHhHjW/I0p+cXbXx3hz6nFYoy7q/lZURiVtUdDLZzI\nby3tXXMybUrtQGxODTBOQvcun17Wghl5gfFidwFTBe+9gkHSAxiYsSGrEoVw6T6o\nfG0qYSI/KUhdjtt5ZJ/IwCYLaC3kqtVi6UJ4rBzUBQFsPTxUjEo7nOoqluU56waY\nkHGfIqJWg0QlkJkdFD3k2cs9n9jxvPOie30fd6ococ+7EWwlUHq9ITY7w0n5Rpnz\nDiQVZTPNAgMBAAECggEAHYfH7KE5Euoq23AEhEH5bwKudWHsydoRJchRUXX8srdQ\nuh8Gc5XEkeAx0MPPyEsT/Ox8G2EIye+aSqnRODCeFiPIOfZ9KZPRBT4gCsm7BJ1H\n2KVYIVHRijkBMLw31KbO+UeFTw3UdotbQV5UCFDHWpwT1GHqAaqqFUHUL0+q4EWE\nEVRzp15P2bpjTxFfS6l5NptlqmpiLvTPtBe7N+4hmcOMFgxMJo0DFpHJE7/7rmJc\npERdAphRq6GLFwPa8NcTpWniFP7ydX87GOMLbYb2Vv2dDsTUVHpE05IwzB6/47uK\nFm6smR1UtVIiZsUX7i9vAqqGGZJK0IngVQbx6V6QFQKBgQDAN+wP7jbmPrV1vA48\n0i1Iy3bK2+cb4wN1kf8KjcM4JJ7z5RW6zdVnbyhLOV0u6yS/7k3OEmxwXEnbSX8V\nMU+IrSGDydR9hQXHcT7OfiSXUICPdn2cSfPX5Bount/f6Z7zOMyaCwCN7cJw+SkY\nM5aF5QgpcctT9c8pmTyus/2/4wKBgQC8Jz69vuOPq33i8jXNVCOJDJ+G27oGKvdS\nGzpw1tv3OWjJ6Q7ir8LXe1hce6ZH8UgiYCArCHf+K5zmLTo9GeSsPmCmGsYwrq2o\nssfxHqr2ADysareo8xIr7NiSR7ZGFwWUliUo3O1nvj72PXXCrl6u24uIr2zOgucB\ncT9Ec2QsjwKBgBnjrlTa9eP/EDvCT3ybpmPGm8Jo6fDUm7OrLVnDjEa0kAAzm8Ck\nVpju3NN873MRUsrTEwGtc5OSqpPxiz9Ue+zhvMDeX1NkpkmdlCMF1HHY8uffwr1Z\nLJGodGpRFcA33CPQQ6Z/0txK6MSEmqda02xHU9kZLZSqZ/OnYwf40DWXAoGBAKOt\nsFL4oJX3Jcgr1MoOi+tJY+25cBa1gfmXXjuTbj+fXZ1odV6Wb/Vsg+3QU1L6fzoI\nTXOiJmCiKBfE+Ij24YtFqGZXnFn1W3UKMg18FFV011NWcvcynXhAzhZS9Cn9FQmx\npBnsN0qsobEsvijh79RFgRkjIpB0J+mFTviJOXfZAoGBALjiJ9t/DoIhJ2EHbi5B\n7D/85od5nGzd9e/lyMfsuvlE6a1UJ6eoqeuRSJg4pOkrYJKwwlgzQvC51t+cfMPO\naHgXutHPA5czvx58Qar4IZQCWOTAE6Jq/5MLHXwxSAmqCOAuvfIB0ArsTE8DdGI7\n6Nwi+bNbJaB/tjq3oAFvFpY0\n-----END PRIVATE KEY-----\n',
//     mongoURI:'mongodb+srv://admin:admin@chatbot-test-shared.48emm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
//     keyFilename:"C:/Udemy_Others/skg/chatbot/chatbot/back/GOOGLE_KEY/test-chat-bot-app-345017-f32d2043d869.json"
    
//   }