import React, { useState } from "react";
import { Modal, Button } from "antd";

const FeedBackModal = ({ closeModal, visible }) => {
  const handleOk = () => closeModal();
  const handleCancel = () => closeModal();
  return (
    <div className="">
      <Modal
        title="Basic Modal"
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        Contents
      </Modal>
    </div>
  );
};

export default FeedBackModal;
