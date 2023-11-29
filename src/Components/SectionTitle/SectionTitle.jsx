/* eslint-disable react/prop-types */



import { Typography, Grid } from '@mui/material';

const SectionTitle = ({ heading, subHeading }) => {
  return (
    <Grid container justifyContent="center" alignItems="center" textAlign="center" sx={{ margin: 'auto' }}>
      <Grid item xs={12} md={6}>
        <Typography variant="subtitle1" sx={{ color: '#D97706',borderBottom: '4px solid #D0D0D0', marginBottom: '8px' }}>
          --- {subHeading} ---
        </Typography>
        <Typography variant="h3" sx={{ fontSize: '2rem', textTransform: 'uppercase', borderBottom: '4px solid #D0D0D0', padding: '16px',marginBottom: '8px' }}>
          {heading}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default SectionTitle;

