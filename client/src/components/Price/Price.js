import { useSelector } from 'react-redux';
function Price() {
  const price = useSelector((state) => state.price);
  return (
    <div>
      <h3>Price</h3>
      <p>Hour session: !!!</p>
      <p>15 min test call: {price}</p>
    </div>
  );
}

export default Price;
