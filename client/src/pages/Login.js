import React from 'react';

import { Link as LinkR } from 'react-router-dom';

import {
	Box,
	Paper,
	Container,
	Typography,
	TextField,
	Button,
	CssBaseline,
	Grid,
	Link,
} from '@mui/material';

import { createTheme, ThemeProvider } from '@mui/material/styles';

const Login = () => {
	const handleSubmit = (e) => {
		e.preventDefault();
		console.log('Form Submit');
	};

	const darkTheme = createTheme({
		palette: {
			mode: 'dark',
		},
	});

	return (
		<ThemeProvider theme={darkTheme}>
			<CssBaseline />
			<Container fixed maxWidth='xs'>
				<Box
					sx={{
						height: '100vh',
						width: '100%',
						flexDirection: 'column',
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
					}}
				>
					<Typography variant='h2' component='h1' gutterBottom>
						Bug Tracker
					</Typography>
					<Paper sx={{ p: 4 }}>
						<Box
							sx={{
								display: 'flex',
								flexDirection: 'column',
								alignItems: 'center',
							}}
						>
							<Typography variant='h4' component='h2' gutterBottom>
								Sign in
							</Typography>
							<Box
								component='form'
								onSubmit={handleSubmit}
								noValidate
							>
								<TextField
									margin='normal'
									required
									id='email'
									label='Email Address'
									name='email'
									autoComplete='email'
									autoFocus
									fullWidth
								/>
								<TextField
									margin='normal'
									required
									id='password'
									label='Password'
									type='password'
									name='password'
									autoComplete='current-password'
									fullWidth
								/>
								<Button
									type='submit'
									fullWidth
									variant='contained'
									sx={{ mt: 3, mb: 2 }}
								>
									Sign In
								</Button>
								<Grid container>
									{/* 
                  TODO: Add forgotten password feature to the backend and frontend
                  <Grid item xs>
										<Link href='#' variant='body2'>
											Forgot password?
										</Link>
									</Grid> 
                  */}
									<Grid item>
										<Typography variant='body2'>
											Don't have an account?{' '}
											<Link
												component={LinkR}
												to='/register'
												variant='body2'
											>
												{'Register'}
											</Link>
										</Typography>
									</Grid>
								</Grid>
							</Box>
						</Box>
					</Paper>
				</Box>
			</Container>
		</ThemeProvider>
	);
};

export default Login;
