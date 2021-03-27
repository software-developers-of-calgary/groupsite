import React, { useEffect, useState } from "react";
import axios from "axios";
import { URL } from "../../config";
import "antd/dist/antd.css";
import Form from "antd/es/form";
import Input from "antd/es/input";
import Button from "antd/es/button";
import Select from "antd/es/select";

const Option = Select.Option;

const techStacks = [
  "JavaScript",
  "Node.js",
  "React.js",
  "Python",
  "Java",
  ".Net",
  "REST",
  "GrapQL",
  "PSQL",
  "MySQL",
  "MongoDB",
];
const difficultyLevels = ["Novice", "Confident", "Seasoned", "Hopeless"];

const layout = {
  labelCol: {
    span: 4,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

const handleAddProject = (formData, handleProjectCreated) => {
  const token = localStorage.getItem("serverApiToken");
  const selected_stack = (formData.technologies || []).map(
    (tech) => tech.value
  );
  axios
    .post(
      URL + "/projects",
      {
        name: formData.name,
        description: formData.description,
        selected_stack,
        summary: formData.summary,
      },
      { headers: { Authorization: `Bearer ${token}` } }
    )
    .then((response) => {
      const project = response.data[0];
      handleProjectCreated(project);
    })
    .catch((error) => {
      console.log(error);
    });
};

const getTechStackOptions = () =>
  techStacks.map((tech) => (
    <Option key={tech} value={tech}>
      {tech}
    </Option>
  ));

const ProjectForm = (props) => {
  const [form] = Form.useForm();

  useEffect(() => {
    form.resetFields();
  }, [props.resetSwitch]);

  const [submitDisabled, setSubmitDisabled] = useState(false);

  const onFinish = (values) => {
    setSubmitDisabled(true);
    handleAddProject(values, props.handleProjectCreated);
  };

  const onFinishFailed = (errorInfo) => {}; // this function has to be defined

  return (
    <Form
      form={form}
      {...layout}
      name="basic"
      initialValues={{}}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      style={{ paddingTop: "50px", display: props.display }}
    >
      <Form.Item
        label="Project Name"
        name="name"
        rules={[
          {
            required: true,
            message: "Please input the name of the project!",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item label="Summary" name="summary" rules={[]}>
        <Input />
      </Form.Item>

      <Form.Item label="Description" name="description" rules={[]}>
        <Input.TextArea />
      </Form.Item>

      <Form.Item label="Technologies" name="technologies" rules={[]}>
        <Select mode="multiple" labelInValue style={{ width: 120 }}>
          {getTechStackOptions()}
        </Select>
      </Form.Item>
      <Form.Item {...tailLayout}>
        <Button type="secondary" onClick={() => form.resetFields()}>
          Cancel
        </Button>
      </Form.Item>
      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit" disabled={submitDisabled}>
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default ProjectForm;
