import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'
import { Link, useHistory } from 'react-router-dom'
import { signUp as authSignUp } from 'app/services/auth.service'
import { login } from 'app/redux/slices/userSlice'
import { rgx_emailValidator } from 'app/helpers/helpers'
import { PATHS } from 'app/helpers/constants'
import Spinner from 'react-bootstrap/Spinner'
import './SignUp.route.css'

function SignUp() {
	const dispatch = useDispatch()
	const history = useHistory()

	const [signUpState, setSignUpState] = useState({
		loading: false,
		error: null,
	})

	// const [isAgreed, setIsAgreed] = useState(false)

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm()

	const signUpSubmit = ({ email, password }) => {
		setSignUpState({ loading: true, error: null })

		authSignUp(email, password)
			.then((response) => {
				dispatch(login(response))

				history.push('/')
			})
			.catch((error) => {
				setSignUpState({ loading: false, error: error.message })
			})
	}

	return (
		<div className="SignUp">
			<section className="SignUp__body">
				<div className="SignUp__logo">
					{/* =============
						Logo
					*/}
					<a href={PATHS.home} className="SignUp__logo-link">
						{/* <img src={IMG_LOGO} alt="Game hub logo" /> */}
					</a>
				</div>

				{/* =============
					Title and description
				*/}
				<h1 className="SignUp__page-title">Sign up at GameHub</h1>

				{/* =============
					Submit error message
				*/}
				{signUpState.error && (
					<p className="SignUp__submit-error">{signUpState.error}</p>
				)}

				{/* =============
					Sign up form
				*/}
				<form
					noValidate
					onSubmit={handleSubmit((formData) =>
						signUpSubmit(formData)
					)}
					className="SignUp__form"
				>
					<div className="SignUp__form-row">
						<label htmlFor="email">Email</label>

						<input
							type="email"
							id="email"
							{...register('email', {
								required: {
									value: true,
									message: 'Required field.',
								},
								pattern: {
									value: rgx_emailValidator,
									message: 'Please enter a valid email.',
								},
							})}
							placeholder="example@abc.xyz"
							className={`c-input ${
								errors.email ? 'c-input--withError' : ''
							}`}
						/>

						{errors.email && <p>{errors.email.message}</p>}
					</div>

					<div className="SignUp__form-row">
						<label htmlFor="password">Password</label>

						<input
							type="password"
							id="password"
							{...register('password', {
								required: {
									value: true,
									message: 'Required field.',
								},
							})}
							className={`c-input ${
								errors.password ? 'c-input--withError' : ''
							}`}
						/>

						{errors.password && <p>{errors.password.message}</p>}
					</div>

					{/* <div className="SignUp__form-agreement">
						<input
							type="checkbox"
							id="agreement"
							checked={isAgreed}
							onChange={(e) => setIsAgreed(e.target.checked)}
						/>

						<label htmlFor="agreement">
							<span>I have read the </span>
							<a href="#" className="c-link-primary">
								usage terms and conditions
							</a>
							<span> and agreed to them.</span>
						</label>
					</div> */}

					<button
						type="submit"
						// disabled={!isAgreed || signUpState.loading}
						disabled={signUpState.loading}
						className="btn c-btn-primary SignUp__submit-btn"
					>
						{signUpState.loading && (
							<Spinner
								animation="border"
								variant="light"
								size="sm"
								className="me-2"
							/>
						)}
						Sign up
					</button>
				</form>

				{/* =============
					Login link
				*/}
				<p className="SignUp__login-line">
					<span>Already have an account?</span>
					<Link to={PATHS.login}>Login</Link>
				</p>
			</section>
		</div>
	)
}

export default SignUp
