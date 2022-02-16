import Masonry from 'react-masonry-component';


function MasonryWrapper(props) {

	console.log("props:", props)


	return (
		<div className="masonry" style={{ width: props.width }}>
		<Masonry
			{...props}
			display = {'flex'}
			columnCount={props.columns}
		>
	
		</Masonry>
	</div>
		
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
		width: {type: 'string', default: '100%'},
		columns: {type: 'number', default: 2}
	},
	outputProps: {
		onClick: {type: 'signal'},
		layoutCompleted: {type: 'signal'},
		onImagesLoaded: {type: 'signal'}
	}
};

