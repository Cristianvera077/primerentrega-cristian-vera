import item from "../item";
import react from "react";
const itemList =({data = []}) => {
    return (
        data.map(film => <item key={film.id} info={film} />)

    );

}
export default itemList;