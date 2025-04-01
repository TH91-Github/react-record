import { memo } from "react";
import styled from "styled-components"

export interface TreeItemType {
  title: string;
  children?: TreeItemType[];
}

interface TreeListsPropsType<T extends TreeItemType> {
  data: T[];
  depth?: number;
  firstStart?: boolean;
  children?: (item: T, childrenContent?: React.ReactNode) => {
    content: React.ReactNode;
    customClass?: string;
  };
  $styleGap?: number;
}

export const TreeLists = <T extends TreeItemType>({
  data,
  firstStart = false,
  depth = 0,
  children,
  $styleGap,
}: TreeListsPropsType<T>) => {

  return(
    <StyleWrap
      className={`tree-lists ${depth === 0 ? "default" : `depth-${depth}`} ${children ? "custom" : ""} ${
        firstStart ? "first" : ""
      }`}
      $styleGap={$styleGap}
    >
      {data.map((item, idx) => {
        // ✅ 자식 요소를 미리 렌더링
        const childrenContent =
          item.children && item.children.length > 0 ? (
            <TreeLists data={item.children as T[]} depth={depth + 1} children={children} />
          ) : null;

        // 🔹 children 있다면 커스텀 적용
        if (children) {
          const { content, customClass } = children(item, childrenContent);
          return (
            <li key={idx} className={`tree-item ${customClass ? customClass : ""}`}>
              {content}
            </li>
          );
        }
        // 🔹 기본 트리 구조
        return (
          <li key={idx} className="tree-item">
            <p>{item.title}</p>
            {childrenContent}
          </li>
        );
      })}
    </StyleWrap>
  )
}

// memo로 감싸는 경우 제네릭 타입을 유지하기 위해서는 as 키워드를 사용해 명시적으로 타입 지정.
export const MemoTreeLists = memo(TreeLists) as <T extends TreeItemType>(
  props: TreeListsPropsType<T>
) => React.ReactElement;

interface StyleWrapPropsType {
  $styleGap?:number,
}
const StyleWrap = styled.ul<StyleWrapPropsType>`
  &.first, [class*="depth-"] {
    & > li {
      position:relative;
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
`;  
