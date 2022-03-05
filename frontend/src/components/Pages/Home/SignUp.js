import React from 'react'

import {Formik,Form,Field, ErrorMessage} from "formik"
import { useEffect,useState } from 'react';

import axios from 'axios';

import {useNavigate} from 'react-router-dom';

import * as Yup from 'yup';


import {toast,ToastContainer,Zoom,Bounce} from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';


function refreshPage() {
    window.location.reload();
  }

function SignUp() {
    const initialValues={
        first_name:"",
        username:"",
        email:"",
        phone_no:"",
        password:"",
       
    }

    const [isLoading,setLoading]=useState(false);

    const validationSchema=Yup.object().shape({
        username: Yup.string().min(3).max(10).required(),
        first_name: Yup.string().min(3).max(20).required(),
        email:Yup.string().email('Invalid email format').required('Required'),

        phone_no: Yup.string().min(10).max(15).required(),
        password: Yup.string().min(3).max(8).required(),

    })

    const  onSubmit = (data) => {
        setLoading(true);

        axios.post("http://localhost:3001/users",data).then((response)=>{

            console.log("User IS IS",response.data.id);

      


            setTimeout(() => {
                setLoading(false);
                toast.info('Information Added successfully');
                refreshPage();  
            }, 3000);
         
        
           // navigate("/dashboard");
          
           
        })

    }
    return (
        <div>

       
     
        <div class="loginalert" id="register_message_area"></div>

      

        <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>

        <Form>
        
        <div className="loginrow">
        <ErrorMessage name="first_name" component="span" />
        <Field
        autoComplete="off"
        className="form-control"
        id="inputCreatePost"
        name="first_name"
        placeholder="Names"
        />
        </div>

        <div className="loginrow">
        <ErrorMessage name="username" component="span" />
                    <Field
                    autoComplete="off"
                    className="form-control"
                    id="inputCreatePost"
                    name="username"
                    placeholder="Username"
                    />
        </div>

        <div className="loginrow">
        <ErrorMessage name="email" component="span" />
        <Field
       
        autoComplete="off"
        id="inputCreatePost"
        className="form-control"
        name="email"
        placeholder="email"
        />
        </div>


        <div class="loginrow">
                      
        <ErrorMessage name="phone_no" component="span" />
                        <Field
                        autoComplete="off"
                        className="form-control"
                        id="inputCreatePost"
                        name="phone_no"
                        placeholder="eg.+1334625483"
                      />
                    </div>

        <div className="loginrow">
        <ErrorMessage name="password" component="span" />
        <Field
       
        autoComplete="off"
        className="form-control"
        id="inputCreatePost"
        type="password"
        name="password"
       
        />
        </div>

        <div class="acc_radio">
                  <input type="radio" name="acc_type" id="acctype0" value="1" checked required />
                  <div class="radiolabel" for="acctype0">I only want to book</div>
                  <br />
                  <input type="radio" name="acc_type" id="acctype1" value="0" required />
                  <div class="radiolabel" for="acctype1">I want to rent my property</div>
        </div>
                
                
  {!isLoading && <button type="submit" class="btn btn-primary btn-sm text">Sign Up</button>

  } 
  {isLoading &&
     <button type="submit" class="btn btn-primary btn-sm text" disabled> <i class="fas fa-spinner fa-spin"></i>Sign Up</button>
  }

               
                 <br /><br />

        </Form>

        </Formik>
        
         
      
        
            <ToastContainer />

            
        </div>
    )
}

export default SignUp
