import { Button } from '@/components/ui/button'
import { Instagram, Youtube } from 'lucide-react'
import Link from 'next/link'
// import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { LogoAvatar } from '../logoavatar'
import AnimationContainer from './animation-container'

const footerLink = [
	{
		name: 'About',
		link: '#',
	},
	{
		name: 'Contact',
		link: '3',
	},
	{
		name: 'FAQ',
		link: '#',
	},
	{
		name: 'Privacy Policy',
		link: '#',
	},
	{
		name: 'Terms and Conditions',
		link: '#',
	},
]

const Footer = () => {
	const currentYear = new Date().getFullYear()
	return (
		<footer className='relative border-t border-border pt-6 pb-8 px-4 sm:px-6 lg:px-8 w-full mx-auto'>
			<div className='absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-1.5 bg-foreground rounded-full'></div>

			<div className='flex flex-col items-center space-y-8 md:flex-row md:justify-between md:space-y-0'>
				<AnimationContainer delay={0.2} className='mt-8 md:mt-0'>
					<LogoAvatar />
				</AnimationContainer>

				<AnimationContainer className='w-full md:w-auto'>
					<nav className='flex flex-wrap justify-center gap-4 text-center md:justify-end'>
						{footerLink.map(item => (
							<Link
								key={item.name}
								href={item.link}
								className='text-xs leading-5 text-muted-foreground hover:text-foreground transition-colors'
							>
								{item.name}
							</Link>
						))}
					</nav>
				</AnimationContainer>

				<AnimationContainer
					delay={0.1}
					className='flex justify-center space-x-4'
				>
					<Button variant='ghost' size='icon' asChild>
						<Link
							href='https://youtube.com/@zenityteam?si=3FIrYQTbgh0m3UKA'
							target='_blank'
							rel='noopener noreferrer'
						>
							<span className='sr-only'>Youtube</span>
							<Youtube className='h-5 w-5' />
						</Link>
					</Button>
					<Button variant='ghost' size='icon' asChild>
						<Link
							href='https://instagram.com'
							target='_blank'
							rel='noopener noreferrer'
						>
							<span className='sr-only'>Instagram</span>
							<Instagram className='h-5 w-5' />
						</Link>
					</Button>
				</AnimationContainer>
			</div>

			<AnimationContainer
				delay={0.6}
				className='mt-8 border-t border-border/40 pt-4 px-4 sm:px-6 lg:px-8'
			>
				<div className='flex justify-center'>
					<p className='text-xs leading-5 text-muted-foreground text-center'>
						&copy; {currentYear} All rights reserved.
					</p>
				</div>
			</AnimationContainer>
		</footer>
	)
}

export default Footer
