import * as React from 'react';
import Grid from '@mui/material/Grid2';
import Box from '@mui/material/Box';
import PostCardList from '../PostCardList/PostCardList';
import UserList from '../UserList/UserList'



export default function RowAndColumnSpacing() {
  return (
    <Box display={"flex"} justifyContent={"space-around"} sx={{ width: '100%', mt: '3rem' }}>
      <Grid container alignItems={"start"} justifyContent={"center"} spacing={2}>
        <Grid size={{  md: 6 }}>
          <UserList />
          {/* for users profile  */}
        </Grid>
        <Grid
          container
          alignItems={"center"}
          justifyContent={'center'}
          direction={"column"}
          size={{ md: 6 }}>
          <PostCardList />
          {/* for post  */}
        </Grid>
      </Grid>
    </Box>
  );
}