import { motion } from 'framer-motion';
import {
	GetServerSidePropsContext,
	GetStaticProps,
	GetStaticPropsContext,
	NextPage,
} from 'next';
import React from 'react';
import { fadeInUp, routerAnimation, stagger } from '../animations';
import { ServiceCard } from '../components/ServiceCard';
import { services } from '../data';

const About: NextPage = () => {
	return (
		<motion.div
			className='flex flex-col flex-grow px-6 pt-1'
			variants={routerAnimation}
			initial='initial'
			animate='animate'
			exit='exit'
		>
			<h5 className='my-3 font-medium'>
				Hi! I am HM Zakaria Sumon. Welcome to my page. I'm a freelance Web
				Designer and MERN stack web developer. My job is to build your website
				so that it is functional and user-friendly. I have strong knowledge in
				MERN Stack with vast experience in building Web Applications, used
				React.js for client-side, Node.js/Express for server-side and MongoDB,
				SQL Server for the database. Keeping in mind scalability and cline code
				that is maintainable and readable. By night I spend my time working on a
				freelance project and building my products. I am very interested in web
				design and development. it is my hobby and profession. So I complete my
				work by mixing the sweetness of mind with discipline and a sense of
				responsibility.
			</h5>
			<div
				className='flex-grow p-4 mt-5 bg-gray-400 dark:bg-dark-100 '
				style={{ marginLeft: '-1.5rem', marginRight: '-1.5rem' }}
			>
				<h6 className='my-3 text-xl font-bold tracking-wide'>What I Offer</h6>
				<motion.div
					className='grid gap-6 lg:grid-cols-2'
					variants={stagger}
					initial='initial'
					animate='animate'
				>
					{services.map((service) => (
						<motion.div
							variants={fadeInUp}
							key={Math.random()}
							className='bg-gray-200 rounded-lg dark:bg-dark-200 lg:col-span-1'
						>
							<ServiceCard service={service} />
						</motion.div>
					))}
				</motion.div>
			</div>
		</motion.div>
	);
};

export default About;
// export const getServerSideProps = async (
// 	context: GetServerSidePropsContext
// ) => {
// 	const res = await fetch('http://localhost:3000/api/services');

// 	const data = await res.json();

// 	console.log('SERVER', data);
// 	return {
// 		props: {
// 			services: data,
// 		},
// 		// notFound: true,
// 	};
// };

// export const getStaticProps = async (context: GetStaticPropsContext) => {
// 	const res = await fetch('http://localhost:3000/api/services');

// 	const data = await res.json();

// 	console.log('SERVER', data);
// 	return {
// 		props: {
// 			services: data,
// 		},
// 		// notFound: true,
// 	};
// };
