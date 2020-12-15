const fetch = require('node-fetch');

exports.handler = async (event, context) => {
	const apiUrl = 'https://api.github.com/graphql';
	const query = {
		query: `{
		viewer {
			avatarUrl,
			followers {
				totalCount
			},
			following {
				totalCount
			},
			login,
			starredRepositories {
				totalCount
			},
			repositories(first: 20, privacy: PUBLIC, orderBy: {
				direction: DESC,
				field: UPDATED_AT
			}) {
				totalCount,
				edges {
					node {
						url,
						isPrivate,
						primaryLanguage {
							color,
							name
						},
						name,
						parent {
							owner {
								login
							},
							name,
							url
						},
						description,
						stargazerCount,
						forkCount,
						licenseInfo {
							name
						},
						updatedAt,
					}
	
				}
			}
		}
	}`,
	};

	try {
		const accessToken = process.env.ACCESS_TOKEN;
		const options = {
			method: 'POST',
			headers: {
				Authorization: `Bearer ${accessToken}`,
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(query),
		};

		// fetch user data from github
		const response = await fetch(apiUrl, options);

		if (!response.ok) {
			throw new Error('unable to fetch data from github', response);
		}

		const data = await response.json();

		return {
			statusCode: 200,
			body: JSON.stringify(data),
		};
	} catch (error) {
		console.log(error);
		return {
			statusCode: 500,
			body: 'Error fetching data from github',
		};
	}
};
