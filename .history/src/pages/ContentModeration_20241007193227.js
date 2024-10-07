import React, { useState } from 'react';
import { Table, Button, Modal, Checkbox } from 'antd';

const ContentModeration = () => {
  const [selectedContent, setSelectedContent] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedRows, setSelectedRows] = useState([]);

  // Mock data for demonstration purposes
  const data = [
    {
      key: '1',
      user: 'JohnDoe',
      contentType: 'Comment',
      reasonFlagged: 'Inappropriate language',
      timePosted: '2023-04-10 14:30',
      content: 'This is the full content of the flagged item...',
    },
    // ... more data items
  ];

  const columns = [
    {
      title: 'User',
      dataIndex: 'user',
      key: 'user',
    },
    {
      title: 'Type of Content',
      dataIndex: 'contentType',
      key: 'contentType',
    },
    {
      title: 'Reason Flagged',
      dataIndex: 'reasonFlagged',
      key: 'reasonFlagged',
    },
    {
      title: 'Time Posted',
      dataIndex: 'timePosted',
      key: 'timePosted',
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (_, record) => (
        <Button onClick={() => showModal(record)}>Review</Button>
      ),
    },
  ];

  const showModal = (content) => {
    setSelectedContent(content);
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
    // Implement approval logic here
  };

  const handleReject = () => {
    setIsModalVisible(false);
    // Implement rejection logic here
  };

  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      setSelectedRows(selectedRows);
    },
  };

  const handleBatchApprove = () => {
    // Implement batch approval logic here
    console.log('Batch approve:', selectedRows);
  };

  const handleBatchReject = () => {
    // Implement batch rejection logic here
    console.log('Batch reject:', selectedRows);
  };

  return (
    <div>
      <h1>Content Moderation</h1>
      <div style={{ marginBottom: 16 }}>
        <Button onClick={handleBatchApprove} style={{ marginRight: 8 }}>
          Batch Approve
        </Button>
        <Button onClick={handleBatchReject}>Batch Reject</Button>
      </div>
      <Table
        rowSelection={{
          type: 'checkbox',
          ...rowSelection,
        }}
        columns={columns}
        dataSource={data}
      />
      <Modal
        title="Content Review"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={() => setIsModalVisible(false)}
        footer={[
          <Button key="reject" onClick={handleReject}>
            Reject
          </Button>,
          <Button key="approve" type="primary" onClick={handleOk}>
            Approve
          </Button>,
        ]}
      >
        {selectedContent && (
          <div>
            <p><strong>User:</strong> {selectedContent.user}</p>
            <p><strong>Type:</strong> {selectedContent.contentType}</p>
            <p><strong>Reason Flagged:</strong> {selectedContent.reasonFlagged}</p>
            <p><strong>Time Posted:</strong> {selectedContent.timePosted}</p>
            <p><strong>Content:</strong></p>
            <p>{selectedContent.content}</p>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default ContentModeration;
