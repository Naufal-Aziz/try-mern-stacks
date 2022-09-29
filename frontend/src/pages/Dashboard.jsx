import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Spinner from "../components/Spinner";
import { getGoals, resetGoals } from "../features/goals/goalSlice";
import GoalForm from "../components/goals/GoalForm";
import GoalItem from "../components/goals/GoalItem";

function Dashboard() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);
  const { goals, isLoading, isError, message, isSuccess } = useSelector(
    (state) => state.goals
  );

  const goTo =  (id) => {
    navigate(`/:${id}`)
  }

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }

    if (isError) {
      console.log(message);
    }

    dispatch(getGoals());

    return () => {
      dispatch(resetGoals());
    };
  }, [user, navigate, isError, message, dispatch]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <section className="heading">
        <h1>Welcome {user && user.name}</h1>
        <p>Goals Dashboard</p>
      </section>
      <GoalForm />
      <section className="content">
        {goals && goals.length > 0 ? (
          <div className="goals">
            {goals.map((goal, index) => 
            {
              return <span onClick={() => goTo(goal._id)} key={goal._id}>
                <GoalItem goal={goal} index={index}/>
              </span>
            }
            
            )}
          </div>
        ) : (
          <h1>ajos</h1>
        )}
      </section>
    </>
  );
}

export default Dashboard;
