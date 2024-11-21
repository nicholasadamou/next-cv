import {profileData} from './profile';

const mostRecentJobTitle = profileData[0].items[0].title;

export const bioData = {
	name: 'Dr. Stephen Strange',
	avatar: '/stephen-strange.jpg',
	jobTitle: mostRecentJobTitle,
	website: 'https://marvel.com',
	about:
		'Sorcerer-turned-Software Engineer. Ph.D. in Computer Science with a focus on distributed systems. Leveraging mystical powers and technological expertise to create innovative solutions. Former FAANG wizard 🧙‍♂️.',
	contacts: [
		{
			label: 'Email',
			value: 'stephen.strange@amazon.com',
			href: '#',
		},
		{
			label: 'Github',
			value: 'doctorstrange',
			href: '#',
		},
		{
			label: 'LinkedIn',
			value: 'doctorstrange',
			href: '#',
		},
	],
}
