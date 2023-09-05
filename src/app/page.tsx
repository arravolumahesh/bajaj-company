import { Button } from "@mui/material";
import EnhancedSwiper, { EnhancedSwiperCard } from "@cc/enhanced-swiper";
import { SmallTitleCard } from "@/commonComponents/smallTitleCard";

const HomePage = () => {
  return (
    <div>
      <Button>Home Page</Button>

      <EnhancedSwiper
        SlideComponent={SmallTitleCard}
        data={[{ data: { title: "title", description: "description" } }]}
      />
    </div>
  );
};

export default HomePage;
