
import { useState } from "react";
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import './sign-up-form.styles.scss'
import Button from "../button/button.component";

const defaultFormFields={
    displayName:'',
    email:'',
    password: '',
    confirmPassword:''
}

const SignUpForm =()=>{

    const [formFields, setFormFields]=useState(defaultFormFields);
    const {displayName, email, password, confirmPassword}=formFields;
    

    const resetFormFields=()=>{
        setFormFields(defaultFormFields);
    }

    const handleSubmit= async (event)=>{
        event.preventDefault();
        if (password !== confirmPassword ){
            alert("passwords do not match")
            return; 
        }

        try{
            const {user} = await createAuthUserWithEmailAndPassword(
                email, 
                password
        );
        await createUserDocumentFromAuth(user, {displayName});
        resetFormFields();


        }catch(error){
            if(error.code=== 'auth/email-already-in-use'){
                alert('User Email already in Use')
            }else{
                console.log('user creation encountered an error', error);
            }
        }
    }
    const handleChange=(event)=>{
        const {name, value}=event.target;
        setFormFields({...formFields, [name]: value})
    };


    return (
        <div className="sign-up-container">
            <h1>Don't have an account? </h1>
            <span>Sign up with email and password</span>
            <form onSubmit={handleSubmit}>
            <FormInput 
                label="Display Name"
                type="text" 
                required 
                onChange={handleChange} 
                name='displayName' 
                value={displayName}
            />
            <FormInput 
                label="Email"
                type="email" 
                required 
                onChange={handleChange} 
                name='email' 
                value={displayName}
            />
            <FormInput 
                label="Password"
                type="password" 
                required 
                onChange={handleChange} 
                name='password' 
                value={displayName}
            />
            <FormInput 
                label="Confirm Password"
                type="password" 
                required 
                onChange={handleChange} 
                name='confirmPassword' 
                value={displayName}
            />
                 <Button type="submit">Sign Up</Button>
            </form>
        </div>
    )
}
export default SignUpForm;