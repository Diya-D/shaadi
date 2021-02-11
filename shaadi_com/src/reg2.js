import React from 'react'
import './registration.css'
import Dialog from '@material-ui/core/Dialog';
import { Formik, Form, Field } from 'formik'
import { Link } from 'react-router-dom';



class Register2 extends React.Component {
    state = {
        fullname:"",
         dob:"",
          religion:"", 
          community:"",
           place:""

    }

    onfullnamechange = (event) => {
        this.setState({
            fullname: event.target.value
        })
    }
    ondobchange = (event) => {
        this.setState({
            dob: event.target.value
        })
    }
    onreligionchange = (event) => {
        this.setState({
            religion: event.target.value

        })
    }
    oncommunitychange = (event) => {
        this.setState({
            community: event.target.value

        })
    }
    onplacechange = (event) => {
        this.setState({
            place: event.target.value

        })
    }

    onSubmit = (event) => {
        event.preventDefault()
      alert("sign up sucess")
    }

    render() {
        return (
            <div className="container">
                <div className="box">
                    <div className="row" id="head">
                        <div className="col-3"></div>
                        <div className="col-6">Great! Now some basic details<br></br>
                        </div>
                        <div className="col-3"></div>
                    </div>
                    <div className="row">
                        <div className="col-3"></div>
                        <div className="col-6">
                            <Formik
                                initialValues={{
                                    fullname:"", dob:"", religion:"", community:"", place:""
                                }}
                                onSubmit={values => {
                                    alert("submit")
                                }}
                               
                            >
                    

                                    <Form>
                                        <div className="jumbotron">
                                            <div className="form-group">
                                                <label for="exampleInputEmail1">Enter Full name</label>
                                                <Field name="fullname" type="text" className="form-control" id="full name" aria-describedby="emailHelp" />


                                            </div>
                                            <div className="form-group">
                                                <label for="dob">DOB</label>
                                                <Field name="DOB" type="date" className="form-control" id="dob" />

                                            </div>
                                            <div className="form-group">
                                                <label for="religion">Religion</label>
                                                <Field name="religion" type="text" className="form-control" id="religion" />
                                                <div className="form-group">
                                                    <label for="community">community</label>
                                                    <Field name="community" type="text" className="form-control" id="community" />
                                                    <div className="form-group">
                                                        <label for="place">Place</label>
                                                        <Field name="place" type="text" className="form-control" id="place" />
                                                    </div>

                                                </div>



                                                <button type="submit" className="btn btn-primary" id="button">Sign Up</button><br></br>
                                                <small id="emailHelp" className="form-text text-muted">By signing up, you agree to our</small>
                                                <a href="">Terms</a>
                                            </div>
                                            </div>
                            </Form>
                        

                    </Formik>
                </div>
                            <div className="col-3"></div>

                        </div>

                    </div>



                </div>)
    }
}
export default Register2;