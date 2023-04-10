import { useState } from "react";
import {RiHeart3Fill} from "react-icons/ri";

const Like = () => {
    const [like , setLike] = useState(null);
    
    const onLikeClick = () => {
      setLike(like + 1)
    }

    return ( 
        <div>
             <button onClick={onLikeClick} className="flex gap-2 items-center">
                          <RiHeart3Fill className={like && `text-red-600` }/>
                          <p>{like}</p>
             </button>
        </div>
     );
}
 
export default Like;