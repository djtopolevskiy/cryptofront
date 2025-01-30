export default function Home() {
	return (
		<>
			<section className='py-20 bg-black'>
				<div className='container mx-auto text-center'>
					<h1 className='text-6xl font-bold mb-4'>
						The Cryptomus Front-end for Backend NestJS
					</h1>
					<p className='text-xl text-gray-400 mb-8'>
						Next.js gives you the best developer experience with all the
						features you need for production: hybrid static & server rendering,
						TypeScript support, smart bundling, route pre-fetching, and more. No
						config needed.
					</p>
					<div className='space-x-4'>
						<a
							href='/docs'
							className='bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200'
						>
							Get Started
						</a>
						<a
							href='/learn'
							className='bg-transparent border border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-black'
						>
							Learn Next.js
						</a>
					</div>
				</div>
			</section>
		</>
	)
}
