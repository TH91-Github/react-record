import { colors } from "assets/style/variables";
import Carousel from "components/common/Carousel";
import { carouselData } from "components/pages/guide/data/componentsInfo";
import { ViewCode } from "components/pages/guide/ViewCode";
import { ViewInfo } from "components/pages/guide/ViewInfo";
import { InnerHTML } from "components/ui/InnerHTML";
import styled from "styled-components";
import { SwiperProps } from "swiper/react";
import { cn } from "utils/common";

interface CarouselDemoType {
  tit: string;
  txt: string;
  lists: string[];
  opt?:SwiperProps;
  customClass?: string;
};

export const CarouselViewPage = () => {
  const demoData: CarouselDemoType[] = [
    {
      tit:'case-1',
      txt:'리스트 3개, 옵션 - x : 기본으로 view - 1 ',
      lists:['case1'],
    },
    {
      tit:'case-2',
      txt:'옵션 - x : 리스트 총 2개부터 carousel 동작',
      lists:['case2', 'case2', 'case2', 'case2'],
    },
    {
      tit:'case-3',
      txt:`옵션 - <span className="highlight">slidesPerView</span>: 4, <span className="highlight">loop</span>:true, <span className="highlight">autoplay</span>:{delay: 2000}`,
      lists:['case3', 'case3', 'case3', 'case3','case3', 'case3', 'case3', 'case3'],
      opt:{
        slidesPerView: 4,
        loop:true,
        autoplay: {
          delay: 2000,
        }
      }
    },
    {
      tit:'case-4',
      txt:'<span className="highlight">slidesPerView</span>: 1, <span className="highlight">pagination</span>: true,',
      lists:['case4', 'case4', 'case4'],
      opt:{
        slidesPerView: 1,
        pagination:true,
      }
    },
    {
      tit:'case-5',
      txt:`<span className="highlight">slidesPerView</span>: 1, <span className="highlight">pagination</span>:{clickable:true, type:'progressbar'}, <span className="highlight">navigation</span>: true,`,
      lists:['case5', 'case5', 'case5'],
      opt:{
        slidesPerView: 1,
        pagination:{
          clickable:true,
          type:'progressbar'
        },
        navigation:true, 
      }
    },
    {
      tit:'case-6',
      txt:'effect - creative',
      lists:['case2', 'case2', 'case2', 'case2','case2', 'case2'],
      customClass:'effect-creative',
      opt:{
        centeredSlides: true, 
        loop:true,
        effect:'creative',
        creativeEffect:{
          prev: {
            translate: [0, 0, 120],
            scale: 1.5,
            opacity: 0,
            origin: 'center',
            shadow: true,
          },
          next: {
            translate: [0, -20, -120],
            scale: 0.6,
            opacity: 0.4,
            origin: 'center',
            shadow: true,
          },
        }
      }
    },
  ];

  return(
    <StyleWrap className="view-wrap carousel">
      <div className="view-item">
        <ViewInfo data={carouselData} />
      </div>
      <div className="view-item">
        <p className="tit">carousel 데모</p>
        <div className="example-lists">
          {
            demoData.map((item, idx) => (
              <div className={`example-item item-${idx}`} key={idx}>
                <p className="tit">{item.tit}</p>
                <InnerHTML tag="p" data={item.txt}/>
                <div className={cn('demo-box',item?.customClass && 'demo-creative')}>
                  <Carousel
                    carouselOpt={item.opt}
                  >
                    {item.lists.map((listItem, listIdx) => (
                      <div className="demo-slide" key={listIdx}>
                        <span>{listItem+'-'+(listIdx+1)}</span>
                      </div>
                    ))}
                  </Carousel>
                </div>
              </div>
            ))
          }
        </div>
      </div>
      <div className="view-item">
        <ViewCode data={carouselData} />
      </div>
    </StyleWrap>
  )
}
const StyleWrap = styled.div`
  .view-item{
    margin-top:30px;
    padding-top:30px;
    border-top:1px solid ${colors.lineColor};
    .tit{ 
      font-size: 18px;
    }
    &:first-child{
      margin-top:0;
      padding-top:0;
      border-top:none;
    }
  }
  .example-lists{
    margin-top:15px;
  }
  .example-item {
    margin-top:20px;
    .tit{

    }
    .txt{
      margin-top:10px;
    }
  }
  .demo-box {
    margin-top:10px;
    padding:10px 0;
    border:1px dotted ${colors.red};
  }
  .demo-slide{
    display:flex;
    align-items:center;
    justify-content:center;
    min-height:50px;
    border:1px solid ${colors.mSlateBlue};
    background:#fff;
  }
  .demo-creative{
    .swiper-slide{
      width:500px;
    }
    .swiper {
      padding:30px;
    }

  }
`;