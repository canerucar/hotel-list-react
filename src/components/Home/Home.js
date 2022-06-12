import List from "components/List/List";
import Modal from "components/Modal/Modal";

import "components/Home/Home.scss";

function Home() {

  return (
    <div className='home'>
      <div className='home-add'>
        <Modal />
      </div>
      <div className='home-filter'>
        Filter
      </div>
      <List />
      <div className='home-pagination'>
        Pagination
      </div>
    </div>
  );
}

export default Home;