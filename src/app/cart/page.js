'use client'
import { useState } from "react"
import Robot from "./robot"
export default function Cart() {
  let [num, setNum] = useState([1, 2, 1])

  return (
    <div>
      <CartItem num={num} setNum={setNum} />
      {/* <CartItem num={num} setNum={setNum}/> */}
      <br/>
      <div style={{textAlign:'center'}}>< Robot /></div>
    </div>
  )
}

function CartItem({ num, setNum }) {
  return(
    num.map((a,i) => {
        return (
          <div className="cart-item" key={i}>
            <p>상품명</p>
            <p>${i+1}0</p>
            <p>{num[i]}개</p>
            <button onClick={() => {
              num[i] = num[i]+1
              setNum([...num])
            }}>👍</button>
          </div>
        )
      })
  )
}