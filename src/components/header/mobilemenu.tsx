import { Menu } from "lucide-react"
import Link from "next/link"
import { Button } from "../ui/button"
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "../ui/sheet"

export function MobileMenu() {
	return (
		<Sheet>
			<SheetTrigger asChild className='md:hidden'>
				<Button variant='ghost' size='icon'>
					<Menu className='h-6 w-6' />
				</Button>
			</SheetTrigger>
			<SheetContent side='right' className='w-[300px]'>
				<SheetTitle>
					<span className='sr-only'>Title</span>
				</SheetTitle>
				<div className='flex flex-col gap-4 mt-8'>
					<Link href='/' className='text-lg font-medium hover:text-gray-600'>
						Home
					</Link>
					<Link
						href='/products'
						className='text-lg font-medium hover:text-gray-600'
					>
						Products
					</Link>
					<Link
						href='/resources'
						className='text-lg font-medium hover:text-gray-600'
					>
						Resources
					</Link>
					<Link
						href='/pricing'
						className='text-lg font-medium hover:text-gray-600'
					>
						Pricing
					</Link>
					<Link
						href='/blog'
						className='text-lg font-medium hover:text-gray-600'
					>
						Blog
					</Link>
					<div className='flex flex-col gap-2 mt-4'>
						<Button variant='ghost'>Log in</Button>
						<Button>Sign up</Button>
					</div>
				</div>
			</SheetContent>
		</Sheet>
	)
}
