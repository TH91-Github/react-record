
import { colors } from "assets/style/variables";
import { SvgSearch } from "assets/svg/Common";
import InputText from "components/common/InputText";
import { PreviewDataType, PreviewText } from "components/common/PreviewText";
import { useCallback, useMemo, useState } from "react";
import styled from "styled-components";

// ✅ 검색 : InputText(input) + PreviewText(미리보기)
interface EssentialType { // 필수 타입
  id:string;
  title:string;
  keyword:string[];
}

interface SearchPropsType<T extends EssentialType> {
  data?: T[] // 검색 목록
  isBtn?: boolean; // 버튼 유무 버튼 false 시  icon on
  placeholder?:string;
  $line?: 'line' | 'line-bottom' | 'line-left' | 'none';
  isPreview? : boolean;
  onComfirm?: () => void;
}
export const SearchModule = <T extends EssentialType>({
  data = [],
  isBtn = true,
  placeholder = '',
  $line = 'line',
  isPreview = true,
  onComfirm,
}:SearchPropsType<T>) => {
  const [resultVal, setResultVal] = useState('');

  const inputChange = useCallback((val: string) => {
    setResultVal(val);
  }, []);

  const filteredData = useMemo(() => {
    if (resultVal.length < 2) return []; // 2글자 이상
    const loweredVal = resultVal.toLowerCase();
    const matches: PreviewDataType[] = [];
    data.forEach((item) => {
      item.keyword.forEach((keyVal) => {
        if (keyVal.toLowerCase().includes(loweredVal)) {
          matches.push({ 
            id:item.id, 
            title:item.title, 
            keyword: keyVal,
          });
        }
      });
    });
    return matches;
  }, [data, resultVal]);

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
      {
        isPreview && <PreviewText data={filteredData}  matcheVal={resultVal} />
      }
    </StyleWrap>
  )
}

interface StyleWrapType {
  $iconSize? : number,
}

const StyleWrap = styled.div<StyleWrapType>`
  display: flex;
  align-items: center;
  position:relative;
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
