import * as React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import PostCardList from '../PostCardList/PostCardList';
import UserList from '../UserList/UserList';

export default function RowAndColumnSpacing() {
  return (
    <Box sx={{ width: '100%', mt: '3rem' }}>
      <Grid container justifyContent="center" rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {/* UserList on the side */}
        <Grid item md={3} sm={3} xs={12}>
          <UserList />
        </Grid>
        
        {/* PostCardList in the middle */}
        <Grid item md={5} sm={9} xs={12}>
          <PostCardList />
        </Grid>
      </Grid>
    </Box>
  );
}
