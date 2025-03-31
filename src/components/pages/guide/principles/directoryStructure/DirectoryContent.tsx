import styled from "styled-components"
import { directoryData } from "../../data/directoryData";
import { TitlePoint } from "components/ui/TitlePoint";
import { MemoTreeLists } from "components/ui/TreeLists";

export const DirectoryContent = () => {
  console.log(directoryData)
  return (
    <StyleWrap className="content-inner">
      <div className="content-heading">
        <TitlePoint 
          $display="block"
          titleTag="h4"
          titleText={'폴더 구조'}
          pointer="underline"
          $fontSize={28}
        />
        <p className="desc">폴더 구조를 나타내고 각 폴더의 역할을 간략히 설명</p>
      </div>
      <div className="directory-wrap">
        <MemoTreeLists data={directoryData} >
          {(item) => ({
            content: (
              <>
                <p className="tit">{item.title}</p>
              </>
            ),
            contentChildren: item.children
          })}
        </MemoTreeLists>
      </div>
    </StyleWrap>
  )
}




const StyleWrap = styled.div`
  .content-heading {
    .desc{
      margin-top:10px;
    }
  }


  .tree-ui {

  }
`;