export type ProfileDataProps = {
  title: string
  items: {
    title: string
    subTitle: string
    link?: string,
    date: string
    description: string
  }[]
}

export const profileData = [
	{
		title: 'Work Experience',
		items: [
			{
				title: 'Principal Engineer at Amazon',
				subTitle: 'Seattle, WA',
				date: '2020 - Present',
				description:
					'Architected highly scalable microservices for Prime Video. Utilized distributed systems expertise to enhance platform performance by 30%.',
			},
			{
				title: 'Staff Software Engineer at Google',
				subTitle: 'Mountain View, CA',
				date: '2015 - 2020',
				description:
					'Led the design and development of Kubernetes’ service mesh components. Worked with the open-source community to drive adoption.',
			},
			{
				title: 'Software Engineer at Facebook',
				subTitle: 'Menlo Park, CA',
				date: '2010 - 2015',
				description:
					'Built core systems for real-time messaging and contributed to the scalability of Messenger to serve billions of users.',
			},
		],
	},
	{
		title: 'Education',
		items: [
			{
				title: "Ph.D. in Computer Science",
				subTitle: 'Kamar-Taj University',
				date: '2007 - 2010',
				description:
					'Focused on distributed systems and scalability. Dissertation: "Portal Networks and Mystical Load Balancing."',
			},
			{
				title: "Master's Degree in Computer Science",
				subTitle: 'New York University',
				date: '2005 - 2007',
				description: 'Specialized in software engineering and system design.',
			},
			{
				title: "Bachelor's Degree in Computer Science",
				subTitle: 'Columbia University',
				date: '2002 - 2005',
				description: 'Graduated summa cum laude with a focus on algorithms and data structures.',
			},
		],
	},
]
