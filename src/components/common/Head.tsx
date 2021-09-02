import React from 'react';

import { Helmet } from 'react-helmet';

interface IComponentProps {
	description: string;
	title: string;
}

export const Head: React.FC<IComponentProps> = ({
	description,
	title,
}) => {
	return (
		<Helmet>
			<html id="adparris" lang="en-US" />
			<meta name="description" content={description} />
			<title>{title}</title>
		</Helmet>
	);
};
