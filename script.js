console.log("Hello World");

const clientId = '142021';
const redirectUri = '24clarson.github.io/bubbles/';
const authUrl = `https://www.strava.com/oauth/authorize?client_id=${clientId}&response_type=code&redirect_uri=${redirectUri}&scope=activity:read_all,read_all&approval_prompt=auto`;

document.getElementById('auth').href = authUrl;

// Parse URL parameters
const params = new URLSearchParams(window.location.search);
const authorizationCode = params.get('code');

if (authorizationCode) {
    console.log('Authorization Code:', authorizationCode);

    // Exchange the authorization code for an access token
    // fetchAccessToken(authorizationCode);
}

