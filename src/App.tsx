import { useEffect, useState } from "react";

function App() {
  const [pop, setPop] = useState(10);
  const [food, setFood] = useState(10);
  const [rep, setRep] = useState(5);

  const getGrowth = () => {
    switch (true) {
      case pop <= 10:
        return 1;
      case pop <= 20:
        return 2;
      case pop <= 30:
        return 4;
      case pop <= 50:
        return 8;
      default:
        return 16;
    }
  };

  const addPop = (amount: number) => setPop((p) => p + amount);
  const addFood = (amount: number) => setFood((p) => p + amount);
  const addRep = (amount: number) => setRep((p) => p + amount);

  const reset = () => {
    setPop(10);
    setFood(10);
    setRep(5);
  };

  useEffect(() => {
    if (pop <= food) return;

    const dif = pop - food;

    setPop(food);
    addRep(-dif);
  }, [pop, food]);

  return (
    <main>
      <div>
        <h1>
          Star Burn
        </h1>
        <h2>Population</h2>
        <div className="counter">
          <button onClick={() => addPop(-getGrowth())}>-Growth</button>
          <button onClick={() => addPop(-getGrowth())}>-5</button>
          <button onClick={() => addPop(-getGrowth())}>-1</button>
          <span>{pop}</span>
          <button onClick={() => addPop(getGrowth())}>+1</button>
          <button onClick={() => addPop(getGrowth())}>+5</button>
          <button onClick={() => addPop(getGrowth())}>+Growth</button>
        </div>
        <h2>Food</h2>
        <div className="counter">
          <button onClick={() => addFood(-10)}>-10</button>
          <button onClick={() => addFood(-5)}>-5</button>
          <button onClick={() => addFood(-1)}>-1</button>
          <span>{food}</span>
          <button onClick={() => addFood(1)}>+1</button>
          <button onClick={() => addFood(5)}>+5</button>
          <button onClick={() => addFood(10)}>+10</button>
        </div>
        <h2>Reputation</h2>
        <div className="counter">
          <button onClick={() => addRep(-5)}>-5</button>
          <button onClick={() => addRep(-1)}>-1</button>
          <span>{rep}</span>
          <button onClick={() => addRep(1)}>+1</button>
          <button onClick={() => addRep(5)}>+5</button>
        </div>
        <button style={{ marginTop: "3rem" }} onClick={reset}>Reset</button>
      </div>
    </main>
  );
}

export default App;
