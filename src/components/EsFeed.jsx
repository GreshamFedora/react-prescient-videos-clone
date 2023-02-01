import {useState, useEffect} from 'react';
import { Box, Stack, Typography } from '@mui/material';

import { Sidebar, Videos} from './';
import { fetchFromAPI } from '../utils/fetchFromAPI';

const EsFeed = () => {

  const [selectedEsCategory, setSelectedEsCategory] = useState('Spanish Songs');
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    

    fetchFromAPI(`search?part=snippet&q=${selectedEsCategory}`)
      .then((data) => setVideos(data.items))
  }, [selectedEsCategory]);
 
  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box sx={{ height: { sx: 'auto', md:'92vh' }, borderRight: '1px solid #3d3d3d', px: { sx: 0, md:2 }}}>
        <Sidebar 
          selectedEsCategory={selectedEsCategory}
          setSelectedEsCategory={setSelectedEsCategory}
        />

        <Typography className="copyright" variant="body2" sx={{ mt: 1.5, color: '#fff', }}>
          Copyright © 2023 Prescientiously Media 4 All

        </Typography>
      </Box>       


      <Box p={2} sx={{ overflowY: 'auto', height: '90vh', flex: 2}}>
        <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: 'white' }}>
          {selectedEsCategory} <span style={{ color: "#FC1503" }}>videos</span>
        </Typography>
        <Videos videos={videos} />
      </Box>
    </Stack>
  )
}

export default EsFeed


