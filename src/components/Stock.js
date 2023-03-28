import data from "../data/data";
import { useParams } from "react-router-dom";
 
 function Stock(){
 const params=useParams();
 console.log(params);
 const i=data.find(item=>item.symbol===params.symbol);
 console.log(i);


    return (
        <div>
            <h2>{i.symbol}</h2>
            <h2>Last Price:{i.lastPrice}</h2>
        </div>
        
    )
}
export default Stock;
