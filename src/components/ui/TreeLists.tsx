import { memo } from "react";
import styled from "styled-components"

interface TreeListsPropsType<T> {
  data: T[],
  depth?:number,
}
interface TreeNodeData {
  title: string;
  children?: TreeNodeData[];
}
export const TreeLists = <T extends TreeNodeData>({data, depth}:TreeListsPropsType<T>) => {
  return(
    <StyleWrap className={`tree-lists ${!depth ? 'default' : `depth-${depth}`}`}>
      <ul>
        { data.map((item, idx) => (
          <li key={idx} className="tree-item">
            <p>{item.title}</p>
            {item.children && (
            <TreeLists key={idx} data={item.children} depth={depth ? depth+1 : 1}/>
            )}
          </li>
        ))}
      </ul>
    </StyleWrap>
  )
}
export const MemoTreeLists = memo(TreeLists);

const StyleWrap = styled.div`
  &.default {

  }
  .tree-item {
    position:relative;
  }
`;  
