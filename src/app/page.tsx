import { Button } from "@mui/material";
import EnhancedSwiper from "@cc/enhanced-swiper";
import { CaseStudyCard } from "@/commonComponents/cards/caseStudyCard";
import { BlogPostCard } from "@/commonComponents/cards/blogPostCard";
import { LargeImageCard } from "@/commonComponents/cards/largeImageCard";

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
