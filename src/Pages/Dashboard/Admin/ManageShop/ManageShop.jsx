import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';

import useAllShop from '../../../../Hook/useAllShop';
import SectionTitle from '../../../../Components/SectionTitle/SectionTitle';

const ManageShop = () => {
  const [allShop] = useAllShop();
  const [showModal, setShowModal] = useState(false);
  const [noticeText, setNoticeText] = useState('');

  const handleModalOpen = () => {
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  const handleNoticeSend = () => {
    // Implement your logic to handle sending notice here
    console.log('Notice sent:', noticeText);
    // Add additional logic as needed

    // Close the modal after sending notice
    handleModalClose();
  };

  return (
    <div>
      <Helmet>
        <title>V Inventory | Manage Shop</title>
      </Helmet>
      <SectionTitle heading={'Manage Shop'} subHeading={'Know about shop'} />
      <div className="overflow-x-auto mt-4 rounded-xl">
        <table className="table bg-yellow-100">
          <thead>
            <tr className="bg-orange-300 m-10">
              <th></th>
              <th>Shop Name</th>
              <th>Shop logo</th>
              <th>Product Limit</th>
              <th>Shop Description</th>
              <th>Notice</th>
            </tr>
          </thead>
          <tbody>
            {allShop &&
              allShop.map((item, index) => (
                <tr key={item._id}>
                  <th>{index + 1}</th>
                  <td>{item.shopName}</td>
                  <td>
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={item.logo}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </td>
                  <td>{item.limit}</td>
                  <td>{item.description}</td>
                  <td>
                    <button
                      onClick={handleModalOpen}
                      className="btn btn-ghost bg-red-600"
                    >
                      Notice
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      <Modal open={showModal} onClose={handleModalClose} center>
        <div className="p-4">
          <h2>Send Notice</h2>
          <input
            type="text"
            placeholder="Enter notice here"
            value={noticeText}
            onChange={(e) => setNoticeText(e.target.value)}
            className="border border-gray-300 rounded-md p-2 mt-2 w-full"
          />
          <div className="mt-4">
            <button onClick={handleNoticeSend} className="btn btn-primary mr-2">
              Send
            </button>
            <button onClick={handleModalClose} className="btn btn-secondary">
              Cancel
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ManageShop;
