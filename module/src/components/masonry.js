import Masonry from 'react-masonry-component';


function MasonryWrapper(props) {

	return (
		<div className="masonry" style={{ width: props.width} }>
		<Masonry
			display = {'flex'}
			columnCount={props.columns}
			columnClassName={props.elementClassName}
			enableResizableChildren={props.enableResizableChildren}	
			{...props}
		>
			{props.children}
			</Masonry>
		</div>	
	);	
}

export const MasonryNode = {
	name: 'Masonry Grid',
	category: 'Masonry',
	getReactComponent() {
		return (MasonryWrapper
	  )
	},
	inputProps: {
		width: {type: 'string', default: '100%'},
		columns: {type: 'number', default: 3},
		elementClassName:{type: 'string', default:'grid_column_class'},
		enableResizableChildren:{type: 'boolean', default: 'true'}
	},
	outputProps: {
		onClick: {type: 'signal'},
		layoutCompleted: {type: 'signal'},
		onImagesLoaded: {type: 'signal'}
	}
};

