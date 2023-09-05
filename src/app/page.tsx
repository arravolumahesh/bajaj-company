import {Button} from "@mui/material";
import EnhancedSwiper, {EnhancedSwiperCard} from "@cc/enhanced-swiper";

const HomePage = () => {
    return (
        <div>
            <Button>Home Page</Button>

            <EnhancedSwiper
                SlideComponent={EnhancedSwiperCard}
                data={[{data: {title: "title", description: "description"}}, {
                    data: {
                        title: "title",
                        description: "description"
                    }
                }, {data: {title: "title", description: "description"}}, {
                    data: {
                        title: "title",
                        description: "description"
                    }
                }]}
            />
        </div>
    );
};

export default HomePage;
