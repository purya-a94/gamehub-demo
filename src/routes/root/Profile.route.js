import React, { useState } from 'react'
// import { useSelector, useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
// import useFetch from 'app/hooks/useFetch'
import { rgx_emailValidator } from 'app/helpers/helpers'
// import { updateUserDetails } from 'app/services/user.service'
// import { storeUserDetails } from 'app/redux/slices/userSlice'
import { PATHS } from 'app/helpers/constants'
// import AsyncDataContainer from 'components/layouts/AsyncDataContainer'
import Spinner from 'components/spinner/Spinner'
import './Profile.route.scss'

function Profile() {
	// const dispatch = useDispatch()

	// const profileData = useSelector((state) => state.user.profileData)

	const [pageError, setPageError] = useState(null)
	const [submissionState, setSubmissionState] = useState({
		pending: false,
		result: null,
	})

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		defaultValues: {
			// username: profileData?.username || '',
			// firstname: profileData?.firstname || '',
			// lastname: profileData?.lastname || '',
			// email: profileData?.email || '',
			// gender: profileData?.gender || '',
			// age: profileData?.age || 1,
			username: '',
			firstname: '',
			lastname: '',
			age: 1,
			gender: '',
			email: '',
		},
	})

	const formSubmitHandler = (formValues) => {
		setPageError(null)
		setSubmissionState({
			pending: true,
			result: null,
		})

		// const formData = {
		// 	username: formValues.username,
		// 	firstname: formValues.firstname,
		// 	lastname: formValues.lastname,
		// 	age: formValues.age,
		// 	gender: formValues.gender,
		// 	email: formValues.email,
		// }

		// updateUserDetails(formData)
		// 	.then((response) => {
		// 		if (response === true) {
		// 			dispatch(storeUserDetails(formValues))

		// 			setSubmissionState({
		// 				pending: false,
		// 				result: 'Your profile was updated.',
		// 			})
		// 		}
		// 	})
		// 	.catch((error) => {
		// 		setSubmissionState({
		// 			pending: false,
		// 			result: null,
		// 		})
		// 		setPageError(error.message)
		// 	})
	}

	return (
		<div className="Profile">
			{/* =============
				Page header
			*/}
			<h1 className="Profile__page-header">Profile info</h1>

			{/* =============
				Error message
			*/}
			{pageError ? (
				<p className="Profile_page-error">{pageError}</p>
			) : (
				false
			)}

			{/* =============
				Page main content
			*/}

			{/* {profileData && ()} */}
			<form
				noValidate
				onSubmit={handleSubmit(formSubmitHandler)}
				className="row gy-3 Profile__form"
			>
				{/* =============
					Username
				*/}
				<div className="col-12 Profile__form-field">
					<label htmlFor="username">Username:</label>
					<input
						type="text"
						id="username"
						{...register('username', {
							required: {
								value: true,
								message: "Username can't be empty!",
							},
						})}
						className={`c-input ${
							errors.username ? 'c-input--withError' : ''
						}`}
					/>
				</div>

				{/* =============
					Firstname
				*/}
				<div className="col-12 Profile__form-field">
					<label htmlFor="firstname">Firstname:</label>
					<input
						type="text"
						id="firstname"
						{...register('firstname')}
						className={`c-input ${
							errors.firstname ? 'c-input--withError' : ''
						}`}
					/>
				</div>

				{/* =============
					Lastname
				*/}
				<div className="col-12 Profile__form-field">
					<label htmlFor="lastname">Lastname:</label>
					<input
						type="text"
						id="lastname"
						{...register('lastname')}
						className={`c-input ${
							errors.lastname ? 'c-input--withError' : ''
						}`}
					/>
				</div>

				{/* =============
					Age
				*/}
				<div className="col-12 Profile__form-field">
					<label htmlFor="age">Age:</label>
					<input
						type="number"
						id="age"
						min="1"
						max="120"
						{...register('age', {
							valueAsNumber: true,
							min: {
								value: 1,
								message:
									"You can't possibly be less than 1 years old!",
							},
							max: {
								value: 123,
								message: 'Weird value!',
							},
						})}
						className={`c-input ${
							errors.age ? 'c-input--withError' : ''
						}`}
					/>
				</div>

				{/* =============
					Gender
				*/}
				<div className="col-12 Profile__form-field">
					<label htmlFor="gender">Gender:</label>
					<select
						id="gender"
						{...register('gender')}
						className={`c-input ${
							errors.gender ? 'c-input--withError' : ''
						}`}
					>
						<option value="">Choose...</option>
						<option value={2}>Female</option>
						<option value={1}>Male</option>
						<option value={3}>Other</option>
					</select>
				</div>

				{/* =============
					Email
				*/}
				<div className="col-12 Profile__form-field">
					<label htmlFor="email">Email:</label>
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
								message: 'Invalid address!',
							},
						})}
						className={`c-input ${
							errors.email ? 'c-input--withError' : ''
						}`}
					/>
				</div>

				{/* =============
					Password
				*/}
				<div className="col-12 Profile__form-field">
					<label htmlFor="password">Password:</label>

					<input
						type="password"
						id="password"
						disabled
						value="PLACEHOLDER PASSWORD - NOTHING IMPORTANT"
						className={`c-input ${
							errors.password ? 'c-input--withError' : ''
						}`}
					/>

					<Link to={PATHS.changePassword} className="c-link-primary">
						Change password?
					</Link>
				</div>

				{/* =============
					Submit
				*/}
				<div className="col-12 d-flex justify-content-center px-3">
					<button
						type="submit"
						disabled={pageError || submissionState.pending}
						className="btn c-btn-primary Profile__submit-btn"
					>
						{submissionState.pending && (
							<Spinner
								height="17"
								width="17"
								color="var(--color-white)"
								strokeWidth="12px"
								className="me-2"
							/>
						)}
						Update
					</button>
				</div>

				{/* =============
					Submission result message
				*/}
				{submissionState.result && (
					<div className="d-flex justify-content-center justify-content-md-start pt-md-0 pt-3">
						<p className="text-success mb-0">
							{submissionState.result}
						</p>
					</div>
				)}
			</form>
		</div>
	)
}

export default Profile
