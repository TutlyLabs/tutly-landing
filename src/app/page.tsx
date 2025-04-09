import { Home } from "@/components/Home";
import { Testimonials } from "@/components/Testimonials";
import { metadata } from "./layout";
import { FAQs } from "@/components/FAQs";

metadata.title = "Tutly";

export default function Page() {
  return (
    <div>
      <div id="home">
        <Home />
      </div>
      <div id="testimonials">
        <Testimonials />
      </div>
      <div id="faqs">
        <FAQs />
      </div>
    </div>
  );
}
