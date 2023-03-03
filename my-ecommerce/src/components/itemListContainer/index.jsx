import React from "react";
import itemCount from "../itemCount";
import itemList from "../itemList";
import react, { useState,useEffect} from "react";
import tittle from "../tittle";
const films = [
    {id: 1, Image:"https://www.google.com/search?q=american+pie&tbm=isch&ved=2ahUKEwiHtrOYwb79AhXPuZUCHe7yDgcQ2-cCegQIABAA&oq=american+&gs_lcp=CgNpbWcQARgAMgcIABCxAxBDMggIABCABBCxAzIICAAQgAQQsQMyBAgAEEMyCAgAEIAEELEDMggIABCABBCxAzIICAAQgAQQsQMyBAgAEEMyCAgAEIAEELEDMggIABCABBCxAzoFCAAQgARQjhdYmR9g8TBoAHAAeACAAWWIAdsFkgEDOS4xmAEAoAEBqgELZ3dzLXdpei1pbWfAAQE&sclient=img&ei=A0ABZMeoPM_z1sQP7uW7OA&bih=875&biw=871#imgrc=inJIF0McnjseQM", tittle: "american pie "},
    {id: 2, Image:"https://www.google.com/search?q=american+pie&source=lnms&tbm=isch&sa=X&ved=2ahUKEwj7_7iXwb79AhXppJUCHUV6DgMQ_AUoAXoECAIQAw&biw=871&bih=875&dpr=1.1#imgrc=4agWv6n_ak41pM", tittle: "american pie 2"},
    {id: 3, Image:"https://www.google.com/search?q=american+pie3&tbm=isch&ved=2ahUKEwiv9Z7Swb79AhWoipUCHToTDdEQ2-cCegQIABAA&oq=american+pie3&gs_lcp=CgNpbWcQAzoHCAAQsQMQQzoFCAAQgAQ6BAgAEENQ_ANY7BhgqBpoAHAAeACAAUSIAfsBkgEBNJgBAKABAaoBC2d3cy13aXotaW1nwAEB&sclient=img&ei=fUABZO_CEaiV1sQPuqa0iA0&bih=875&biw=871#imgrc=iQzUKCw0g1vzSM", tittle: "american pie 3"},

]
export const ItemListcontainer = ({texto}) => {
    const [data,setData] = useState([]);
    useEffect (() => {
        const getData = new Promise(resolve =>{
            setTimeout(() => {
                resolve(films);
                
            }, 3000);
        });
        getData.then(res => setData(res));

    }, [])

    const onAdd = (quantity) => {
console.log("compraste ${quantity} unidades");

    }
    return ( 
        <>
       <tittle greeting={texto}/>
       <itemCount initial={3} stock={5} onAdd={onAdd}/>
       <itemList data={data}/>
       </>
    );
    

}
export default ItemListcontainer