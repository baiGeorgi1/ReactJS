import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import { useForm } from "../hooks/useForm";

// Add name,value and onChange{} on form.Control

const AddModal = ({ onTodoAdd, showModal, onTodoClose }) => {
  //  with Custom Hook
  const { formValues, onChangeHandler, onSubmit } = useForm(
    {
      text: "",
    },
    onTodoAdd,
  );
  // Without custom hooks
  // const [formValues, setFormValues] = useState({
  //   text: "",
  // });
  // const onChangeHandler = (e) => {
  //   setFormValues((state) => ({ ...state, [e.target.name]: e.target.value }));
  // };

  // const submitForm = (e) => {
  //   e.preventDefault();
  //   console.log(formValues);
  // };
  return (
    <>
      <Modal show={showModal} onHide={onTodoClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Todo</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form onSubmit={onSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>ToDo</Form.Label>
              <Form.Control
                type="text"
                name="text"
                placeholder="...todo"
                value={formValues.text}
                onChange={onChangeHandler}
              />
            </Form.Group>{" "}
            <Button
              style={{ marginRight: "10px" }}
              variant="primary"
              type="submit"
            >
              Submit
            </Button>
            <Button variant="secondary" onClick={onTodoClose}>
              Close
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};
export default AddModal;
