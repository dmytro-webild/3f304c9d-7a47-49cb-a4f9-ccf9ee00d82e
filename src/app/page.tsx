"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import FeatureBorderGlow from '@/components/sections/feature/featureBorderGlow/FeatureBorderGlow';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import SplitAbout from '@/components/sections/about/SplitAbout';
import TestimonialCardSixteen from '@/components/sections/testimonial/TestimonialCardSixteen';
import { Clock, Coffee, Wifi } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="directional-hover"
        defaultTextAnimation="entrance-slide"
        borderRadius="pill"
        contentWidth="medium"
        sizing="mediumSizeLargeTitles"
        background="fluid"
        cardStyle="subtle-shadow"
        primaryButtonStyle="diagonal-gradient"
        secondaryButtonStyle="layered"
        headingFontWeight="light"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleCentered
      navItems={[
        {
          name: "Home",
          id: "hero",
        },
        {
          name: "About",
          id: "about",
        },
        {
          name: "Menu",
          id: "products",
        },
        {
          name: "Reviews",
          id: "testimonials",
        },
        {
          name: "Contact",
          id: "contact",
        },
      ]}
      brandName="Talia Cafe / تاليا كافيه"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboard
      background={{
        variant: "gradient-bars",
      }}
      title="Welcome to Talia Cafe / تاليا كافيه"
      description="Experience the perfect cup of coffee in a relaxing and comfy atmosphere. Join us for a moment of peace."
      buttons={[
        {
          text: "Order Online",
          href: "#products",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/trendy-coffee-shop-city_53876-30213.jpg"
      imageAlt="Talia Cafe interior"
      mediaAnimation="slide-up"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/small-business-items-serving-coffee_23-2149458023.jpg",
          alt: "Small business items for serving coffee",
        },
        {
          src: "http://img.b2bpic.net/free-photo/coffee-cup-wooden-table-with-gradient-photo-style_53876-14314.jpg",
          alt: "Coffee cup on the wooden table with gradient photo style",
        },
        {
          src: "http://img.b2bpic.net/free-photo/sandwich-cup-coffee-table_53876-63270.jpg",
          alt: "Sandwich and a cup of coffee on a table",
        },
        {
          src: "http://img.b2bpic.net/free-photo/trendy-coffee-shop-city_53876-31124.jpg",
          alt: "Trendy coffee shop in the city",
        },
        {
          src: "http://img.b2bpic.net/free-photo/trendy-coffee-shop-city_53876-30213.jpg",
          alt: "Talia Cafe interior",
        },
      ]}
      marqueeItems={[
        {
          type: "text",
          text: "Premium Beans",
        },
        {
          type: "text",
          text: "Artisanal Brews",
        },
        {
          type: "text",
          text: "Fresh Pastries",
        },
        {
          type: "text",
          text: "Cozy Vibes",
        },
        {
          type: "text",
          text: "Riyadh Original",
        },
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <SplitAbout
      textboxLayout="split"
      useInvertedBackground={true}
      title="Our Passion for Coffee"
      description="At Talia Cafe, we believe that every cup tells a story. From ethically sourced beans to our artisanal brewing process, we ensure quality in every sip."
      bulletPoints={[
        {
          title: "Artisanal Coffee",
          description: "Hand-crafted by our expert baristas.",
        },
        {
          title: "Cozy Atmosphere",
          description: "The perfect spot for relaxation or work.",
        },
        {
          title: "Fresh Pastries",
          description: "Baked daily with high-quality ingredients.",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/black-bearded-coffee-seller-pouring-coffee-shop_613910-443.jpg"
      imageAlt="About Talia Cafe"
      mediaAnimation="blur-reveal"
    />
  </div>

  <div id="features" data-section="features">
      <FeatureBorderGlow
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        {
          icon: Coffee,
          title: "Specialty Coffee",
          description: "Premium beans roasted to perfection.",
        },
        {
          icon: Wifi,
          title: "Free Wi-Fi",
          description: "High-speed internet for your convenience.",
        },
        {
          icon: Clock,
          title: "Open Daily",
          description: "Visit us from 6 AM to 10 PM.",
        },
      ]}
      title="Why Choose Talia?"
      description="We offer more than just coffee. We provide an experience."
    />
  </div>

  <div id="products" data-section="products">
      <ProductCardThree
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="four-items-2x2-equal-grid"
      useInvertedBackground={true}
      products={[
        {
          id: "1",
          name: "Signature Latte",
          price: "SAR 15",
          imageSrc: "http://img.b2bpic.net/free-photo/aerial-view-latte-art_53876-165303.jpg",
        },
        {
          id: "2",
          name: "Fresh Croissant",
          price: "SAR 12",
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-croissant-plate-cup-tea-with-tangerine-slices-lemon-half-open-book-orange-with-basket-kumquat-little-flower-book-cloth-black-background_141793-130484.jpg",
        },
        {
          id: "3",
          name: "Iced Mocha",
          price: "SAR 18",
          imageSrc: "http://img.b2bpic.net/free-photo/iced-chocolate_1339-4414.jpg",
        },
        {
          id: "4",
          name: "Chocolate Muffin",
          price: "SAR 10",
          imageSrc: "http://img.b2bpic.net/free-photo/muffins-with-fork-them_114579-17006.jpg",
        },
        {
          id: "5",
          name: "Drip Coffee",
          price: "SAR 8",
          imageSrc: "http://img.b2bpic.net/free-photo/front-view-person-pouring-coffee-bown_23-2148761658.jpg",
        },
        {
          id: "6",
          name: "Herbal Tea",
          price: "SAR 10",
          imageSrc: "http://img.b2bpic.net/free-photo/man-drinking-matcha-tea_23-2150163295.jpg",
        },
      ]}
      title="Our Delicious Menu"
      description="Discover our range of handcrafted coffees and fresh snacks."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardSixteen
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "1",
          name: "Mustafa User",
          role: "Coffee Lover",
          company: "Local",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/coffee-white-cup-dual-background_23-2147906593.jpg",
        },
        {
          id: "2",
          name: "Raquela Balanay",
          role: "Visitor",
          company: "Local",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-empty-plates-with-milk-coffee-light-desk-drink-milk-coffee-delicious_140725-34256.jpg",
        },
        {
          id: "3",
          name: "Rini Navajeevan",
          role: "Regular",
          company: "Local",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/happy-monday-with-delicious-coffee_23-2149814539.jpg",
        },
        {
          id: "4",
          name: "Sabrin",
          role: "Regular",
          company: "Local",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/trendy-coffee-shop-city_53876-139693.jpg",
        },
        {
          id: "5",
          name: "Coffee Enthusiast",
          role: "Visitor",
          company: "Local",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/cup-hot-espresso-with-foam-located-wide-white-surface_166373-610.jpg",
        },
      ]}
      kpiItems={[
        {
          value: "4.9",
          label: "Review Score",
        },
        {
          value: "28",
          label: "Verified Reviews",
        },
        {
          value: "100%",
          label: "Satisfaction",
        },
      ]}
      title="What Our Customers Say"
      description="Rated 4.9 by our wonderful community."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqDouble
      textboxLayout="default"
      useInvertedBackground={true}
      faqs={[
        {
          id: "1",
          title: "Do you offer delivery?",
          content: "Yes, we provide no-contact delivery.",
        },
        {
          id: "2",
          title: "What are your hours?",
          content: "We are open daily until 10 PM.",
        },
        {
          id: "3",
          title: "Where are you located?",
          content: "Khurais Br Rd, Al Andalus, Riyadh 13212.",
        },
      ]}
      title="Common Questions"
      description="Got questions? We have answers."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplitForm
      useInvertedBackground={false}
      title="Get in Touch"
      description="Reach out for orders, bookings, or inquiries."
      inputs={[
        {
          name: "name",
          type: "text",
          placeholder: "Your Name",
        },
        {
          name: "email",
          type: "email",
          placeholder: "Your Email",
        },
      ]}
      textarea={{
        name: "message",
        placeholder: "How can we help you?",
      }}
      imageSrc="http://img.b2bpic.net/free-photo/blank-mock-up-design-cafe-signboard-nice-building-outdoors_158595-6498.jpg"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseReveal
      logoText="Talia Cafe"
      columns={[
        {
          title: "Quick Links",
          items: [
            {
              label: "Home",
              href: "#hero",
            },
            {
              label: "Menu",
              href: "#products",
            },
          ],
        },
        {
          title: "Contact",
          items: [
            {
              label: "054 445 9981",
              href: "tel:0544459981",
            },
            {
              label: "Khurais Br Rd, Riyadh",
              href: "#",
            },
          ],
        },
      ]}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
