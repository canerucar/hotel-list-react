import { useState } from "react";
import { IoIosAdd } from "react-icons/io";
import { useDispatch } from 'react-redux';

import { addHotelAsync } from "api/requests/addHotelAsync";
import { getHotelsAsync } from "api/requests/getHotelsAsync";

import './Modal.scss';

export default function Modal() {
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState("");

  const dispatch = useDispatch();

  const handleAdd = (event) => {
    event.preventDefault();
    console.log('name', name);
    dispatch(addHotelAsync({ id: Date.now(), name, point: 0 }));
    setShowModal(false);
    setName("");
    dispatch(getHotelsAsync());
  }

  return (
    <>
      <button className='home-add-button' onClick={() => setShowModal(true)}><IoIosAdd /> ADD HOTEL</button>
      {showModal ? (
        <>
          <div className="modal">
            <div className="modal-wrapper">
              <form onSubmit={handleAdd} className="form">
                <input type="text" className="border" placeholder="Please enter hotel name" onChange={(event) => setName(event.target.value)} />
                <button type="submit">Add</button>
              </form>
              <button
                className="button"
                type="button"
                onClick={() => setShowModal(false)}
              >
                Close
              </button>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
}