import {
	Button,
	Card,
	CardContent,
	CardMedia,
	CircularProgress,
	createSvgIcon,
	IconButton,
	Typography,
} from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchRecipe, addBookmark, deleteBookmark } from '../actions';

const WarningIcon = createSvgIcon(
	<path
		d='M4.47 21h15.06c1.54 0 2.5-1.67 1.73-3L13.73 4.99c-.77-1.33-2.69-1.33-3.46 0L2.74 18c-.77 1.33.19 3 1.73 3zM12 14c-.55 0-1-.45-1-1v-2c0-.55.45-1 1-1s1 .45 1 1v2c0 .55-.45 1-1 1zm1 4h-2v-2h2v2z
'
	/>,
	'Warning'
);

const ArrowIcon = createSvgIcon(
	<path
		d='M5 13h11.17l-4.88 4.88c-.39.39-.39 1.03 0 1.42.39.39 1.02.39 1.41 0l6.59-6.59c.39-.39.39-1.02 0-1.41l-6.58-6.6a.9959.9959 0 0 0-1.41 0c-.39.39-.39 1.02 0 1.41L16.17 11H5c-.55 0-1 .45-1 1s.45 1 1 1z
'
	/>,
	'Warning'
);

const ClockIcon = createSvgIcon(
	<path
		d='M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm-.22-13h-.06c-.4 0-.72.32-.72.72v4.72c0 .35.18.68.49.86l4.15 2.49c.34.2.78.1.98-.24.21-.34.1-.79-.25-.99l-3.87-2.3V7.72c0-.4-.32-.72-.72-.72z
'
	/>,
	'Clock'
);
const PersonIcon = createSvgIcon(
	<path
		d='M16.67 13.13C18.04 14.06 19 15.32 19 17v3h4v-3c0-2.18-3.57-3.47-6.33-3.87zM15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4c-.47 0-.91.1-1.33.24C14.5 5.27 15 6.58 15 8s-.5 2.73-1.33 3.76c.42.14.86.24 1.33.24zm-6 0c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm0 7c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4zm6 5H3v-.99C3.2 16.29 6.3 15 9 15s5.8 1.29 6 2v1z
'
	/>,
	'Clock'
);
const CheckIcon = createSvgIcon(
	<path
		d='M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z
'
	/>,
	'Check'
);

const AddBookmarkIcon = createSvgIcon(
	<path
		d='M21 7h-2v2h-2V7h-2V5h2V3h2v2h2v2zm-2 14-7-3-7 3V5c0-1.1.9-2 2-2h7c-.63.84-1 1.87-1 3 0 2.76 2.24 5 5 5 .34 0 .68-.03 1-.1V21z
'
	/>,
	'Bookmark'
);

const DeleteBookmarkIcon = createSvgIcon(
	<path
		d='M21 7h-6V5h6v2zm-2 3.9c-.32.07-.66.1-1 .1-2.76 0-5-2.24-5-5 0-1.13.37-2.16 1-3H7c-1.1 0-2 .9-2 2v16l7-3 7 3V10.9z
'
	/>,
	'Bookmark'
);

const RecipePage = ({
	match,
	fetchRecipe,
	selectedRecipe,
	addBookmark,
	deleteBookmark,
	bookmarks,
}) => {
	let recipeId = match.params.id;

	useEffect(() => {
		fetchRecipe(recipeId);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [recipeId]);

	useEffect(() => {
		localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
	}, [bookmarks]);

	const handleBookmark = recipe => {
		if (recipe) {
			if (bookmarks.some(bookmark => bookmark.id === recipe.id)) {
				deleteBookmark(recipe);
			} else {
				addBookmark(recipe);
			}
		}
	};

	const renderIngredients = () => {
		if (selectedRecipe) {
			return selectedRecipe.ingredients.map((ing, index) => {
				return (
					<Typography
						key={index}
						variant='h6'
						color='secondary.main'
						sx={{
							color: 'secondary.dark',
							display: 'flex',
							alignItems: 'center',
						}}
						mb={2}
					>
						<CheckIcon color='primary' fontSize='large' />
						<Typography color='secondary.main'>
							{`${ing.quantity} ${ing.unit} ${ing.description} `}{' '}
						</Typography>
					</Typography>
				);
			});
		}
		return null;
	};

	// const renderLoader = () => {
	//   return (
	//     <Typography>
	//       Please wait....
	//       <br />
	//       Your Recipe is loading
	//     </Typography>
	//   );
	// };

	const renderRecipe = () => {
		if (selectedRecipe) {
			return (
				<Card sx={{ bgcolor: 'primary.light' }}>
					<CardMedia
						component='img'
						sx={{
							objectFit: 'cover',
							opacity: '0.6',
							width: '100%',
							height: '350px',
						}}
						image={selectedRecipe.image_url}
						alt='Paella dish'
					/>
					<CardContent>
						<Typography variant='h5' color='secondary.main'>
							{selectedRecipe.title.toUpperCase()}
						</Typography>
					</CardContent>
					<CardContent
						sx={{
							p: 2,
							marginTop: '10px',
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'space-around',
						}}
					>
						<Box
							gutterBottom
							sx={{
								color: 'secondary.dark',
								display: 'flex',
								alignItems: 'center',
							}}
						>
							<ClockIcon color='primary' fontSize='large' />
							<Typography color='secondary.main'>
								{selectedRecipe.cooking_time} MINUTES
							</Typography>
						</Box>

						<Box
							gutterBottom
							sx={{
								color: 'secondary.dark',
								display: 'flex',
								alignItems: 'center',
							}}
						>
							<PersonIcon color='primary' fontSize='large' />
							<Typography color='secondary.main'>
								{selectedRecipe.servings} SERVINGS
							</Typography>
						</Box>
						<IconButton
							onClick={() => handleBookmark(selectedRecipe)}
							size='large'
						>
							{bookmarks.some(bookmark => bookmark.id === selectedRecipe.id) ? (
								<DeleteBookmarkIcon color='primary' fontSize='large' />
							) : (
								<AddBookmarkIcon color='primary' fontSize='large' />
							)}
						</IconButton>
					</CardContent>

					<CardContent>
						<Typography variant='h6' color='secondary.main' mb={2}>
							RECIPE INGREDIENTS
						</Typography>
						<Box
							sx={{
								display: 'grid',
								gridTemplateColumns: '1fr 1fr',
								gap: '1rem 1.5rem',
								px: 3,
							}}
						>
							{renderIngredients()}
						</Box>
					</CardContent>
					<CardContent>
						<Typography variant='h6' color='secondary.main' mb={2}>
							HOW TO COOK IT
						</Typography>

						<Typography paragraph color='secondary.main'>
							This recipe was carefully designed and tested by{' '}
							<b>{selectedRecipe.publisher}</b>. Please check out directions at
							their website.
						</Typography>

						<Button
							target='_blank'
							variant='contained'
							rel='noopener'
							color='primary'
							endIcon={<ArrowIcon />}
							href={selectedRecipe.source_url}
						>
							DIRECTIONS
						</Button>
					</CardContent>
				</Card>
			);
		} else {
			return <CircularProgress color='secondary' />;
		}
	};

	return <div>{renderRecipe()}</div>;
};

const mapStateToProps = state => {
	return { selectedRecipe: state.recipe, bookmarks: state.bookmarks };
};

export default connect(mapStateToProps, {
	fetchRecipe,
	addBookmark,
	deleteBookmark,
})(RecipePage);

// <Typography>
//   <WarningIcon />
//   <br />
//   We could not find that recipe. Please try another one!
// </Typography>
