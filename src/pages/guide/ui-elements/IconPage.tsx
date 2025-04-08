import { colors } from "assets/style/variables";
import { iconData } from "components/pages/guide/data/uiData";
import { TitleHeading } from "components/ui/TitleHeading";
import { TitlePoint } from "components/ui/TitlePoint";
import styled from "styled-components";
import { copyClipboard } from "utils/common";

export const IconPage = () => {
  const {headData, bodyData} = iconData;

  const handleClickCopy = async (e:string) => {
    const copySuccess = await copyClipboard(e);
    // 👇 popup 컴포넌트 완료 후 교체
    copySuccess 
      ? console.log('성공') 
      : console.log('실패') 
  };
  return(
    <StyleWrap>
      <TitleHeading 
        $display="block"
        titleTag="h3"
        titleText={headData.title} 
        pointer="underline"
        $fontSize={28}
        desc={headData.desc}
      />
      <div className="section-wrap">
        {
          bodyData.map((item, idx) => (
            <div className="section-item" key={idx}>
              <TitlePoint 
                $display="block"
                titleTag="h4"
                titleText={item.title}
                pointer="circle"
                $fontSize={20}
              />
              {item.desc?.map((descItem, descIdx) => (
                <p key={descIdx} className="desc">{descItem}</p>
              ))}
              <ul className="icon-lists">
                {item.lists.map((iconItem, iconIdx) => {
                  const Icon = iconItem?.element ?? null;
                  const ImgSvg = iconItem?.path ?? null;
                  return (
                    <li key={iconIdx}>
                      <button 
                        type="button"
                        className="icon-btn"
                        title={`${Icon ? iconItem.title : `import ${iconItem.title}`} 복사하기`}
                        onClick={() => handleClickCopy(`${Icon ? `<${iconItem.code} />`: iconItem.code}`)}>
                        <span className="icon">
                          {/* svg 컴포넌트 */}
                          {Icon && <Icon />}
                          {/* svg 이미지 */}
                          {ImgSvg && <img src={ImgSvg} />}
                        </span>
                      </button>
                      <p className="tit">{iconItem.title}</p>
                    </li>
                  )
                })}
              </ul>
            </div>
          ))
        }
      </div>
    </StyleWrap>  
  )
}

const StyleWrap = styled.div`
  .icon-lists {
    display:flex;
    flex-wrap:wrap;
    gap:20px;
    margin-top:30px;
    & > li {
      display:flex;
      flex-direction: column;
      align-items: center;
      width:90px;
      &:hover{
        .icon-btn, .icon{
          border-color:${colors.mSlateBlue};
        }
        .tit {
          color:${colors.mSlateBlue};
        }
      }
    }
  }
  .icon-btn {
    display:flex;
    flex-direction: column;
    justify-content:center;
    align-items:center;
    position:relative;
    width:50px;
    height:50px;
    padding:10px 5px;
    border-radius:10px;
    border:1px solid ${colors.lineColor};
    background:#fff;
    transition: border-color var(--transition);
    .icon{
      display:block;
      position:relative;
      width:35px;
      height:35px;
      padding:5px;
      border-radius:50%;
      border:1px solid transparent;
      transition: border-color var(--transition);
    }
  }
  .tit {
    margin-top:5px;
    font-size:12px;
    transition: color var(--transition);
  }
`;
