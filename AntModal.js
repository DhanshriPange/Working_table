import React,{useState} from 'react'
import { Modal, Button,Form,Input} from 'antd';
import Draggable from 'react-draggable';
//import ReactDOM from 'react-dom';


  
const AntModal = () => {

    const [visible,setVisible] = useState(false);
    const [disabled, setDisabled] = useState(true);
    
   const bounds= { left: 5, top: 5, bottom: 5, right: 5}
const showModal=(visible)=>{
    setVisible(visible)
}

 const handleOk=(e)=>{
  setVisible(visible)
}

 const handleCancel=(e)=>{
setVisible(!visible)
}
const onMouseOver=(e) => {
  if (disabled) {
    setDisabled(disabled);
  }
}
const onMouseOut=(e) => {
  setDisabled(!disabled);
}


const draggleRef = React.createRef();

  const onStart = (event, uiData) => {
    const { clientWidth, clientHeight } = window.document.documentElement;
    const targetRect = draggleRef.current?.getBoundingClientRect();
    if (!targetRect) {
      return;
    }
    setDisabled({
    bounds : {
        left: -targetRect.left + uiData.x,
        right: clientWidth - (targetRect.right - uiData.x),
        top: -targetRect.top + uiData.y,
        bottom: clientHeight - (targetRect.bottom - uiData.y),
      },
    });
  };
     
    return (
        <div>


        <Button onClick={showModal}>Add here!</Button>
        <Modal
          title={
            <div
              style={{width: '100%',cursor: 'move',}}
              onMouseOver={onMouseOver}
              onMouseOut={onMouseOut}
             
              onFocus={() => {}}
              onBlur={() => {}}
              // end
>Draggable Modal
            </div>
          }
          visible={visible}
          onOk={handleOk}
          onCancel={handleCancel}
          modalRender={modal => (
            <Draggable
              disabled={disabled}
            bounds={bounds}
              onStart={(event, uiData) => onStart(event, uiData)}
            >
              <div ref={draggleRef}>{modal}</div>
            </Draggable>
          )}
        >
           {/* <Form onSubmit={handleAddFormSubmit}>
<Form.Item name="fullname"label= "full name">
<Input
        type="text"
        name="fullname"
        required="required"
        placeholder="Enter a fullname..."
        onChange={handleAddFormChange} ></Input>
</Form.Item>

 
<Form.Item name="fullname"label= "full name"


        name="phone"
        label="Phone Number"
        rules={[{ required: true, message: 'Please input your phone number!' }]}
      >
        <Input addonBefore={prefixSelector} style={{ width: '100%' }} 
        type="tel"
        id="phone"
        name="phonenumber"
        required="required"
        placeholder="Enter an phonenumber..."
        onChange={handleAddFormChange}
      ></Input>
</Form.Item>


<Form.Item
        name="email"
        label="E-mail"
        rules={[
          {
            type: 'email',
            message: 'The input is not valid E-mail!',
          },
          {
            required: true,
            message: 'Please input your E-mail!',
          },
        ]}
      >
<Input
        type="email"
        name="email"
        required="required"
        placeholder="Enter a email..."
        onChange={handleAddFormChange}
      ></Input>
</Form.Item>

<Form.Item name="salary"label= "salary">
<Input
        type="text"
        name="salary"
        required="required"
        placeholder="Enter an salary..."
        onChange={handleAddFormChange}
      ></Input>
</Form.Item>

<Form.Item name="designation"label= "designation">
<Input
        type="text"
        name="designation"
        required="required"
        placeholder="Enter an designation..."
        onChange={handleAddFormChange}
      ></Input>
</Form.Item>

<Form.Item name="department"label= "department">
<Input
        type="text"
        name="department"
        required="required"
        placeholder="Enter an department..."
        onChange={handleAddFormChange}
      ></Input>
</Form.Item>

<Form.Item name="manager"label= "manager">
<Input
        type="text"
        name="manager"
        required="required"
        placeholder="Enter an manager..."
        onChange={handleAddFormChange}
      >
</Input>
</Form.Item>
<Form.Item>
        <Button type="primary" htmlType="submit">Submit</Button>
      </Form.Item>
      <Form.Item>
    
        <Button type="primary" htmlType="reset">RESET</Button>
      </Form.Item>
            </Form>
     */}
        </Modal>
    
 
           </div>
         )
          }
       
       export default AntModal
            
