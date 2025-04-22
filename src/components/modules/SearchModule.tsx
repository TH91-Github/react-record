
import { colors } from "assets/style/variables";
import { SvgSearch } from "assets/svg/Common";
import InputText, { InputTextRefType } from "components/common/InputText";
import { PreviewText } from "components/common/PreviewText";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import styled from "styled-components";
import { KeywordBaseType } from "types/common";

// ✅ 검색 : InputText(input) + PreviewText(미리보기)
interface EssentialType { // 필수 타입
  id:string;
  keyword:string[];
}

interface SearchModulePropsType<T extends EssentialType> {
  data?: T[] // 검색 목록
  isBtn?: boolean; // 버튼 유무 버튼 false 시  icon on
  placeholder?:string;
  $line?: 'line' | 'line-bottom' | 'line-left' | 'none';
  onPreview? : boolean;
  onComfirm?: () => void;
}
export const SearchModule = <T extends EssentialType>({
  data = [],
  isBtn = true,
  placeholder = '',
  $line = 'line',
  onPreview = true,
  onComfirm,
}:SearchModulePropsType<T>) => {
  const SearchModuleRef = useRef<HTMLDivElement | null>(null);
  const isMouseDownInside = useRef(false);
  const [resultVal, setResultVal] = useState('');
  const [isPreview , setIsPreview] = useState(onPreview ?? false);
  const inputRef = useRef<InputTextRefType>(null);

  const inputFocus = () => { 
    setIsPreview(prev => !prev);
  }
  const inputChange = useCallback((val: string) => {
    setResultVal(val);
    console.log('change')
  }, []);

  const handleMouseDown = (e: PointerEvent) => { // 다른 영역 클릭 시시
    if (SearchModuleRef.current?.contains(e.target as Node)) {
      isMouseDownInside.current = true;
    } else {
      isMouseDownInside.current = false;
      setIsPreview(false);
    }
  };

  const filteredData = useMemo(() => {
    if (resultVal.length < 2) return []; // 2글자 이상부터
    const loweredVal = resultVal.toLowerCase();
    const matches: KeywordBaseType[] = [];
    data.forEach((item) => {
      item.keyword.forEach((keyVal) => {
        if (keyVal.toLowerCase().includes(loweredVal)) {
          matches.push({ 
            id:item.id, 
            keyword: keyVal,
          });
        }
      });
    });
    setIsPreview(true);
    return matches;
  }, [data, resultVal]);

  const onKeyword = (id:string, keyVal:string) => { // 자동완성 클릭
    setResultVal(keyVal);
    setIsPreview(false);
    if(!inputRef.current || !inputRef.current) return 
    inputRef.current.refInitVal(keyVal);
  }

  const handleClick = () => { // 검색 
    setIsPreview(false); 
    onComfirm && onComfirm(); // 🌟 완료 후 전달
  }

  useEffect(() => {
    if (isPreview) {
      document.addEventListener("pointerdown", handleMouseDown);
    } else {
      document.removeEventListener("pointerdown", handleMouseDown);
    }

    return () => {
      document.removeEventListener("pointerdown", handleMouseDown);
    };
  }, [isPreview]);

  return (
    <StyleWrap 
      ref={SearchModuleRef}
      className={`search ${isBtn ? 'search-btn': ''}`}
    >
      {!isBtn && <i className="icon"><SvgSearch /></i>}
      <InputText 
        ref={inputRef}
        id="search"
        placeholder={placeholder}
        styleOpt={ { $defaultLine:$line, $focusColor:colors.darkNavy} }
        focusEvent={inputFocus}
        changeEvent={inputChange}
      />
      {
        (isPreview && resultVal.length > 2) && (
          filteredData.length > 0 ?
          <PreviewText 
            data={filteredData}  
            matcheVal={resultVal} 
            onKeyword={onKeyword}
          /> :
          <div className="empyt-wrap">
            <p>일치하는 검색 값이 없습니다.</p>
          </div>
        )
      }
      {isBtn && (
        <button 
          className="btn btn-primary"
          onClick={handleClick}
        >
          <i className="icon"><SvgSearch /></i>
        </button>
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
  .empyt-wrap{
    position:absolute;
    top: calc(100% + 5px);
    left:0;
    width:100%;
    padding:10px;
    border-radius:5px;
    border:1px solid ${colors.lineColor};
    background:#fff; 
    font-size:14px;
  }
  &.search-btn {
    .input {
      border-top-right-radius:0;
      border-bottom-right-radius:0;
    }
    .empyt-wrap{
      
    }
    .btn  {
      border-top-left-radius:0;
      border-bottom-left-radius:0;
    }
    
  }
  
`;
