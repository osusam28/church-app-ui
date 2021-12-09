import { getAccessToken, withPageAuthRequired } from '@auth0/nextjs-auth0';

import useSWR from 'swr';

const fetcher = (url) => fetch(url).then((res) => res.json());

export default withPageAuthRequired(
    function Directory({ user, families }) {
        const { data, error } = useSWR('/api/families', fetcher);

        return (
            <div>
                <p>THE DIRECTORY ({user.email})</p>
                <div>
                    {JSON.stringify(data)}
                </div>
            </div>
        );
    }
);

/*
export async function getServerSideProps({ req, res }) {
    const { accessToken } = await getAccessToken(req, res);
    const response = await fetch('https://rbcl-api-gw-1ablkj45.ue.gateway.dev/api/v1/directory/families', {
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    });
    const families = await response.json();

    if (!families) {
        return {
            notFound: true,
        }
    }

    res.setHeader(
        'Cache-Control',
        'public, s-maxage=900, stale-while-revalidate=59'
    );
  
    return {
      props: {
        families,
        accessToken
      },
    }
}
*/
