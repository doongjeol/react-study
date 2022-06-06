const captainAmerica = {
    name: '스티븐 로저스',
    actor: '크리스 에반스',
    alias: '캡틴 아메리카'
  };
  
  function print(hero) {
    const { test, name, actor } = hero;
    const text = `${test}(${name}) 역할을 맡은 배우는 ${actor} 입니다.`;
    console.log(text);
  }
  
  print(captainAmerica);