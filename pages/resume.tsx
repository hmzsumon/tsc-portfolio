import React from 'react';
import Bar from '../components/Bar';
import { languages, tools } from '../data';
import { motion } from 'framer-motion';
import { fadeInUp, routerAnimation } from '../animations';

const resume = () => {
	return (
		<motion.div
			className='px-6 py-2'
			variants={routerAnimation}
			initial='initial'
			animate='animate'
			exit='exit'
		>
			{/* //education */}
			<div className='grid gap-6 md:grid-cols-2'>
				<motion.div variants={fadeInUp} initial='initial' animate='animate'>
					<h5 className='my-3 text-2xl font-bold'>Education</h5>
					<div>
						<h5 className='my-2 text-xl font-bold'>
							Bachelor of Business Studies(BBS)
						</h5>
						<p className='font-semibold'>Bangladesh National University</p>
						<p className='my-3'>
							I am currently learning full-stack web development from the
							Programming Hero Course.{' '}
						</p>
					</div>
				</motion.div>

				<motion.div variants={fadeInUp} initial='initial' animate='animate'>
					<h5 className='my-3 text-2xl font-bold'>Experience</h5>
					<div className=''>
						<h5 className='my-2 text-xl font-bold'>Software Developer Jr.</h5>
						<p className='font-semibold'>Tata Consultancy Services</p>
						<p className='my-3'>I don't know why I am doing this job</p>
					</div>
				</motion.div>
			</div>

			{/* //language & tool */}
			<div className='grid gap-6 md:grid-cols-2'>
				<div>
					<h5 className='my-3 text-2xl font-bold'>Languages & Frameworks</h5>
					<div className='my-2'>
						{languages.map((language, index) => (
							<Bar data={language} key={index} />
						))}
					</div>
				</div>

				<div>
					<h5 className='my-3 text-2xl font-bold'>Tools & Software</h5>
					<div className='my-2'>
						{tools.map((tool, index) => (
							<Bar data={tool} key={index} />
						))}
					</div>
				</div>
			</div>
		</motion.div>
	);
};

export default resume;
