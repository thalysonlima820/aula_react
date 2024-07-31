const ForEach = () => {
    const numbers: number[] = [1, 2, 3, 4, 5, 6];
    const elements: JSX.Element[] = [];
  
    numbers.forEach((n) => {
      elements.push(<div key={n}>{n}</div>);
    });
  
    return <div>{elements}</div>;
  }
  
  export default ForEach;
  