$(function() {
    handleClientLoad();

    let values = [];
    document.querySelector('.js-submit-data').addEventListener('click', function() {
        for(let i=0; i < document.querySelectorAll('input').length; i++) {
            values[i] = document.querySelectorAll('input')[i].value;
        }

        makeApiCall(values);
        handleSignInClick();
    })
    
    function makeApiCall(values) {
        let val = [
            values
        ];

        let body = {
            values: val
        };

        gapi.client.sheets.spreadsheets.values.append({
            spreadsheetId: '1MOQqpSu1VHIuocyu0xSTfrOeqtzyVpk8DgpV9SZsl3M',
            range: 'List2!B:D',
            valueInputOption: 'RAW',
            resource: body
        }).then((response) => {
            let result = response.result;
        });
    }

    function initClient() {
        var API_KEY = 'AIzaSyCqWYioD60S5TrLAIpO-xaTDVvq0FkZXAw';  

        var CLIENT_ID = '574346164526-ccuvnlng1t99cchid6b91q3bofm29h66.apps.googleusercontent.com';

        var SCOPE = 'https://www.googleapis.com/auth/spreadsheets';

        gapi.client.init({
            'apiKey': API_KEY,
            'clientId': CLIENT_ID,
            'scope': SCOPE,
            'discoveryDocs': ['https://sheets.googleapis.com/$discovery/rest?version=v4'],
        }).then(function() {
            gapi.auth2.getAuthInstance().isSignedIn.listen(updateSignInStatus);
            updateSignInStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
        });
    }

    function handleClientLoad() {
        gapi.load('client:auth2', initClient);
    }

    function updateSignInStatus(isSignedIn) {
        if (isSignedIn) {
            makeApiCall();
        }
    }

    function handleSignInClick(event) {
        gapi.auth2.getAuthInstance().signIn();
    }

    function handleSignOutClick(event) {
        gapi.auth2.getAuthInstance().signOut();
    }
});