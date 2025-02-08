import axios from "axios";

function handleError(err, message="An error ocurred.") {
    console.log(`ERROR : ${message} -- ${err}`);
    return {status : 500, error : err};
}

export async function get_github_user_stats() {

    const user = 'm4ur1n0';
    const token = process.env.NEXT_PUBLIC_GITHUB_ACCESS_TOKEN;
    console.log(`TOKEN : ${token}`);

    try {
        const eventsResponse = axios.get(
            `https://api.github.com/users/${user}/events`,
            {
                headers : {
                    Authorization : `token ${token}`,
                },
            }
        );

        const repoResponse = axios.get(
            `https://api.github.com/users/${user}/repos`,
            {
                headers : {
                    Authorization : `token ${token}`,
                },
            }
        );

        const followersReponse = axios.get(
            `https://api.github.com/users/${user}/followers`,
            {
                headers : {
                    Authorization : `token ${token}`,
                },
            }
        );

        await Promise.all([eventsResponse, repoResponse, followersReponse]);
        console.log(`RESPONSES : \n${eventsResponse.body}\n${repoResponse.body}\n${followersReponse.body}`);

        return {
            status : 200,
            data : {
                events : eventsResponse.body,
                repos : repoResponse.body,
                followers : followersReponse.body
            }
        };

    } catch (err) {
        return handleError(err, "Error during user stats.");
    }

}