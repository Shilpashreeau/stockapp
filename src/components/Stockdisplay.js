import { useNavigate } from "react-router-dom";
// import {Link} from "react-router-dom";

 function Stockdisplay({ stock })
{
    const navigate = useNavigate()

    const handleClick = () =>
    {
        navigate(`/stocks/${stock.symbol}`)
        
    }
    return (
        
        <tr onClick={handleClick}>
            <td>
                {stock.name}
            </td>
            <td>
                {stock.lastPrice}
            </td>
            <td>
                {stock.change}
            </td>
        </tr>
        
        
    )
}
export default Stockdisplay;