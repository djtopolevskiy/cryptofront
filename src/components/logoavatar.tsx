import Link from 'next/link'

export function LogoAvatar() {
	return (
		<Link href='/' className='flex items-center gap-2'>
			<div className='flex aspect-square size-8 items-center justify-center rounded-lg text-sidebar-primary-foreground'>
				<svg
					viewBox='0 0 190.35000000000002 144'
					xmlns='http://www.w3.org/2000/svg'
					width='32'
					height='32'
				>
					<path
						d='M126.97 83c12.5 0 30.6-2.6 30.6-17.47a14 14 0 0 0-.3-3.42l-7.45-32.35c-1.72-7.12-3.23-10.35-15.73-16.6C124.4 8.2 103.25 0 97 0c-5.8 0-7.5 7.5-14.44 7.5-6.68 0-11.64-5.6-17.9-5.6-6 0-9.9 4.1-12.92 12.5 0 0-8.4 23.72-9.5 27.16a6.43 6.43 0 0 0-.2 1.94c0 9.22 36.3 39.45 84.93 39.45m32.53-11.38c1.73 8.2 1.73 9.05 1.73 10.13 0 14-15.74 21.77-36.43 21.77C78.04 103.5 37.08 76.1 37.08 58a18.45 18.45 0 0 1 1.5-7.34C21.8 51.5 0 54.5 0 73.72 0 105.2 74.6 144 133.65 144c45.28 0 56.7-20.48 56.7-36.65 0-12.72-11-27.16-30.83-35.78'
						fill='#e00'
					/>
					<path d='M159.5 71.57c1.73 8.2 1.73 9.05 1.73 10.13 0 14-15.74 21.77-36.43 21.77C78.04 103.5 37.08 76.1 37.08 58a18.45 18.45 0 0 1 1.5-7.34l3.67-9.06a6.43 6.43 0 0 0-.22 1.9c0 9.22 36.3 39.45 84.94 39.45 12.5 0 30.6-2.58 30.6-17.46a14 14 0 0 0-.3-3.43z' />
				</svg>
			</div>
			<div className='grid flex-1 text-left text-sm leading-tight'>
				<p className='text-xl font-semibold  text-primary tracking-wide'>
					Crypto
				</p>
			</div>
		</Link>
	)
}
