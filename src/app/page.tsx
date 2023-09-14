import {Button} from "@mui/material";

const HomePage = () => {
  return (
    <div>
      <Button>Home Page</Button>

      <EnhancedSwiper
        SlideComponent={LargeImageCard}
        data={[
          { data: { title: "title", description: "description" } },
          {
            data: {
              title: "title",
              description: "description",
            },
          },
          { data: { title: "title", description: "description" } },
          {
            data: {
              title: "title",
              description: "description",
            },
          },
        ]}
      />
    </div>
  );
};

export default HomePage;
