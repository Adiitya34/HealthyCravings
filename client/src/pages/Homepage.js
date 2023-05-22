import { Box, Card, Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import InfoIcon from '@mui/icons-material/Info';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import QueryStatsIcon from '@mui/icons-material/QueryStats';

const Homepage = () => {
  const navigate = useNavigate();

  const cardStyle = {
    boxShadow: 2,
    borderRadius: 5,
    height: 200,
    width: 300,
    margin: 2,
    transition: "all 0.3s ease-in-out",
    "&:hover": {
      border: "2px solid",
      boxShadow: "none",
      borderColor: "primary.dark",
      cursor: "pointer",
      transform: "scale(1.03)",
    },
  };

  return (
    <Box display="flex" flexDirection="row" flexWrap="wrap" justifyContent="center">
      <Box p={2}>
        <Typography variant="h4" mb={2} fontWeight="bold">
          Search By Prompt
        </Typography>
        <Card
          onClick={() => navigate("/chatbot")}
          sx={{ ...cardStyle }}
        >
          < QueryStatsIcon
            sx={{ fontSize: 80, color: "primary.main", mt: 2, ml: 2 }}
          />
          <Stack p={3} pt={0}>
            <Typography fontWeight="bold" variant="h5">
              Using Prompt
            </Typography>
            <Typography variant="h6">Search by prompt</Typography>
          </Stack>
        </Card>
      </Box>

      <Box p={2}>
        <Typography variant="h4" mb={2} fontWeight="bold" textAlign="center">
          Nutri_Info
        </Typography>
        <Card
          onClick={() => navigate("/Paragraph")}
          sx={{ ...cardStyle }}
        >
          <InfoIcon
            sx={{ fontSize: 80, color: "primary.main", mt: 2, ml: 2}}
          />
          <Stack p={3} pt={0}>
            <Typography fontWeight="bold" variant="h5">
              Detailed Tailored Nutrients Information
            </Typography>
            <Typography variant="h6">
              Nutrients And MicroNutrients Information
            </Typography>
          </Stack>
        </Card>
      </Box>

      <Box p={2}>
        <Typography variant="h4" mb={2} fontWeight="bold" textAlign="center">
        Recipe By Ingredients
        </Typography>
        <Card
          onClick={() => navigate("/summary")}
          sx={{
            ...cardStyle,
          }}
        >
          <RestaurantIcon
            sx={{ fontSize: 80, color: "primary.main", mt: 2, ml: 2 }}
          />
          <Stack p={3} pt={0}>
            <Typography fontWeight="bold" variant="h5">
            Cook with what's available.
            </Typography>
            <Typography variant="h6">
            "Get recipe suggestions by entering ingredients. Try now!"
            </Typography>
          </Stack>
        </Card>
      </Box>
    </Box>
  );
};

export default Homepage;
