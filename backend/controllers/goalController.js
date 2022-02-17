// @desc Get goals
//  @route GET /api/goals
//  @access Private
const getGoals = (req, res) => {
	res.status(200).json({ message: 'Get goals' });
};

// @desc Get goals
//  @route GET /api/goals
//  @access Private
const setGoal = (req, res) => {
	res.status(200).json({ message: 'Set goals' });
};

// @desc Update goal
//  @route PUT /api/goals/:id
//  @access Private
const updateGoals = (req, res) => {
	res.status(200).json({ message: `Update goal ${req.params.id}` });
};

// @desc Delete goal
//  @route DELETE /api/goals/:id
//  @access Private
const deleteGoal = (req, res) => {
	res.status(200).json({ message: `Delete goal ${req.params.id}` });
};

module.exports = {
	getGoals,
	setGoal,
	updateGoals,
	deleteGoal,
};
