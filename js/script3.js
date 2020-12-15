// create repositories list
const newRepositoryListItem = ({
	repoName,
	repoUrl,
	isPrivate,
	parentOwner,
	parentName,
	parentUrl,
	description,
	languageColor,
	languageName,
	repoStars,
	forks,
	licenseName,
	updatedAt,
}) => {
	const template = document.createElement('template');
	const html = `
			<li class="repositories-list-item">
				<div class="repositories-list-item__info">
					<div class="repositories-list-item__header">
						<a href="${repoUrl}" class="repositories-list-item__title">
							${repoName}
						</a>
						${isPrivate ? `<span class="repo-type">Private</span>` : ''}
					</div>
                        ${
													parentUrl
														? `<span class="repositories-list-item__parent-description">Forked from <a href="${parentUrl}">${parentOwner}/${parentName}</a></span>`
														: ''
												}
                    ${
											description
												? `<p class="repositories-list-item__description">
								${description}
							</p>`
												: ''
										}
                    <div class="repositories-list-item__footer">
                        ${
													languageColor
														? `
                                <div
                                    class="repositories-list-item__footer-item repositories-list-item__footer-item--language"
                                >
                                    <span class="language-circle ${languageColor}"> </span>
                                    <span>${languageName}</span>
                                </div>
                                `
														: ''
												}
                        
                        ${
													repoStars
														? `
                            <div
                                class="repositories-list-item__footer-item repositories-list-item__footer-item--glow"
                            >
                                <svg
                                    class="repo-icon"
                                    viewBox="0 -10 511.98685 511"
                                    width="511pt"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="m114.59375 491.140625c-5.609375 0-11.179688-1.75-15.933594-5.1875-8.855468-6.417969-12.992187-17.449219-10.582031-28.09375l32.9375-145.089844-111.703125-97.960937c-8.210938-7.167969-11.347656-18.519532-7.976562-28.90625 3.371093-10.367188 12.542968-17.707032 23.402343-18.710938l147.796875-13.417968 58.433594-136.746094c4.308594-10.046875 14.121094-16.535156 25.023438-16.535156 10.902343 0 20.714843 6.488281 25.023437 16.511718l58.433594 136.769532 147.773437 13.417968c10.882813.980469 20.054688 8.34375 23.425782 18.710938 3.371093 10.367187.253906 21.738281-7.957032 28.90625l-111.703125 97.941406 32.9375 145.085938c2.414063 10.667968-1.726562 21.699218-10.578125 28.097656-8.832031 6.398437-20.609375 6.890625-29.910156 1.300781l-127.445312-76.160156-127.445313 76.203125c-4.308594 2.558594-9.109375 3.863281-13.953125 3.863281zm141.398438-112.875c4.84375 0 9.640624 1.300781 13.953124 3.859375l120.277344 71.9375-31.085937-136.941406c-2.21875-9.746094 1.089843-19.921875 8.621093-26.515625l105.472657-92.5-139.542969-12.671875c-10.046875-.917969-18.6875-7.234375-22.613281-16.492188l-55.082031-129.046875-55.148438 129.066407c-3.882812 9.195312-12.523438 15.511718-22.546875 16.429687l-139.5625 12.671875 105.46875 92.5c7.554687 6.613281 10.859375 16.769531 8.621094 26.539062l-31.0625 136.9375 120.277343-71.914062c4.308594-2.558594 9.109376-3.859375 13.953126-3.859375zm-84.585938-221.847656s0 .023437-.023438.042969zm169.128906-.0625.023438.042969c0-.023438 0-.023438-.023438-.042969zm0 0"
                                    />
                                </svg>
                                ${repoStars}
                            </div>
                            `
														: ''
												}

                        ${
													forks
														? `<div
                                class="repositories-list-item__footer-item repositories-list-item__footer-item--glow"
                            >
                                <svg
                                    class="repo-icon"
                                    width="438.529px"
                                    height="438.529px"
                                    viewBox="0 0 438.529 438.529"
                                    style="enable-background: new 0 0 438.529 438.529"
                                    xml:space="preserve"
                                >
                                    <g>
                                        <path
                                            d="M349.459,52.534c-10.663-10.657-23.605-15.987-38.834-15.987c-15.222,0-28.165,5.327-38.825,15.987
        c-10.656,10.657-15.984,23.598-15.984,38.828c0,9.897,2.467,19.081,7.416,27.55c4.948,8.47,11.604,15.086,19.985,19.842
        c0,9.897-0.805,18.608-2.42,26.125c-1.622,7.517-4.284,14.128-7.994,19.842c-3.72,5.711-7.566,10.561-11.566,14.56
        c-4.001,3.999-9.616,7.755-16.848,11.278c-7.231,3.521-13.945,6.468-20.129,8.851c-6.184,2.375-14.514,5.182-24.982,8.419
        c-19.036,5.903-33.689,11.323-43.968,16.275V102.206c8.375-4.755,15.037-11.37,19.985-19.84c4.947-8.47,7.421-17.655,7.421-27.552
        c0-15.225-5.327-28.169-15.987-38.826C156.073,5.332,143.132,0,127.903,0c-15.23,0-28.171,5.328-38.831,15.988
        C78.416,26.645,73.085,39.589,73.085,54.814c0,9.897,2.474,19.082,7.421,27.552c4.948,8.47,11.609,15.085,19.985,19.84v234.117
        c-8.376,4.753-15.037,11.375-19.985,19.842c-4.947,8.473-7.421,17.658-7.421,27.552c0,15.225,5.327,28.168,15.987,38.824
        s23.604,15.988,38.831,15.988c15.226,0,28.17-5.332,38.826-15.988c10.657-10.656,15.987-23.6,15.987-38.824
        c0-9.894-2.474-19.079-7.421-27.552c-4.949-8.467-11.61-15.089-19.985-19.842V328.9c0-13.131,3.949-22.645,11.847-28.544
        c7.898-5.907,24.029-12.662,48.395-20.273c25.699-8.186,45.021-15.899,57.963-23.134c42.633-24.167,64.142-63.568,64.521-118.196
        c8.381-4.755,15.037-11.372,19.985-19.842c4.945-8.47,7.423-17.653,7.423-27.55C365.447,76.135,360.116,63.194,349.459,52.534z
        M147.321,403.138c-5.332,5.331-11.803,7.994-19.414,7.994c-7.616,0-14.087-2.663-19.417-7.994
        c-5.327-5.325-7.994-11.8-7.994-19.411c0-7.617,2.664-14.085,7.994-19.417c5.33-5.328,11.801-7.994,19.417-7.994
        c7.611,0,14.083,2.669,19.414,7.994c5.33,5.332,7.993,11.8,7.993,19.417C155.313,391.338,152.651,397.812,147.321,403.138z
        M147.321,74.232c-5.332,5.33-11.803,7.994-19.414,7.994c-7.616,0-14.087-2.664-19.417-7.994
        c-5.327-5.33-7.994-11.798-7.994-19.414c0-7.614,2.664-14.087,7.994-19.412c5.33-5.329,11.801-7.994,19.417-7.994
        c7.611,0,14.083,2.666,19.414,7.994c5.33,5.325,7.993,11.798,7.993,19.412C155.313,62.434,152.651,68.905,147.321,74.232z
        M330.042,110.779c-5.328,5.327-11.796,7.993-19.41,7.993c-7.618,0-14.09-2.666-19.414-7.993
        c-5.328-5.327-7.994-11.799-7.994-19.414c0-7.614,2.666-14.083,7.994-19.414s11.796-7.993,19.414-7.993
        c7.614,0,14.082,2.663,19.41,7.993c5.328,5.326,7.994,11.799,7.994,19.414C338.036,98.979,335.374,105.452,330.042,110.779z"
                                        />
                                    </g>
                                </svg>
                                ${forks}
                            </div>
                            `
														: ''
												}

                        ${
													licenseName
														? `
                            <div class="repositories-list-item__footer-item">
                                <svg
                                    class="repo-icon"
                                    id="Capa_1"
                                    enable-background="new 0 0 512 512"
                                    height="512"
                                    viewBox="0 0 512 512"
                                    width="512"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <g>
                                        <path
                                            d="m497 301h-19.843l-50.995-124.988c14.663-7.425 24.838-22.481 24.838-40.012 0-8.291-6.709-15-15-15s-15 6.709-15 15c0 8.276-6.724 15-15 15-7.808 0-11.646-2.871-19.6-9.36-10.664-8.702-25.283-20.64-55.4-20.64-20.438 0-34.109 5.581-43.383 13.039-4.644-4.596-10.342-8.038-16.617-10.276v-5.526c17.422-6.213 30-22.707 30-42.237 0-19.175-22.837-55.69-32.651-69.914-5.625-8.115-19.072-8.115-24.697 0-9.815 14.224-32.652 50.739-32.652 69.914 0 19.53 12.578 36.024 30 42.237v5.526c-6.275 2.238-11.973 5.68-16.617 10.276-9.274-7.458-22.945-13.039-43.383-13.039-30.117 0-44.736 11.938-55.4 20.64-7.954 6.489-11.792 9.36-19.6 9.36-8.276 0-15-6.724-15-15 0-8.291-6.709-15-15-15s-15 6.709-15 15c0 17.531 10.175 32.587 24.838 40.012l-50.995 124.988h-19.843c-8.291 0-15 6.709-15 15 0 41.353 33.647 75 75 75h61c41.353 0 75-33.647 75-75 0-8.291-6.709-15-15-15h-19.843l-49.75-124.376c7.359-3.248 13.204-7.689 18.162-11.737 9.126-7.456 17.007-13.887 36.431-13.887 27.393 0 29.81 12.656 30 15.366.002.106.062.192.068.298.286 19.235 12.713 35.433 29.932 41.572v216.526c-17.422 6.213-30 22.707-30 42.237 0 8.276-6.724 15-15 15h-30c-8.291 0-15 6.709-15 15s6.709 15 15 15h180c8.291 0 15-6.709 15-15s-6.709-15-15-15h-30c-8.276 0-15-6.724-15-15 0-19.53-12.578-36.024-30-42.237v-216.525c17.241-6.149 29.681-22.377 29.94-41.644.004-.06.042-.108.046-.168.175-2.564 2.402-15.425 30.014-15.425 19.424 0 27.305 6.431 36.431 13.887 4.958 4.048 10.803 8.489 18.162 11.737l-49.75 124.376h-19.843c-8.291 0-15 6.709-15 15 0 41.353 33.647 75 75 75h61c41.353 0 75-33.647 75-75 0-8.291-6.709-15-15-15zm-429.842 0 38.842-94.607 37.842 94.607zm301 0 37.842-94.607 38.842 94.607z"
                                        />
                                    </g>
                                </svg>
                                <span>${licenseName}</span>
                            </div>
                            `
														: ''
												}
                        ${
													updatedAt
														? `<div class="repositories-list-item__footer-item">
                                <span>Updated ${updatedAt}</span>
                            </div>
                            `
														: ''
												}
                    </div>
				</div>
				<div>
					<button type="button" class="repo-star-button">
						<svg
							class="profile-info-icon"
							viewBox="0 -10 511.98685 511"
							width="511pt"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="m114.59375 491.140625c-5.609375 0-11.179688-1.75-15.933594-5.1875-8.855468-6.417969-12.992187-17.449219-10.582031-28.09375l32.9375-145.089844-111.703125-97.960937c-8.210938-7.167969-11.347656-18.519532-7.976562-28.90625 3.371093-10.367188 12.542968-17.707032 23.402343-18.710938l147.796875-13.417968 58.433594-136.746094c4.308594-10.046875 14.121094-16.535156 25.023438-16.535156 10.902343 0 20.714843 6.488281 25.023437 16.511718l58.433594 136.769532 147.773437 13.417968c10.882813.980469 20.054688 8.34375 23.425782 18.710938 3.371093 10.367187.253906 21.738281-7.957032 28.90625l-111.703125 97.941406 32.9375 145.085938c2.414063 10.667968-1.726562 21.699218-10.578125 28.097656-8.832031 6.398437-20.609375 6.890625-29.910156 1.300781l-127.445312-76.160156-127.445313 76.203125c-4.308594 2.558594-9.109375 3.863281-13.953125 3.863281zm141.398438-112.875c4.84375 0 9.640624 1.300781 13.953124 3.859375l120.277344 71.9375-31.085937-136.941406c-2.21875-9.746094 1.089843-19.921875 8.621093-26.515625l105.472657-92.5-139.542969-12.671875c-10.046875-.917969-18.6875-7.234375-22.613281-16.492188l-55.082031-129.046875-55.148438 129.066407c-3.882812 9.195312-12.523438 15.511718-22.546875 16.429687l-139.5625 12.671875 105.46875 92.5c7.554687 6.613281 10.859375 16.769531 8.621094 26.539062l-31.0625 136.9375 120.277343-71.914062c4.308594-2.558594 9.109376-3.859375 13.953126-3.859375zm-84.585938-221.847656s0 .023437-.023438.042969zm169.128906-.0625.023438.042969c0-.023438 0-.023438-.023438-.042969zm0 0"
							/>
						</svg>
						<span>Star</span>
					</button>
				</div>
			</li>
			
		`;

	template.innerHTML = html.trim();
	return template.content.firstChild;
};

