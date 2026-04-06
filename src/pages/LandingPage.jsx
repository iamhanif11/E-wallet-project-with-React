import Header from "../components/LandingPage/Header";
import Footer from "../components/LandingPage/Footer";
import HeroSection from "../components/LandingPage/HeroSection";
import BenefitSection from "../components/LandingPage/BenefitSection";
import IntroSection from "../components/LandingPage/IntroSection";
import FeatureSection from "../components/LandingPage/FeatureSection";
import PartnerSection from "../components/LandingPage/PartnerSection";
import Testimonial from "../components/LandingPage/Testimonial";
import DownloadSection from "../components/LandingPage/DownloadSection";

function LandingPage(){
    return(
        <body>
            <Header/>
            <main>
                <HeroSection/>
                <BenefitSection/>
                <IntroSection/>
                <FeatureSection/>
                <PartnerSection/>
                <Testimonial/>
                <DownloadSection/>     
            </main>
            <Footer/>
        </body>
    )
}

export default LandingPage