import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid2';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import PostCard from '../PostCard';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));

export default function RowAndColumnSpacing() {
  return (
    <Box display={"flex"} justifyContent={"center"} sx={{ width: '100%', mt: '3rem' }}>
      <Grid container alignItems={"start"} justifyContent={"center"} spacing={2}>
        <Grid size={{ xs: 1, md: 3 }}>
          <Item>1</Item>
          {/* for users profile  */}
        </Grid>
        <Grid
          container
          alignItems={"center"}
          justifyContent={'center'}
          direction={"column"}
          size={{ xs: 11, md: 9 }}>
          <PostCard />
          {/* for post  */}
        </Grid>
      </Grid>
    </Box>
  );
}