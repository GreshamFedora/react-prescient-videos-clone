import { Stack } from "@mui/material";

import { esCategories } from "../utils/constants";

const EsSidebar = ({ selectedCategory, setSelectedCategory }) => (
    <Stack
        direction="row"
        sx={{
            overflowY: 'auto',
            height: { sx: 'auto', md: '95%' },
            flexDirection: { md: 'column' },
        }}
    >
        {esCategories.map((category) => (
            <button
                onClick={() => setSelectedCategory(category.searchTerms)}
                className="category-btn"
                style={{
                background: category.searchTerms === selectedCategory && '#FC1503', color: 'white'
            }}
            key={category.name}
            >
                <span style={{ color: category.name === selectedCategory ? 'white' : 'red', marginRight: '15px'}}>{category.icon}</span>
                <span style={{ opacity: category.name === selectedCategory ? '1' : '0.8' }}>{category.name}</span>
            </button>
        ))}
    </Stack>
)


export default EsSidebar