import { useDispatch } from 'react-redux';
import { deleteGoal } from '../features/goals/goalSlice';

const Goalitem = ({ goal }) => {
	const dispatch = useDispatch();

	return (
		<div className='goal'>
			<div>
				{new Date(goal.createdAt).toLocaleString('id-ID')}
				<h2>{goal.text}</h2>
				<button onClick={() => dispatch(deleteGoal(goal._id))} className='close'>
					X
				</button>
			</div>
		</div>
	);
};

export default Goalitem;
