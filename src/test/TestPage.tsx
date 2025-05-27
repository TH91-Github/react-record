// ✅ TestPage.jsx -> Parent Component

import Carousel from "components/common/Carousel";
export const TestPage = () => {
  return(
    <div className="test-wrap">
      <Carousel carouselOpt={{navigation:true, pagination:true}}>
        {
          new Array(8).fill('').map((_, idx) => (
            <div key={idx}>
              {idx}
            </div>
          ))
        }
      </Carousel>
    </div>
  )
}