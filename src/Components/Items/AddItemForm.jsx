import React from "react"
import * as Yup from "yup"
import {Formik, Field, Form, ErrorMessage} from "formik"
import { faPlus } from "@fortawesome/free-solid-svg-icons/faPlus"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function AddItemForm(props) {

  const handleSubmit = (e, { setSubmitting, resetForm }) => {
    props.handleSubmit(e.item)
    resetForm();
    setSubmitting(false);
  }

  const validationSchema = Yup.object().shape({
    item: Yup.string(),
  })

  const initialValues = {
    item: "",
  }

  return (
    <div className="item-form">
      <Formik
        validationSchema={validationSchema}
        initialValues={initialValues}
        onSubmit={handleSubmit}
      >
        <Form>
          <label htmlFor="item" />
          <Field id="item" name="item" placeholder="Add item to list" />
          <ErrorMessage name="item" component="span" />

          <button type="submit">
            <FontAwesomeIcon  icon={faPlus}/>
          </button>
        </Form>
      </Formik>
    </div>
  )
}