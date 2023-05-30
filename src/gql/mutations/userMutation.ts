import { gql, useMutation } from '@apollo/client';

export const signUpMutation = gql`
    mutation createUser($info:UserSignUpInputs!) {
        signUpUser(data:$info){
            status
            message
        }
    }`;


export const loginMutation = gql`
    mutation loginUser($info:UserLoginInputs!) {
        loginUser(data:$info){
            status
            message
            token
            user {
                _id
                name
                email
                phone
                image
                gender
                role
                accountStatus
                currentAddress
                permanentAddress
                dateOfBirth
                createdAt
                updatedAt
            }
        }
    }`;