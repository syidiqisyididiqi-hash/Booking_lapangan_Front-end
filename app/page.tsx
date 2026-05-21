import HomePageContent from "./components/home/home-page";
import Footer from "./components/layout/footer";
import Navbar from "./components/layout/navbar";

export default function HomePage() {
  return (
    <>
      <Navbar />

        <HomePageContent />

      <Footer />
    </>
  );
}