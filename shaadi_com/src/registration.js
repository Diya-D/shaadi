import React from 'react'
import './registration.css'
import Dialog from '@material-ui/core/Dialog';
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'
import { Link } from 'react-router-dom';
import  Register2 from './reg2';
const RegisterSchema = Yup.object().shape({
    username: Yup.string()
        .min(2, 'too short')
        .max(50, 'too long')
        .required('required'),
    password: Yup.string()
        .min(2, 'too short')
        .max(25, 'too long')
        .required('required'),
    
       

})


class Register extends React.Component {
    state = {
        username: "",
        password: "",
        relation: ""

    }

    onUsernamechange = (event) => {
        this.setState({
            username: event.target.value
        })
    }
    onPasswordchange = (event) => {
        this.setState({
            password: event.target.value
        })
    }
    onrelationchange=(event)=>{
        this.setState({
            relation:event.target.value
            
        })
    }

    onSubmit = (event) => {
        event.preventDefault()
     
    }

    render() {
        return (
        <div className="container">
            <div className="box">
            <div className="row" id="head">
                <div className="col-3"></div>
                <div className="col-6">Let's set up your account, while<br></br>
we find Matches for you!</div>
                <div className="col-3"></div>
            </div>
            <div className="row">
                <div className="col-3"></div>
                <div className="col-6">
                    <Formik
                        initialValues={{
                            username: "",
                            password: "",
                            relation: ""
                        }}
                        onSubmit={values => {
                            <link to="/reg2"><Register2></Register2></link>
                           // alert("submit")
                        }}
                        validationSchema={RegisterSchema}
                    >
                        {({ errors }) => (

                            <Form>
                                <div className="jumbotron">
                                    <div className="form-group">
                                        <label for="exampleInputEmail1">Enter your email id</label>
                                        <Field name="username" type="text" className="form-control" id="uname" aria-describedby="emailHelp" />
                                        {errors.username ? <div>{errors.username}</div> : null}
                                
                                    </div>
                                    <div className="form-group">
                                        <label for="exampleInputPassword1">Create a password</label>
                                        <Field name="password" type="password" className="form-control"  id="pwd" />
                                        {errors.password ? <div>{errors.password}</div> : null}
                                    </div>
                                    <div className="form-group">
                                        <label for="exampleInputRelation">Create Profile for</label>
                                        <select name="relation">

                                            <option value="" placeholder="select">Select</option>
                                            <option value="">Self</option>
                                            <option value="">Son</option>
                                            <option value="">Daughter</option>
                                            <option value="">Friend</option>
                                            <option value="">Brother</option>
                                            <option value="">Sister</option>
                                            <option value="">Relative</option>
                                        </select>


                                        {errors.password ? <div>{errors.password}</div> : null}
                                    </div>



                                    <button type="submit" className="btn btn-primary" id="button">Next</button><br></br>
                                    <small id="emailHelp" className="form-text text-muted">Already a member?</small>
                                    <a href="/">Login</a>
                                </div>
                            </Form>
                        )}

                    </Formik>
                </div>
                <div className="col-3"></div>

            </div>

            </div>



        </div>)
    }
}
export default Register