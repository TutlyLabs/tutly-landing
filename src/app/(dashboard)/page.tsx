import Testimonials from "../_componants/Testimonials/Testimonial";
import Courses from "../_componants/courses";
import PageFlip from "../_componants/features/features";
import Home from "../_componants/home";


export default function Page() {
  return (
    <div>
      <Home/>
      <Courses/>
      <PageFlip/>
      <Testimonials/>
    </div>
  );
}
