import React from 'react';
import { AiFillGithub, AiFillLinkedin, AiFillFacebook } from 'react-icons/ai';
import { GoLocation } from 'react-icons/go';
import { GiTie } from 'react-icons/gi';
import { useTheme } from 'next-themes';
import Image from 'next/image';

const Sidebar = () => {
	const { theme, setTheme } = useTheme();

	const handleThemeChange = () => {
		setTheme(theme === 'light' ? 'dark' : 'light');
		console.log(theme);
	};
	return (
		<div>
			<Image
				src='https://zakaria-sumon.netlify.app/static/124534a3125ce276f9d169f8847cab07/2dde6/hero-img1.webp'
				alt='Zakaria'
				className='mx-auto rounded-full '
				width={200}
				height={200}
				layout='responsive'
			/>
			<h3 className='my-4 text-2xl font-medium tracking-wider font-Kaushan'>
				<span className='text-green'>Zakarai </span>
				Sumon
			</h3>
			<p className='px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-200'>
				Web Developer
			</p>
			<a
				href=''
				download='name'
				className='flex items-center justify-center px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-200'
			>
				<GiTie className='w-6 h-6' /> Download Resume
			</a>
			{/* //Social Icon */}
			<div className='flex justify-around w-9/12 mx-auto my-5 text-green md:w-full '>
				<a href=''>
					<AiFillGithub className='w-6 h-6 cursor-pointer' />
				</a>
				<a href=''>
					<AiFillLinkedin className='w-6 h-6 cursor-pointer' />
				</a>
				<a href=''>
					<AiFillFacebook className='w-6 h-6 cursor-pointer' />
				</a>
			</div>
			{/* // address */}
			<div
				className='py-4 my-5 bg-gray-200 dark:bg-dark-200'
				style={{ marginRight: '-1rem', marginLeft: '-1rem' }}
			>
				<div className='flex items-center justify-center space-x-2'>
					<GoLocation />
					<span>Sunamgnaj, Bangladesh</span>
				</div>
				<p className='my-2'>zakariadev01@gmail.com</p>
				<p className='my-2'>+8801757454532</p>
			</div>

			{/* Buttons */}
			<button
				className='w-8/12 px-5 py-2 my-2 text-white rounded-full md:w-full bg-gradient-to-r from-green to-blue-400'
				onClick={() => window.open('mailto:zakariadev01@gmail.com')}
			>
				Email Me
			</button>
			<button
				className='w-8/12 px-5 py-2 my-2 text-white rounded-full md:w-full bg-gradient-to-r from-green to-blue-400'
				onClick={handleThemeChange}
			>
				Toggle Theme Mode
			</button>
		</div>
	);
};

export default Sidebar;
