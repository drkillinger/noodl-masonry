import Masonry from 'react-masonry-component';


function MasonryWrapper(props) {

	console.log("props:", props)


	return (
		<Masonry
			{...props}
			breakpointCols={2}	
			display = {'flex'}
			width = {'100%'}
		>
	
		</Masonry>
	);
	
		
}

export const MasonryNode = {
	name: 'Masonry',
	category: 'LOL',
	getReactComponent() {
		return (MasonryWrapper
	  )
	},
	inputProps: {
		//enabled: {type: 'boolean', default: false},
		//height: {type: 'number'}
		columnCount: {type: 'number'}
	},
	outputProps: {
		onClick: {type: 'signal'},
		layoutCompleted: {type: 'signal'},
		onImagesLoaded: {type: 'signal'}
	}
};

