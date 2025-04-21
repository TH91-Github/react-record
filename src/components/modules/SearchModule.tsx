
import { colors } from "assets/style/variables";
import { SvgSearch } from "assets/svg/Common";
import InputText from "components/common/InputText";
import { useCallback, useState } from "react";
import styled from "styled-components"

interface SearchPropsType<T extends { keyword: string }> {
  data?: T[] // 검색 목록
  isBtn?: boolean; // 버튼 유무 버튼 false 시  icon on
  placeholder?:string;
  $line?: 'line' | 'line-bottom' | 'line-left' | 'none';
  onComfirm?: () => void;
}
export const SearchModule = <T extends { keyword: string }>({
  data = [],
  isBtn = true,
  placeholder = '',
  $line = 'line',
  onComfirm,
}:SearchPropsType<T>) => {
  const [resultVal, setResultVal] = useState('');
  const [filteredData, setFilteredData] = useState<T[]>([]);
  
  const inputChange = useCallback((val: string) => {
    setResultVal(val);

    if (val.length >= 2) {
      // 2글자 이상일 때만 검색을 시작합니다.
      const filtered = data.filter(item =>
        item.keyword.toLowerCase().includes(val.toLowerCase())
      );
      setFilteredData(filtered);
    } else {
      setFilteredData([]);
    }
  }, [data]);

  const handleClick = () => {
    if (onComfirm) {
      onComfirm();
    }
  }

  return (
    <StyleWrap className={`search ${isBtn ? 'search-btn': ''}`}>
      {!isBtn && <i className="icon"><SvgSearch /></i>}
      <InputText 
        id="search"
        placeholder={placeholder}
        styleOpt={ { $defaultLine:$line, $focusColor:colors.darkNavy} }
        changeEvent={inputChange}
      />
      {isBtn && (
        <button 
          className="btn btn-primary"
          onClick={handleClick}
        >
          <i className="icon"><SvgSearch /></i>
        </button>
      )}


      {/* 미리보기 출력 */}
      {resultVal.length >= 2 && filteredData.length > 0 && (
        <PreviewBox>
          <ul>
            {filteredData.map((item, index) => (
              <li key={index}>{item.keyword}</li>
            ))}
          </ul>
        </PreviewBox>
      )}
    </StyleWrap>
  )
}
interface StyleWrapType {
  $iconSize? : number,
}

const StyleWrap = styled.div<StyleWrapType>`
  display: flex;
  align-items: center;
  .icon{
    flex-shrink: 0;
    display:inline-block;
    position:relative;
  }
  .input-item {
    flex-grow:1;
  }
  .search-btn {
    flex-shrink: 0;
  }
  .btn {
    width:40px;
    height:40px;
  }
  &.search-btn {
    .input {
      border-top-right-radius:0;
      border-bottom-right-radius:0;
    }
    .btn  {
      border-top-left-radius:0;
      border-bottom-left-radius:0;
    }
  }
`;


const PreviewBox = styled.div`
  margin-top: 8px;
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  padding: 8px;
  max-height: 200px;
  overflow-y: auto;

  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }

  li {
    padding: 4px 0;
    font-size: 14px;
  }
`;