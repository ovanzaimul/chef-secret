import { Badge, createSvgIcon, IconButton, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const BookmarkIcon = createSvgIcon(
  <path
    d='M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z
'
  />,
  'Bookmark'
);

const Bookmark = () => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', fontWeight: '700' }}>
      <IconButton size='large' aria-label='show 4 new mails'>
        <Badge badgeContent={4} color='error'>
          <BookmarkIcon color='primary.light' />
        </Badge>
      </IconButton>
      <Typography color='secondary.main' sx={{ fontWeight: 500 }}>
        Bookmarks
      </Typography>
    </Box>
  );
};

export default Bookmark;
