import { useState } from "react";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

export const Favorit = ({ items }) => {
  return (
    <div className="cart-items">
      <div className="cart-items-heater">
        {items.length === 0 && (
          <div>
            no items are added
          </div>
        )}
      </div>
      {items.map(() => (
        <div key={items.id} className="cart-itmes-list">
          <img className="cart-items-image" src={items.image} />
        </div>
      ))}

    </div>
  );

};
function Favort() {
  const [like, setLike] = useState("white");


  return (
    <div>
      <Tooltip title="Favorite " onClick={() => setLike({ color: "red" })}>
        <IconButton>
          <FavoriteBorderIcon />
        </IconButton>
      </Tooltip>
    </div>
  );
}
