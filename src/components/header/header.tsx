import Link from 'next/link'
import AnimationContainer from '../footer/animation-container'
import { LogoAvatar } from '../logoavatar'
import { ModeToggle } from '../modetoggle'
import { buttonVariants } from '../ui/button'
import { MobileMenu } from './mobilemenu'

export function Header() {
	return (
		<header className='flex items-center justify-between space-x-4 pt-6 pb-8 px-4 sm:px-6 lg:px-8 w-full mx-auto'>
			<AnimationContainer delay={0.2} className='mt-8 md:mt-0'>
				<LogoAvatar />
			</AnimationContainer>

			<AnimationContainer className='w-full md:w-auto'>
				<nav className='hidden md:flex items-center space-x-1'>
					<Link href='/' className={buttonVariants({ variant: 'ghost' })}>
						Home
					</Link>
					<Link
						href='/dashboard'
						className={buttonVariants({ variant: 'ghost' })}
					>
						Dashboard
					</Link>
					<Link
						href='/resources'
						className={buttonVariants({ variant: 'ghost' })}
					>
						Resources
					</Link>
					<Link
						href='/pricing'
						className={buttonVariants({ variant: 'ghost' })}
					>
						Pricing
					</Link>
					<Link href='/blog' className={buttonVariants({ variant: 'ghost' })}>
						Blog
					</Link>
				</nav>
			</AnimationContainer>
			<AnimationContainer delay={0.1} className='flex justify-center space-x-4'>
				<div className='flex items-center space-x-1'>
					<ModeToggle />
					<Link
						href='/login'
						className={buttonVariants({ variant: 'outline' })}
					>
						Login
					</Link>
					<Link
						href='/signup'
						className={buttonVariants({ variant: 'outline' })}
					>
						Sign Up
					</Link>
					<MobileMenu />
				</div>
			</AnimationContainer>
		</header>
	)
}
