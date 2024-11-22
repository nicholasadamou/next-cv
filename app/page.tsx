'use client'

import { motion } from 'framer-motion'
import { bioData } from '@/data/bio'
import { profileData } from '@/data/profile'

import { Bio } from '@/components/bio'
import { Profile } from '@/components/profile'

const containerVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.1,
		},
	},
}

const itemVariants = {
	hidden: { opacity: 0, y: 20 },
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.75,
		},
	},
}

export default function Home() {
	return (
		<motion.main
			className='relative mx-auto min-h-screen max-w-xl px-6 py-20 font-light'
			initial="hidden"
			animate="visible"
			variants={containerVariants}
		>
			<motion.div variants={itemVariants}>
				<Bio bio={bioData} />
			</motion.div>

			<motion.section className='my-9 text-sm' variants={itemVariants}>
				<h3 className='mb-1'>About</h3>
				<div className='text-muted-foreground'>
					<p>{bioData.about}</p>
				</div>
			</motion.section>

			{profileData.map((content, index) => (
				<motion.div key={index} variants={itemVariants}>
					<Profile {...content} />
				</motion.div>
			))}

			<motion.section className='my-14 text-sm' variants={itemVariants}>
				<h3 className='mb-6'>Contact</h3>
				<motion.div
					className='flex flex-col gap-6'
					variants={containerVariants}
					initial="hidden"
					animate="visible"
				>
					{bioData.contacts.map((contact, index) => (
						<motion.div className='flex' key={index} variants={itemVariants}>
							<div className='mr-2 md:mr-8 w-full max-w-[100px] text-muted-foreground'>
								{contact.label}
							</div>
							<div className='flex flex-1 flex-col text-slate-900 dark:text-slate-100'>
								<a
									href={contact.href}
									target='_blank'
									rel='noopener noreferrer'
									className='inline-flex hover:underline'
								>
									{contact.value}
									<svg
										width='12'
										height='12'
										viewBox='0 0 12 12'
										fill='none'
										xmlns='http://www.w3.org/2000/svg'
									>
										<path
											d='M3.5 3C3.22386 3 3 3.22386 3 3.5C3 3.77614 3.22386 4 3.5 4V3ZM8.5 3.5H9C9 3.22386 8.77614 3 8.5 3V3.5ZM8 8.5C8 8.77614 8.22386 9 8.5 9C8.77614 9 9 8.77614 9 8.5H8ZM2.64645 8.64645C2.45118 8.84171 2.45118 9.15829 2.64645 9.35355C2.84171 9.54882 3.15829 9.54882 3.35355 9.35355L2.64645 8.64645ZM3.5 4H8.5V3H3.5V4ZM8 3.5V8.5H9V3.5H8ZM8.14645 3.14645L2.64645 8.64645L3.35355 9.35355L8.85355 3.85355L8.14645 3.14645Z'
											className='fill-current text-slate-900 dark:text-slate-100'
										></path>
									</svg>
								</a>
							</div>
						</motion.div>
					))}
				</motion.div>
			</motion.section>
		</motion.main>
	)
}