const getUpdateTimeString = (date) => {
	if (!date) {
		return null;
	}

	const today = new Date();
	const updatedAt = new Date(date);
	let dateString;

	if (isToday(updatedAt)) {
		const hours = Math.floor((today - updatedAt) / 36e5);
		if (hours > 0) {
			dateString = `${hours} hours ago`;
		} else {
			dateString = `less than an hour ago`;
		}
	} else if (isWithinFewDays(updatedAt)) {
		dateString = `${today.getDate() - updatedAt.getDate()} days ago`;
	} else {
		dateString = `${updatedAt.getDate()} ${updatedAt.toLocaleDateString(
			'default',
			{
				month: 'short',
			}
		)}`;
	}

	return dateString;
};

const languageColors = () => {
	const colorClasses = {};

	return (colorObj) => {
		if (!colorObj) {
			return '';
		}

		if (colorClasses[colorObj.name]) {
			return colorClasses[colorObj.name];
		} else {
			// create style element for new color
			const sheet = document.createElement('style');
			sheet.innerHTML = `
                    .language-circle-${colorObj.name} {
                        background-color: ${colorObj.color};
                    }
                `;
			colorClasses[colorObj.name] = `language-circle-${colorObj.name}`;
			document.body.appendChild(sheet);
			return colorClasses[colorObj.name];
		}
	};
};

