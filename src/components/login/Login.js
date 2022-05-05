import React from "react"

import { useState } from "react"
import { useAuth } from "../../context/AuthContext"
import { FcGoogle } from "react-icons/fc"

const Login = () => {
	const [signUpState, setSignUp] = useState( true )
	const [email, setEmail] = useState( "" )
	const [password, setPassword] = useState( "" )
	const [error, setError] = useState( false )

	const context = useAuth()

	const handleSubmitForm = ( e ) => {
		e.preventDefault()

		const { login, signUp, currentUser, setCurrentUser } = context

		signUp
			? signUp( email, password )
				.then( ( userCredential ) => {
					setCurrentUser( userCredential.user )
					console.log( currentUser )
				} )
				.catch( () => {
					setError( true )
				} )
			: login( email, password )
				.then( ( userCredential ) => {
					setCurrentUser( userCredential.user )
				} )
				.catch( () => {
					setError( true )
				} )
	}

	const handleForgotPassword = () => {}

	const renderErrorMessage = () => {
		if ( error ) {
			return (
				<span className="text-red-500 text-center text-xs font-style-italic">
          *Incorrect username or password
				</span>
			)
		}
	}

	const renderConfirmPassword = () => {
		if ( signUpState ) {
			return (
				<>
					<label className="block text-gray-700 text-sm font-bold mb-2">
            Please Confirm Password
					</label>
					<input
						className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2"
						type="password"
						placeholder="********"
						onChange={null}
					/>
				</>
			)
		}
	}

	const renderGoogleSignInButton = () => {
		const { loginWithGoogle } = context

		return (
			<button
				className="bg-white text-sm shadow-md flex py-2 px-4 rounded focus:outline-none focus:shadow-outline justify-center align-middle items-center mt-2"
				onClick={loginWithGoogle}
			>
				<span>Sign In with Google</span>
				<FcGoogle size="1.3em" className="ml-1" />
			</button>
		)
	}

	const renderSwitchToSignIn = () => (
		<p className="text-xs text-center opacity-70 mt-3">
      Dont have an account?
			<span
				className="text-blue-600 font-bold cursor-pointer hover:text-blue-700"
				onClick={() => setSignUp( !signUpState )}
			>
        Click here
			</span>
      to sign up!
		</p>
	)

	const renderForgotPassword = () => (
		<span
			onClick={handleForgotPassword}
			className="text-sm text-center mt-3 font-bold text-blue-700 cursor-pointer"
		>
      Forgot password?
		</span>
	)

	return (
		<div className="max-w-xs my-2 mx-auto">
			<form
				className="flex flex-col bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
				onSubmit={( e ) => handleSubmitForm( e )}
			>
				<label className="block text-gray-700 text-sm font-bold mb-2">
          Email
				</label>
				<input
					className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2 text-sm letter"
					type="text"
					onChange={( e ) => setEmail( e.target.value )}
					placeholder="ahmedmcgarry@hotmail.com"
				/>
				<label className="block text-gray-700 text-sm font-bold mb-2">
          Password
				</label>
				<input
					className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2"
					onChange={( e ) => setPassword( e.target.value )}
					type="password"
					placeholder="********"
				/>
				{renderConfirmPassword()}
				<button
					className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
					type="submit"
				>
          Submit
				</button>
				{renderGoogleSignInButton()}
				{renderErrorMessage()}
				{renderSwitchToSignIn()}
				{renderForgotPassword()}
			</form>
		</div>
	)
}

export default Login
