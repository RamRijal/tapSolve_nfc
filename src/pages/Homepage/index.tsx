import Banner from '../../components/banner'
import Display1 from '../../components/display1'
import HeroProducts from '../../components/display2'
import HeroPage from '../../components/hero'
import HowItWorks from '../../components/howitworks'
import Testimonials from '../../components/testimonials'
import FAQs from '../FAQs'

const Homepage = () => {
    return (
        <>
            <HeroPage />
            <Display1 />
            <HeroProducts />
            <HowItWorks />
            <Banner />
            <Testimonials />
            <FAQs />

        </>
    )
}

export default Homepage