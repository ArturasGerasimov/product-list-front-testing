import React, { useEffect, useRef } from "react"
import * as Yup from "yup"
import { Formik, Field, Form, ErrorMessage } from "formik"
import { faPlus } from "@fortawesome/free-solid-svg-icons/faPlus"
import { faCheck } from "@fortawesome/free-solid-svg-icons/faCheck"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function AddItemForm(props) {
  const formikRef = useRef()

  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    props.handleSubmit(values.item)
    resetForm()
    setSubmitting(false)
  }

  const validationSchema = Yup.object().shape({
    item: Yup.string()
      .required("Input cannot be empty"),
  });

  const initialValues = {
    item: "",
  }

  const handleSubmitImage = () => {
    return typeof props.itemToEdit.index === "undefined"
      ? <FontAwesomeIcon icon={faPlus} />
      : <FontAwesomeIcon icon={faCheck} />
  }

  useEffect(() => {
    if (formikRef.current && props.itemToEdit.editItem) {
      formikRef.current.setFieldValue("item", props.itemToEdit.editItem.toString() || "", false)
    }
  }, [props.itemToEdit.editItem])

  return (
    <div className="item-form">
      <Formik
        innerRef={formikRef}
        validationSchema={validationSchema}
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validateOnChange={false}
        validateOnBlur={false}
      >
        <Form>
          <label htmlFor="item" />
          <Field id="item" name="item" placeholder="Add item to list" />
          <ErrorMessage name="item" component="span" id="message__error" />

          <button type="submit">
            { handleSubmitImage() }
          </button>
        </Form>
      </Formik>
    </div>
  )
}
