import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { login as authLogin } from 'app/services/auth.service'
import { login } from 'app/redux/slices/userSlice'
import { rgx_emailValidator } from 'app/helpers/helpers'
import { PATHS } from 'app/helpers/constants'
import Spinner from 'react-bootstrap/Spinner'
import './Login.route.css'

function Login() {
	const dispatch = useDispatch()

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm()

	const [loginState, setLoginState] = useState({
		loading: false,
		error: null,
	})

	const loginSubmit = ({ email, password }) => {
		setLoginState({ loading: true, error: null })

		authLogin(email, password)
			.then((response) => {
				dispatch(login(response))
			})
			.catch((error) => {
				setLoginState({ loading: false, error: error.message })
			})
	}

	return (
		<div className="Login">
			<section className="Login__body">
				<div className="Login__logo">
					{/* =============
						Logo
					*/}
					<a href={PATHS.home} className="Login__logo-link">
						{/* <img src={IMG_LOGO} alt="Game hub logo" /> */}
					</a>
				</div>

				{/* =============
					Title and description
				*/}
				<h1 className="Login__page-title">
					Login to your GameHub account
				</h1>

				{/* =============
					Submit error message
				*/}
				{loginState.error && (
					<p className="Login__submit-error">{loginState.error}</p>
				)}

				{/* =============
					Login form
				*/}
				<form
					noValidate
					onSubmit={handleSubmit((formData) => loginSubmit(formData))}
					className="Login__form"
				>
					<div className="Login__form-row">
						<label htmlFor="email">Email</label>

						<input
							type="email"
							id="email"
							placeholder="example@abc.xyz"
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
							className={`c-input ${
								errors.email ? 'c-input--withError' : ''
							}`}
						/>

						{errors.email && <p>{errors.email.message}</p>}
					</div>

					<div className="Login__form-row">
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

					<button
						type="submit"
						disabled={loginState.loading}
						className="btn c-btn-primary Login__submit-btn"
					>
						{loginState.loading && (
							<Spinner
								animation="border"
								variant="light"
								size="sm"
								className="me-2"
							/>
						)}
						Login
					</button>
				</form>

				{/* =============
					Account creation link
				*/}
				<p className="Login__signUp-line">
					<span>Don't have an account?</span>
					<Link to={PATHS.signUp}>Sign up</Link>
				</p>
			</section>
		</div>
	)
}

export default Login
