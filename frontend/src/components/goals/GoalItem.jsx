import React from "react";
import { FaTrash } from "react-icons/fa";
import { deleteGoal } from "../../features/goals/goalSlice";
import {useDispatch} from 'react-redux'

function GoalItem({ goal, index }) {

  const dispatch = useDispatch();
  
  const onIconClick = () => {
    dispatch(deleteGoal(goal._id, index))
    console.log("delete", goal._id);
  };

  return (
    <>
      <div className="goal">
        <div>
          <FaTrash style={{ color: "red" }} onClick={onIconClick} />
        </div>
        <div>{new Date(goal.createdAt).toLocaleString("en-US")}</div>
        <h2>
         {index} {goal.text}
        </h2>
      </div>
    </>
  );
}

export default GoalItem;
