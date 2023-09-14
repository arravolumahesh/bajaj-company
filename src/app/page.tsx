import EnhancedSwiper from "@cc/enhanced-swiper";
import { LargeImageCard } from "@cc/cards/largeImageCard";
import MLink from "@cc/m-link";

const HomePage = () => {
  return (
    <div>
      <MLink href={"/"} variant={"outlined"}>
        Home Page
      </MLink>
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
