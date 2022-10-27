import { Header, Navbar, Carousel, HowItWorks, NewSectionShelves, TopBrands, Footer, MobileNavbar, FloatSearchMobile } from "./Sections"
import { MainSiteContainer, CarouselAndShelvesContainer, ShelvesBox } from "./Components"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Home, Phones, Computers, Watches, Cameras, Gaming, Tablets, Tvs } from "./Pages"


// var loadScript = function (src) {
//   var tag = document.createElement('script');
//   tag.async = false;
//   tag.src = src;
//   document.getElementsByTagName('body')[0].appendChild(tag);
// }


const App = () => {

  return (
    <>
      <Router basename={'/'}>

        <Header />

        <MainSiteContainer>

          <Navbar />

          <CarouselAndShelvesContainer>

            <Carousel />

            <ShelvesBox>
              <Routes>

                <Route path='/' element={<Home />} />
                <Route path='/Phones' element={<Phones />} />
                <Route path='/Computers' element={<Computers />} />
                <Route path='/Watches' element={<Watches />} />
                <Route path='/Cameras' element={<Cameras />} />
                <Route path='/Gaming' element={<Gaming />} />
                <Route path='/Tablets' element={<Tablets />} />
                <Route path='/Tvs' element={<Tvs />} />

              </Routes>
            </ShelvesBox>

          </CarouselAndShelvesContainer>

        </MainSiteContainer>

        <HowItWorks />
        <NewSectionShelves />
        <TopBrands />
        <Footer />

        <MobileNavbar />
        <FloatSearchMobile />

        {/* {loadScript(./main.js)} */}

      </Router>
    </>

  )
}


export default App