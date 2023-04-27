import { Form, Formik, Field } from "formik";

export const Searchbar = ({ onSubmit }) => {
    const handelSubmit = (values, actions) => {
        onSubmit(values);
        actions.resetForm();
    }
    return (
      <Formik initialValues={{ title: '' }} onSubmit={handelSubmit}>
        <Form autoComplete="off">
          <button type="submit">Search</button>
          <label>
            <Field
              name="title"
              type="text"
              placeholder="Search images and photos"
            />
          </label>
        </Form>
      </Formik>
    );
};