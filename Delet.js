import { Modal, Button, Space } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';

function showDeleteConfirm() {
  confirm({
    title: 'Are you sure delete this task?',
    icon: <ExclamationCircleOutlined />,
    content: 'Some descriptions',
    okText: 'Yes',
    okType: 'danger',
    cancelText: 'No',
    onOk() {
      console.log('OK');
    },
    onCancel() {
      console.log('Cancel');
    },
  });
}



ReactDOM.render(
  <Space wrap>
   
    <Button onClick={showDeleteConfirm} type="dashed">
      Delete
    </Button>
   
  </Space>,
  
);