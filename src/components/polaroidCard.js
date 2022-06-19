import './polaroidCard.scss';

const Polaroid = (props) => {
	return (
		<div className='polaroid'>
			<div className='polaroid--caption'>
				<img src={props.photo} alt={props.caption} />
			</div>
			Polaroid
			<div className='polaroid--caption'>{props.caption}</div>
			<div className='polaroid--timestamp'>{props.timestamp}</div>
		</div>
	);
};

export default Polaroid;
