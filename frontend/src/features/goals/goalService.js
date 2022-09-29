import axios from "axios";

const API_URL = "/api/goals/";

// Get user goals
const getGoals = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.get(API_URL, config);

  return response.data;
};

// Set Goal
const createGoal = async (goalData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.post(API_URL, goalData, config);

  return response.data;
};

// Update Goal
// const updateGoal = async (userData) => {
//     const response = await axios.post(API_URL + 'login', userData)

//     if(response.data) {
//         localStorage.setItem('user', JSON.stringify(response.data))
//     }

//     return response.data
// }

// Delete Goal
const deleteGoal = async (goal_id, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.delete(API_URL + goal_id, config);

  return response.data;
};

const goalService = {
  getGoals,
  createGoal,
  // updateGoal,
  deleteGoal
};

export default goalService;
