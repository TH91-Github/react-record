import { TitlePoint } from "components/ui/TitlePoint";
import { MemoTreeLists } from "components/ui/TreeLists";
import styled from "styled-components";
import { directoryData } from "../../data/directoryData";
import { media } from "assets/style/variables";
import { stateIsMobile } from "recoilStore/atoms";
import { useRecoilValue } from "recoil";

export const DirectoryContent = () => {
  const isMobile = useRecoilValue(stateIsMobile);

  return (
    <StyleWrap className="content-wrap">
      <div className="content-heading">
        <TitlePoint 
          $display="block"
          titleTag="h4"
          titleText={'폴더 구조'}
          pointer="underline"
          $fontSize={!isMobile? 28 : 20}
        />
        <p className="desc">폴더 구조를 나타내고 각 폴더의 역할을 간략히 설명</p>
      </div>
      <div className="directory-tree">
        <MemoTreeLists data={directoryData}>
          {(item, childrenContent) => ({
            content: (<>
              <div className="directory-heading">
                <p className="tit">{item.title}</p>
                <p className="desc">{item.desc}</p>
              </div>
              {childrenContent}
            </>),
          })}
        </MemoTreeLists>
      </div>
    </StyleWrap>
  )
}

const StyleWrap = styled.div`
.content-heading {
  .desc{
    margin-top:15px;
  }
}
.directory-tree{
  margin-top:20px;
}
.directory-heading{
  display:flex;
  gap:10px;
  .desc{
    font-size:14px;
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
${media.mo}{
  .content-heading {
    .desc{
      margin-top:15px;
      font-size:14px;
    }
  }
}
`;