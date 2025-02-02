'use client'

import Link from 'next/link'
import { Button } from './ui/button'

export function SectionMain() {
	return (
		<section className='flex flex-col items-center justify-center my-20 border-t border-dashed border-gray-600 mx-10 px-10'>
			<h1 className='text-6xl font-bold my-8 text-center'>
				The Cryptomus Frontend for NestJS
			</h1>
			<p className='text-xl text-gray-400 my-8 text-center'>
				Next.js gives you the best developer experience with all the features
				you need for production: hybrid static & server rendering, TypeScript
				support, smart bundling, route pre-fetching, and more. No config needed.
			</p>

			<div className='space-x-4 my-8'>
				<Button asChild>
					<Link
						href='/doc'
						className='bg-transparent border border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-black'
					>
						Get Started
					</Link>
				</Button>
				<Button asChild>
					<Link
						href='/learn'
						className='bg-transparent border border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-black'
					>
						Learn Next.js
					</Link>
				</Button>
			</div>
		</section>
	)
}
