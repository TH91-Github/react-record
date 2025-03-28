import { memo } from "react";
import styled from "styled-components"

interface TreeListsPropsType<T> {
  data: T[],
  depth?:number, // 하위 뎁스를 받아오기 위함.
  firstStart?: boolean, // 처음 부터 라인을 사용할지 여부
  children?: (item: T) => { // ReactNode children : custom 
    content: React.ReactNode;
  },
  $styleGap?:number,
}
interface TreeNodeData {
  title: string;
  children?: TreeNodeData[]; // data key : children 
}
export const TreeLists = <T extends TreeNodeData>({data, firstStart=false, depth, children, $styleGap}:TreeListsPropsType<T>) => {
  return(
    <StyleWrap 
      className={
        `tree-lists ${!depth ? 'default' : `depth-${depth}`} ${children ? 'custom' :''} ${firstStart ? 'first': ''}`
      }
      $styleGap={$styleGap}
    >
      {
        !children ? ( // ✅ 단순 tree 구조 반복
          <>
            { data.map((item, idx) => (
              <li key={idx} className="tree-item">
                <p>{item.title}</p>
                {item.children && (
                <TreeLists key={idx} data={item.children} depth={depth ? depth + 1 : 1}/>
                )}
              </li>
            ))}
          </>
        )
        : ( // ✅ custom : 기능 있는 경우
          <>
            { data.map((item, idx) => {
              const { content } = children(item);
              return <li key={idx} className="tree-item">
                {content}
              </li>
            })}
          </>
        )
      }
      
    </StyleWrap>
  )
}
export const MemoTreeLists = memo(TreeLists);

interface StyleWrapPropsType {
  $styleGap?:number,
}
const StyleWrap = styled.ul<StyleWrapPropsType>`
  &.first, [class*="depth-"],  {
    & > li {
      padding: 10px 10px 10px ${({$styleGap}) => $styleGap || 30}px;
      line-height:1.3;
      &::before {
        position: absolute;
        top: 0;
        left: 10px;
        width: 1px;
        height: 100%;
        background: #000;
        content: '';
      }
      &::after{
        position: absolute;
        top: 20px;
        left: 10px;
        width: 10px;
        height: 1px;
        border-bottom-left-radius: 50%;
        background: #000;
        transform: translateY(-50%);
        content: '';
      }
      &:last-child {
        &::before {
          height:50%;
          content:''
        }
      }
    }
  }


  .tree-item {
    position:relative;
  }
`;  
