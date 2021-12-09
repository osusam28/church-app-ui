import { getAccessToken, withApiAuthRequired } from '@auth0/nextjs-auth0';

export default withApiAuthRequired(async function families(req, res) {
  // If your Access Token is expired and you have a Refresh Token
  // `getAccessToken` will fetch you a new one using the `refresh_token` grant
  const { accessToken } = await getAccessToken(req, res);
  const response = await fetch('https://rbcl-api-gw-1ablkj45.ue.gateway.dev/api/v1/directory/families', {
    headers: {
      Authorization: `Bearer ${accessToken}`
    }
  });
  const fams = await response.json();
  res.status(200).json(fams);
});