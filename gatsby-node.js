const path = require('path');

exports.onCreateWebpackConfig = ({ _, actions }) => {
	actions.setWebpackConfig({
		resolve: {
			alias: {
				'@assets': path.resolve(__dirname, 'src/assets'),
				'@components': path.resolve(__dirname, 'src/components'),
				'@data': path.resolve(__dirname, 'src/data'),
				'@pages': path.resolve(__dirname, 'src/pages'),
				'@utils': path.resolve(__dirname, 'src/utils'),
			},
		},
	});
};
