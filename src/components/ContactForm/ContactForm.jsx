import { Formik, Form } from "formik"


export default function ContactForm({onAdd}) {

    return (
        <Formik initialValues={{}} onSubmit={onAdd}> 
            <Form>
                
</Form>
        </Formik>
    )
}