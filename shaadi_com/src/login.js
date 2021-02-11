import React from 'react';
import Router from 'react-router-dom'
import {withRouter} from 'react-router'

 import {Formik,Form,Field} from 'formik'
 import * as Yup from 'yup' ;
const LoginSchema=Yup.object().shape({
    username:Yup.string()
    .min(2,'too short')
    .max(50,'too long')
    .required('required'),
    password:Yup.string()
    .min(2,'too short')
    .max(25,'too long')
    .required('required')
  })

class Login extends React.Component{
    state={
        username:"",
        password:""
    }

   onSubmit(){


alert("login success")
   }
   
      
    render(){
      return( <div className="container">
      
      <div className="row">
          <div className="col-4"></div>
          <div className="col-4">Welcome back! Please Login</div>
         <div className="col-4"></div>
      </div>
      <div className="row">
          <div className="col-4"></div>
          <div className="col-4">
                <Formik initialValues={{
                  username:"",
                  password:"",
                }}
                onSubmit={this.onSubmit}
                
                validationSchema={LoginSchema}
                >
                {({errors})=>(
                  <Form>
                    <Field name="username" placeholder="Enter Mobile nO./Email ID"/>
                {errors.username?<div>{errors.username}</div>:null}
                    <Field name="password" type="password" placeholder="Enter Password"/>
                    {errors.password?<div>{errors.password}</div>:null}
                     <button type="submit" id="button" onClick={onsubmit}>submit</button> 
                   
                  </Form>
                )}
               
                

                </Formik>
          </div>
          <div className="col-4"></div>
          
      </div>





  </div>)
  }




  }
  export default Login;