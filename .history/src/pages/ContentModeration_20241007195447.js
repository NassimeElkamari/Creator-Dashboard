import React, { useState } from 'react';
import { Table, Button, Modal } from 'antd';

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
        <Button onClick={() => showModal(record)} className="bg-blue-500 hover:bg-blue-600 text-white dark:bg-blue-700 dark:hover:bg-blue-800">
          Review
        </Button>
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
    <div className="p-6 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100">
      <h1 className="text-3xl font-bold mb-6">Content Moderation</h1>
      <div className="mb-4">
        <Button onClick={handleBatchApprove} className="mr-2 bg-blue-500 hover:bg-blue-600 text-white dark:bg-blue-700 dark:hover:bg-blue-800">
          Batch Approve
        </Button>
        <Button onClick={handleBatchReject} className="bg-red-500 hover:bg-red-600 text-white dark:bg-red-700 dark:hover:bg-red-800">
          Batch Reject
        </Button>
      </div>
      <div className="overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700">
        <Table
          rowSelection={{
            type: 'checkbox',
            ...rowSelection,
          }}
          columns={columns}
          dataSource={data}
          className="[&_.ant-table]:!bg-transparent [&_.ant-table-thead>tr>th]:!bg-gray-100 dark:[&_.ant-table-thead>tr>th]:!bg-gray-700 [&_.ant-table-tbody>tr>td]:!bg-transparent [&_.ant-table-tbody>tr:hover>td]:!bg-gray-50 dark:[&_.ant-table-tbody>tr:hover>td]:!bg-gray-700 [&_.ant-table-cell]:!text-gray-900 dark:[&_.ant-table-cell]:!text-gray-100 [&_.ant-table-row-expand-icon]:!bg-gray-200 dark:[&_.ant-table-row-expand-icon]:!bg-gray-600"
          pagination={{
            className: "!bg-transparent dark:!bg-transparent [&_.ant-pagination-item-active]:!bg-blue-500 dark:[&_.ant-pagination-item-active]:!bg-blue-700 [&_.ant-pagination-item-active>a]:!text-white",
          }}
        />
      </div>
      <Modal
        title="Content Review"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={() => setIsModalVisible(false)}
        footer={[
          <Button key="reject" onClick={handleReject} className="bg-red-500 hover:bg-red-600 text-white dark:bg-red-700 dark:hover:bg-red-800">
            Reject
          </Button>,
          <Button key="approve" onClick={handleOk} className="bg-green-500 hover:bg-green-600 text-white dark:bg-green-700 dark:hover:bg-green-800">
            Approve
          </Button>,
        ]}
        className="[&_.ant-modal-content]:bg-white [&_.ant-modal-content]:dark:bg-gray-800 [&_.ant-modal-header]:bg-white [&_.ant-modal-header]:dark:bg-gray-800 [&_.ant-modal-title]:text-gray-900 [&_.ant-modal-title]:dark:text-gray-100 [&_.ant-modal-close-x]:text-gray-500 [&_.ant-modal-close-x]:dark:text-gray-400"
      >
        {selectedContent && (
          <div className="text-gray-900 dark:text-gray-100">
            <p><strong>User:</strong> {selectedContent.user}</p>
            <p><strong>Type:</strong> {selectedContent.contentType}</p>
            <p><strong>Reason Flagged:</strong> {selectedContent.reasonFlagged}</p>
            <p><strong>Time Posted:</strong> {selectedContent.timePosted}</p>
            <p><strong>Content:</strong></p>
            <p className="bg-gray-100 dark:bg-gray-700 p-2 rounded">{selectedContent.content}</p>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default ContentModeration;
