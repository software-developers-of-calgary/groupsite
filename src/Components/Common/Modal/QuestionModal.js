import React, { Component } from "react";
// import Modal from "antd/es/modal";
// import Form from "antd/es/form";
// import Input from "antd/es/input";
// import Button from "antd/es/button";
import "./QuestionModal.css";

const QuestionModal = () => {
  return {};
};
// class QuestionModal extends Component {
//   constructor(props, context) {
//     super(props, context);
//     this.handleShow = this.handleShow.bind(this);
//     this.handleClose = this.handleClose.bind(this);

//     this.state = {
//       show: false,
//     };
//   }

//   handleClose() {
//     this.setState({ show: false });
//   }

//   handleShow() {
//     this.setState({ show: true });
//   }

//   render() {
//     return (
//       <>
//         <Button type="primary" onClick={this.handleShow}>
//           {this.props.buttonText}
//         </Button>

//         <Modal
//           visible={this.state.show}
//           onOk={this.handleClose}
//           onCancel={this.handleClose}
//           title="Ask a question"
//         >
//           <Form onFinish={this.handleClose}>
//             <Form.Item
//               label="Email address"
//               name="email"
//               rules={[
//                 {
//                   required: true,
//                   message: "Please enter a valid email adress",
//                 },
//               ]}
//             >
//               <Input />
//             </Form.Item>
//             <Form.Item label="Question" name="question">
//               <Input.TextArea />
//             </Form.Item>
//           </Form>
//         </Modal>
//       </>
//     );
//   }
// }

export default QuestionModal;
