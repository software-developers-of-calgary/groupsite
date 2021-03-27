import React, { useEffect } from "react";

// const Option = Select.Option;

// const techStacks = [
//   "JavaScript",
//   "Node.js",
//   "React.js",
//   "Python",
//   "Java",
//   ".Net",
//   "REST",
//   "GrapQL",
//   "PSQL",
//   "MySQL",
//   "MongoDB",
//   "Serverless",
// ];
// const difficultyLevels = ["Novice", "Confident", "Seasoned", "Hopeless"];

// const layout = {
//   labelCol: {
//     span: 4,
//   },
//   wrapperCol: {
//     span: 16,
//   },
// };
// const tailLayout = {
//   wrapperCol: {
//     offset: 8,
//     span: 16,
//   },
// };

// const getTechStackOptions = () =>
//   techStacks.map((tech) => (
//     <Option key={tech} value={tech}>
//       {tech}
//     </Option>
//   ));

// const ProjectForm = (props) => {
//   const [form] = Form.useForm();

//   useEffect(() => {
//     form.resetFields();
//   }, [props.resetSwitch]);

//   const onFinish = (values) => {
//     props.onSubmit(values, props.projectsPage);
//   };

//   // TODO: This function has to be defined
//   const onFinishFailed = (errorInfo) => {};

//   return (
//     <Form
//       form={form}
//       {...layout}
//       name="basic"
//       initialValues={{}}
//       onFinish={onFinish}
//       onFinishFailed={onFinishFailed}
//       style={{ paddingTop: "50px", display: props.display }}
//     >
//       <Form.Item
//         label="Project Name"
//         name="name"
//         rules={[
//           {
//             required: true,
//             message: "Please input the name of the project!",
//           },
//         ]}
//       >
//         <Input />
//       </Form.Item>

//       <Form.Item label="Summary" name="summary" rules={[]}>
//         <Input />
//       </Form.Item>

//       <Form.Item label="Description" name="description" rules={[]}>
//         <Input.TextArea />
//       </Form.Item>

//       <Form.Item label="Technologies" name="technologies" rules={[]}>
//         <Select mode="multiple" labelInValue style={{ width: 120 }}>
//           {getTechStackOptions()}
//         </Select>
//       </Form.Item>
//       <Form.Item {...tailLayout}>
//         <Button type="secondary" onClick={() => form.resetFields()}>
//           Cancel
//         </Button>
//       </Form.Item>
//       <Form.Item {...tailLayout}>
//         <Button type="primary" htmlType="submit">
//           Submit
//         </Button>
//       </Form.Item>
//     </Form>
//   );
// };
const ProjectForm = () => {
  return {};
};

export default ProjectForm;
