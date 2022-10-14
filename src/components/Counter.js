import { useSelector, useDispatch } from 'react-redux';
import classes from './Counter.module.css';

const Counter = () => {
  
  const counter=  useSelector(state=> state.counter);
  const showCounter = useSelector(state=> state.showCounter);

  const dispatch = useDispatch();
  
    const toggleCounterHandler = () => {
      dispatch({type: 'TOGGLE_COUNTER'})
    };

    const incrementHandler= ()=>{
      dispatch({type: 'INCREMENT'});
    };
    const decrementHandler= ()=>{
      dispatch({type: 'DECREMENT'})
    };
    
    const increaseHandler= ()=>{
      dispatch({type: 'INCREASE_BY_AMOUNT', amount:5 })
    };

    

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increase by 5</button>
        <button disabled={counter<1} onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
