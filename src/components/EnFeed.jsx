import {useState, useEffect} from 'react';
import { Box, Stack, Typography } from '@mui/material';

import { EnSidebar, Videos} from './';
import { fetchFromAPI } from '../utils/fetchFromAPI';

const EnFeed = () => {

  const [selectedEnCategory, setSelectedEnCategory] = useState('English Songs');
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    

    fetchFromAPI(`search?part=snippet&q=${selectedEnCategory}`)
      .then((data) => setVideos(data.items))
  }, [selectedEnCategory]);
 
  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box sx={{ height: { sx: 'auto', md:'92vh' }, borderRight: '1px solid #3d3d3d', px: { sx: 0, md:2 }}}>
        <EnSidebar 
          selectedEnCategory={selectedEnCategory}
          setSelectedEnCategory={setSelectedEnCategory}
        />

        <Typography className="copyright" variant="body2" sx={{ mt: 1.5, color: '#fff', }}>
          Copyright © 2023 Prescientiously Media 4 All

        </Typography>
      </Box>       


      <Box p={2} sx={{ overflowY: 'auto', height: '90vh', flex: 2}}>
        <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: 'white' }}>
          {selectedEnCategory} <span style={{ color: "#FC1503" }}>videos</span>
        </Typography>
        <Videos videos={videos} />
      </Box>
    </Stack>
  )
}

export default EnFeed


