import classes from './Counter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { calculateActions } from '../store/calculator/calculatorSlice';

const Calculator = () => {
 
  const result = useSelector((state)=> state.calculator.result)
  const dispatch = useDispatch()
  
  console.log(result,"RESULT")

  const addHandler = ()=>{
       dispatch(calculateActions.add(5))
  }
  const subtractHandler = ()=>{
    dispatch(calculateActions.subtract(10))
    
  }
  const multiplyHandler = ()=>{
    dispatch(calculateActions.multiply(2))
    
  }
  const divideHandler = ()=>{
    dispatch(calculateActions.divide(4))

  }
    
 

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>Result: {result}</div>
      <button onClick={addHandler}>+5 </button>
      <button onClick={subtractHandler}> -10</button>
      <button onClick={multiplyHandler}> *2</button>
      <button onClick={divideHandler}> /4</button>
      
    </main>
  );
};

export default Calculator;
