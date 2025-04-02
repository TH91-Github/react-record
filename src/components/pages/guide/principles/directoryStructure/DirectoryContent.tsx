import styled from "styled-components"
import { directoryData } from "../../data/directoryData";
import { TitlePoint } from "components/ui/TitlePoint";
import { MemoTreeLists } from "components/ui/TreeLists";
import { colors } from "assets/style/Variable";

export const DirectoryContent = () => {
  return (
    <StyleWrap className="content-wrap">
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
      <div className="directory-tree">
        <MemoTreeLists data={directoryData}>
          {(item, childrenContent) => ({
            content: (
              <>
                <div className="directory-heading">
                  <p className="tit">{item.title}</p>
                  <p className="desc">{item.desc}</p>
                </div>
                {childrenContent}
              </>
            ),
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
  .directory-tree{
    margin-top:20px;
  }
  .directory-heading{
    display:flex;
    align-items:center;
    gap:10px;
    .desc{
      font-size:14px;
      color:${colors.desc};
    }
  }
  .tree-lists{
    &.default{
      & > .tree-item {
        margin-top:10px;
        &:first-child{
          margin-top:0;
        }
      }
    }
  }
`;