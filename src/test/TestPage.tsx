// ✅ TestPage.jsx -> Parent Component

import { SwiperTest } from "./SwiperTest"

const testData = ['slide-1','slide-2','slide-3','slide-4','slide-5','slide-6']
export const TestPage = () => {
 
  return(
    <div className="test-wrap">
      <SwiperTest>
        {
          testData.map((item,idx) => (
            <div className="box" key={idx}>
              {item}
            </div>
          ))
        }
      </SwiperTest>
    </div>
  )
}