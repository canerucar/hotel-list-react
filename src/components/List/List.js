import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import HotelImage from "images/hotel.png";
import { AiFillCloseCircle } from "react-icons/ai";

import { getHotelsAsync } from "api/requests/getHotelsAsync";
import { deleteHotelAsync } from "api/requests/deleteHotelAsync";
import { updatePointAsync } from "api/requests/updatePointAsync";

function List() {
  const dispatch = useDispatch();

  const hotels = useSelector(state => state.hotel);

  useEffect(() => {
    dispatch(getHotelsAsync());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteHotelAsync({ id }));
  }

  const addPoint = (id, point) => {
    dispatch(updatePointAsync({ id, point: point + 1 }));
  }

  const deletePoint = (id, point) => {
    dispatch(updatePointAsync({ id, point: point - 1 }));
  }

  return (
    [...hotels].sort((a, b) => b.point - a.point).map(hotel => (
      <div className='home-list' key={hotel.id}>
        <img src={HotelImage} alt="" />
        <div className='home-list-content'>
          <div className='home-list-content-title'>
            {hotel.name}
          </div>
          <div className='home-list-content-point'>
            {hotel.point}
          </div>
          <div className='home-list-content-buttons'>
            <button onClick={() => addPoint(hotel.id, hotel.point)}>Increase</button>
            <button onClick={() => deletePoint(hotel.id, hotel.point)} disabled={hotel.point === 0}>Decrease</button>
          </div>
          <button className='home-list-content-close' onClick={() => handleDelete(hotel.id)}>
            <AiFillCloseCircle />
          </button>
        </div>
      </div>
    ))
  )
}

export default List;