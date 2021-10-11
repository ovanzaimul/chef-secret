import React, { useState } from 'react';
import { Avatar, Badge, Card, CardHeader, createSvgIcon, IconButton, Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const BookmarkIcon = createSvgIcon(
  <path
    d='M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z
'
  />,
  'Bookmark'
);

const Bookmark = ({ bookmarks }) => {
  const [open, setOpen] = useState(false);

  const renderBookmarkLists = () => {
    if (bookmarks && bookmarks.length > 0) {
      return bookmarks.map((bookmark) => (
        <Link key={bookmark.id} to={`/${bookmark.id}`}>
          <Card sx={{ bgcolor: 'primary.light', marginTop: '5px' }}>
            <CardHeader
              avatar={<Avatar src={bookmark.image_url} />}
              title={bookmark.title}
              subheader={bookmark.publisher}
            />
          </Card>
        </Link>
      ));
    } else {
      return (
        <Card sx={{ bgcolor: 'primary.light' }}>
          <CardHeader
            title={
              <Typography variant='h6' color='secondary.main'>
                No bookmarks yet.
              </Typography>
            }
            subheader={
              <Typography color='secondary.main' variant='body2'>
                Find your favorite recipes and bookmark it :)
              </Typography>
            }
          />
        </Card>
      );
    }
  };

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', fontWeight: '700', position: 'relative' }}>
      <IconButton
        onClick={() => {
          setOpen(!open);
        }}
        size='large'
        aria-label='show 4 new mails'
      >
        <Badge badgeContent={bookmarks?.length} color='error'>
          <BookmarkIcon color='primary.light' />
        </Badge>
        <Typography color='secondary.main' sx={{ fontWeight: 500, marginLeft: '8px' }}>
          Bookmarks
        </Typography>
      </IconButton>
      <Paper
        sx={{
          position: 'absolute',
          top: '100%',
          left: '-70%',
          zIndex: '10',
          maxHeight: '500px',
          width: '250px',
          // maxWidth: '500px',
          overFlowY: 'auto',
          // bgcolor: '#ff5722',
          bgcolor: 'transparent',
        }}
      >
        {open && renderBookmarkLists()}
      </Paper>
    </Box>
  );
};

const mapStateToProps = (state) => {
  return { bookmarks: state.bookmarks };
};

export default connect(mapStateToProps)(Bookmark);
