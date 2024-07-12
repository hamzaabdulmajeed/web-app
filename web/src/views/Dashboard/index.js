import {useEffect, useState} from "react"
import {useNavigate} from 'react-router-dom'



export default function Dashboard(){


const navigate = useNavigate()    
const [products , setProducts] = useState([])

useEffect(() => {
    fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>setProducts(json))
}, [])

console.log("products ==>", products)

const goToDetail = (item) =>{
    navigate(`/detail/${item.id}`)
}
    return(

<div>
<h1>Dashboard</h1>
{products.map((item) => (
  <div
    key={item.id}
    onClick={() => goToDetail(item)}
    style={{ cursor: "pointer", marginBottom: "10px" }}
  >
    <img src={item.image} width="50" alt={item.title} />
    <h5>{item.title}</h5>
  </div>
))}
</div>
);
}
//         <div>
//             <h1>Dashboard</h1>

//             {products.map(item => {
//                 return
//                     <div onClick={()=> goToDetail(item)}
//                     style={{border: "1px solid gray", margin: 50}}>
                        
//                         <img src={item.image} width="50" />
//                         <h5>{item.title}</h5>
//                     </div>
//             })}
//         </div>
//     )
// }