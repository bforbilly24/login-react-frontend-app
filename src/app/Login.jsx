import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { images, users } from '@/utils/constant';
import CardBackgroundCover from '@/components/card/card-background-cover';
import NotReadyResponsive from '@/components/miscellaneous/not-ready-responsive';

const Login = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [emailError, setEmailError] = useState('');
	const [submitError, setSubmitError] = useState('');
	const [passwordError, setPasswordError] = useState('');
	// Direct to Success page
	const navigate = useNavigate();
	// Show and Hide Password
	const [showPassword, setShowPassword] = useState(false);

	// Email Handler Required
	const handleEmailChange = (e) => {
		setEmail(e.target.value);
		if (e.target.value && !e.target.value.includes('@')) {
			setEmailError('Email must have @');
		} else {
			setEmailError('');
		}
	};

	// Disable Password Handler
	const handlePasswordChange = (e) => {
		setPassword(e.target.value);
	};

	// Error Handler for Email and Password incorrect
	const handleSubmit = (e) => {
		e.preventDefault();
		const user = users.find((user) => user.email === email);
		if (!user) {
			setSubmitError('Make sure your email is correct. 3 failed login attempts, your account will be disabled');
		} else if (user.password !== password) {
			setPasswordError('Password incorrect');
		} else {
			setEmailError('');
			setPasswordError('');
			setSubmitError('');
			navigate('/success');
		}
	};

	return (
		<>
			<div className='hidden h-screen w-full overflow-hidden xl:grid   xl:grid-cols-2'>
				{/* Component CardBackgroundCover */}
				<CardBackgroundCover />
				<div className='relative flex items-center justify-start bg-white'>
					<div className='mx-login-157.5 flex w-full flex-col items-start justify-center gap-y-login-25'>
						<div className='flex w-full flex-col gap-y-login-11'>
							<h3 className='align-middle text-login-26 font-semibold leading-login-26 tracking-login-2'>Login</h3>
							<p className='align-middle text-sm font-semibold leading-login-14 text-grey-primary'>Please log in to start using HRIS</p>
						</div>

						{/* Form Login */}
						<form className='w-full space-y-login-25' onSubmit={handleSubmit}>
							<div className='flex flex-col gap-y-login-10'>
								<div className={`relative flex h-12 items-center rounded-md border text-sm ${emailError ? 'border-red-primary' : 'border-blue-primary'} `}>
									<div className='relative mx-4 h-7 w-full'>
										<input
											autoComplete='off'
											id='email'
											name='email'
											type='text'
											className='peer mt-1 h-7 w-full bg-transparent text-login-14 font-semibold text-black-primary placeholder-transparent focus:mt-1 focus:outline-none'
											placeholder='Email'
											value={email}
											onChange={handleEmailChange}
										/>
										<label
											htmlFor='email'
											className='absolute -top-1.5 left-0 text-login-10 font-medium text-grey-primary transition-all peer-placeholder-shown:top-0.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-grey-primary peer-focus:-top-1.5 peer-focus:text-login-10 peer-focus:font-semibold peer-focus:text-grey-primary'
										>
											Email
										</label>
									</div>
								</div>
								{emailError && <p className='text-login-13 font-normal text-red-primary'>{emailError}</p>}
							</div>
							{/* Password */}
							<div className='flex flex-col gap-y-login-10'>
								<div className={`relative flex h-12 items-center rounded-md border text-sm ${passwordError ? 'border-red-primary' : 'border-blue-primary'}`}>
									<div className='relative mx-4 h-7 w-full'>
										<input
											autoComplete='off'
											id='password'
											name='password'
											type={showPassword ? 'text' : 'password'}
											className='peer mt-2 h-7 w-full bg-transparent text-login-14 font-semibold text-black-primary placeholder-transparent focus:mt-2 focus:outline-none'
											placeholder='Password'
											value={password}
											onChange={handlePasswordChange}
											disabled={emailError}
										/>
										<label
											htmlFor='password'
											className='absolute -top-1.5 left-0 text-login-10 font-medium text-grey-primary transition-all peer-placeholder-shown:top-0.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-grey-primary peer-focus:-top-1.5 peer-focus:text-login-10 peer-focus:font-semibold peer-focus:text-grey-primary'
										>
											Password
										</label>
										{showPassword ? (
											<img src={images[1].path} alt={images[1].alt} srcSet={images[1].srcset} className='absolute right-4 top-0.5 h-6 w-6 cursor-pointer' onClick={() => setShowPassword(false)} /> // modify this line
										) : (
											<img src={images[2].path} alt={images[2].alt} srcSet={images[2].srcset} className='absolute right-4 top-0.5 h-6 w-6 cursor-pointer' onClick={() => setShowPassword(true)} /> // modify this line
										)}
									</div>
								</div>
								{passwordError && <p className='text-login-13 font-normal text-red-primary'>{passwordError}</p>}
							</div>

							<div className='inline-flex items-center gap-x-login-10'>
								<label className='relative flex cursor-pointer items-center rounded-lg' htmlFor='customStyle'>
									<input
										type='checkbox'
										className="before:content[''] peer relative h-8 w-8 cursor-pointer appearance-none rounded-lg border border-grey-teritary bg-grey-teritary transition-all before:absolute before:left-2/4 before:top-2/4 before:block before:h-12 before:w-12 before:-translate-x-2/4 before:-translate-y-2/4 before:rounded-lg before:bg-blue-500 before:opacity-0 before:transition-opacity checked:border-grey-teritary checked:bg-blue-secondary checked:before:bg-blue-secondary hover:scale-105 hover:before:opacity-0"
										id='customStyle'
									/>
									<span className='pointer-events-none absolute left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100'>
										<svg xmlns='http://www.w3.org/2000/svg' className='h-3.5 w-3.5' viewBox='0 0 20 20' fill='currentColor' stroke='currentColor'>
											<path d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'></path>
										</svg>
									</span>
								</label>
								<p className='text-sm font-medium text-grey-secondary'>Remember me</p>
							</div>

							{/* Button Login */}
							<button type='submit' className='h-12 w-full rounded-lg bg-blue-secondary text-sm font-medium leading-5 text-white  hover:bg-blue-primary focus:outline-none'>
								Login
							</button>
						</form>
						{/* Error Handling for Wrong Email or Password */}
						{submitError && <p className='w-login-324 text-login-13 font-normal text-red-primary'>{submitError}</p>}
					</div>
				</div>
			</div>
			<NotReadyResponsive />
		</>
	);
};

export default Login;
