import Link from "next/link"
import { ModeToggle } from "../modetoggle"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import { buttonVariants } from "../ui/button"
import { MobileMenu } from "./mobilemenu"

export function Header() {
	return (
		<header className='flex items-center justify-between space-x-4 py-1 px-2'>
			<Avatar>
				<AvatarImage src='https://github.com/shadcn.png' />
				<AvatarFallback>CN</AvatarFallback>
			</Avatar>

			<nav className='hidden md:flex items-center space-x-1'>
				<Link href='/' className={buttonVariants({ variant: "ghost" })}>
					Home
				</Link>
				<Link
					href='/dashboard'
					className={buttonVariants({ variant: "ghost" })}
				>
					Dashboard
				</Link>
				<Link
					href='/resources'
					className={buttonVariants({ variant: "ghost" })}
				>
					Resources
				</Link>
				<Link href='/pricing' className={buttonVariants({ variant: "ghost" })}>
					Pricing
				</Link>
				<Link href='/blog' className={buttonVariants({ variant: "ghost" })}>
					Blog
				</Link>
			</nav>

			<div className='flex items-center space-x-1'>
				<ModeToggle />
				<Link href='/login' className={buttonVariants({ variant: "outline" })}>
					Login
				</Link>
				<Link href='/login' className={buttonVariants({ variant: "outline" })}>
					Sign Up
				</Link>
				<MobileMenu />
			</div>
		</header>
	)
}
