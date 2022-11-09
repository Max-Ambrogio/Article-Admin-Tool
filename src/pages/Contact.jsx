import React from "react";
import { useState } from "react";
import styled from "styled-components";


const Field = styled.div`
    display: flex;
    justify-content: centered;
    margin: 0.5rem 0px;

    >label{
        display: inline-block;
    }

    > span.error {
        display: inline-block;
        color: red;
    }
`

const REQUIRED = ['firstName', "Email"]

export default function Contact(props){

    // const [firstName, setFirstName] = useState('');
    // const [LastName, setLastName] = useState('');

    const [values, setValues] = useState({
        firstName: '',
        LastName: '',
        Email: '',
        Phone: '', 
        City: '',

        errors: {

        }
    })

    const validateValues = () => {
        const {errors} = values

        //error tracking way #1
        let hasAnyErrors = false
        Object.keys(values).forEach((name) => {
            if(REQUIRED.includes(name)){
                errors[name] =  !values[name]
                if(!values[name]){
                    hasAnyErrors = true
                }
            }
        })

        setValues({...values, errors})

        return hasAnyErrors
    }


    const handleSubmit = (evt) => {
        evt.preventDefault()
        validateValues()
        // #1
        // const hasAnyErrors = validateValues()

        // #2
        const hasAnyErrors = Object.values(values.errors).some((v) => v)
        
        if(hasAnyErrors){
            console.log("error")
            return;
        }


        console.log('saving data......')
    }

    const handleChange = (evt) => {
        console.log('handlechange', evt.target)

        const {name, value} = evt.target;
     

        setValues({
            ...values, 
            [name]: value
        })

    }

    const {firstName, LastName, Email, Phone, errors} = values

    return(
        <form onSubmit={handleSubmit}>
            <Field>
                <label>First Name</label>
                <input name="firstName" value={firstName} onChange={handleChange} /> 
                {errors.firstName && <span className="Error"> Required.</span>}
            </Field>
            <Field>
                <label>Last Name</label>
                <input name="LastName" value={LastName} onChange={handleChange} />
                {errors.LastName && <span className="Error"> Required.</span>}
            </Field>
            <Field>
                <label>Phone</label>
                <input name="Phone" value={Phone} onChange={handleChange} />
            </Field>
            <Field>
                <label>Email</label>
                <input name="Email" value={Email} onChange={handleChange} />
                {errors.Email && <span className="Error"> Required.</span>}
            </Field>

            <input type="submit"></input>
        </form>
    )
}