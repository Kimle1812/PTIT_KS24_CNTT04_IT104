export default function Calculation() {
    let calcultation = [" 10 + 10 = 20", "10 - 10 = 0", "10 * 10 = 100", "10 / 10 = 1"];

  return (
    <div>
        <h2>Danh sách kết quả</h2>
      <ul>
          {calcultation.map(item =>{
            return <li key ={item}>{item}</li>
          })}
      </ul>
    </div>
  )
}