const createRepositoriesList = (list, data) => {
	const getLanguageColor = languageColors();

	data.repositories.edges.forEach((edge) => {
		const node = edge.node;
		const listItem = {
			repoName: node.name,
			description: node.description,
			isPrivate: node.isPrivate,
			repoStars: node.stargazerCount,
			forks: node.forkCount,
			updatedAt: getUpdateTimeString(node.updatedAt),
		};

		if (node.parent) {
			listItem.parentOwner = node.parent.owner.login;
			listItem.parentName = node.parent.name;
			listItem.parentUrl = node.parent.url;
		}

		if (node.licenseInfo) {
			listItem.licenseName = node.licenseInfo.name;
		}

		if (node.primaryLanguage) {
			listItem.languageColor = getLanguageColor(node.primaryLanguage);
			listItem.languageName = node.primaryLanguage.name;
		}

		const newNode = newRepositoryListItem(listItem);
		list.appendChild(newNode);
	});
};

const setProfileDetails = (user) => {
	const userAvatarImages = document.querySelectorAll('.user-avatar-img');
	const userAvatarNames = document.querySelectorAll('.user-avatar-text');
	const userFollowersCount = document.querySelector('.user-followers');
	const userFollowingCount = document.querySelector('.user-following');
	const userStarsCount = document.querySelector('.user-stars');
	const publicRepoCount = document.querySelector(
		'.search-result-text-summary__repo-number'
	);
	const repoCount = document.querySelectorAll('.profile-nav-tab-item__number');

	userFollowersCount.textContent = user.followers.totalCount;
	userFollowingCount.textContent = user.following.totalCount;
	userStarsCount.textContent = user.starredRepositories.totalCount;
	publicRepoCount.textContent = user.repositories.totalCount;
	repoCount.forEach((elem) => {
		elem.textContent = user.repositories.totalCount;
	});

	userAvatarImages.forEach((image) => {
		image.setAttribute('src', user.avatarUrl);
	});

	userAvatarNames.forEach((name) => {
		name.textContent = user.login;
	});
};

const showFetchError = () => {
	const errorElem = document.querySelector('.fetch-error');
	errorElem.classList.add('fetch-error--visible');
};

const apiUrl =
	'https://happy-villani-3c4576.netlify.app//.netlify/functions/user';
const options = {
	method: 'GET',
};

// fetch user data from github
fetch(apiUrl, options)
	.then((response) => {
		if (response.ok) {
			return response.json();
		}

		throw new Error('unable to fetch data from github', response);
	})
	.then((data) => {
		const repositoriesList = document.querySelector('.repositories-list');
		createRepositoriesList(repositoriesList, data.data.viewer);
		setProfileDetails(data.data.viewer);
	})
	.catch((error) => {
		console.log(error);
		showFetchError();
	});
