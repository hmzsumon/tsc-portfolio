/* eslint-disable react/no-danger-with-children */
import React, { FunctionComponent } from 'react';
import { Service } from '../types';

export const ServiceCard: FunctionComponent<{ service: Service }> = ({
	service: { Icon, about, title },
}) => {
	const createMarkup = () => ({ __html: about });
	return (
		<div className='flex items-center p-2 space-x-4'>
			<Icon className='w-12 h-12 text-green' />
			<div>
				<h3 className='font-bold'>{title}</h3>
				<p dangerouslySetInnerHTML={createMarkup()} />
			</div>
		</div>
	);
};
