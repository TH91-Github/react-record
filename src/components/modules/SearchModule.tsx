
import { colors } from "assets/style/variables";
import { SvgSearch } from "assets/svg/Common";
import { InputText, InputTextRefType } from "components/common/InputText";
import { PreviewText } from "components/common/PreviewText";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import styled from "styled-components";
import { KeywordBaseType } from "types/common";

// ✅ 검색 : InputText(input) + PreviewText(미리보기)
interface EssentialType { // 필수 타입
  id:string;
  keyword:string[];
}
interface StyleOptPropsType {
  $line?: 'line' | 'line-bottom' | 'line-left' | 'none';
  $maxWidth?: string | number;
}

interface SearchModulePropsType<T extends EssentialType> {
  data?: T[] // 검색 목록 - EssentialType 필수 속성
  id: string;
  isBtn?: boolean; // 버튼 유무 버튼 false 시  icon on
  placeholder?:string;
  styleOpt?:StyleOptPropsType;
  onPreview? : boolean; // 일치하는 검색어 미리보기
  onComfirm?: (val:string) => void;
}
export const SearchModule = <T extends EssentialType>({
  data = [],
  id,
  isBtn = true,
  placeholder = '',
  styleOpt={},
  onPreview = true,
  onComfirm,
}:SearchModulePropsType<T>) => {
  const SearchModuleRef = useRef<HTMLDivElement | null>(null);
  const isMouseDownInside = useRef(false);
  const [resultVal, setResultVal] = useState('');
  const [isPreview , setIsPreview] = useState(onPreview ?? false);
  const [errorMessage, setErrorMessage] = useState('')
  const inputRef = useRef<InputTextRefType>(null);

  const {
    $line = 'line',
    $maxWidth,
  } = styleOpt;

  const inputFocus = () => { 
    setIsPreview(prev => !prev);
  }
  const inputChange = useCallback((val: string) => {
    setResultVal(val);
    if (val.length >= 2) {
      setIsPreview(true);
    }
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
    return matches;
  }, [data, resultVal]);

  const onKeyword = (keyVal:string) => { // 자동완성 클릭
    setResultVal(keyVal);
    setIsPreview(false);
    if(!inputRef.current) return 
    inputRef.current.refInitVal(keyVal);
  }

  const handleEnter = () => {
    handleClick();
  }
  const handleClick = () => {
    let keyword = resultVal.trim();
  
    if (keyword.length < 2) {
      setErrorMessage('검색어를 2자 이상 입력해주세요.');
      return;
    }
  
    // 자동완성 목록이 있는 경우 첫 번째 키워드로 대체
    if (filteredData.length > 0) {
      keyword = filteredData[0].keyword;
      setResultVal(keyword);
      inputRef.current?.refInitVal(keyword);
    }
  
    setIsPreview(false);
    onComfirm?.(keyword);
  };
  

  useEffect(() => { // 컴포넌트 벗어나서 클릭 시 자동완성 닫기
    if (isPreview) {
      document.addEventListener("pointerdown", handleMouseDown);
    } else {
      document.removeEventListener("pointerdown", handleMouseDown);
    }
    return () => {
      document.removeEventListener("pointerdown", handleMouseDown);
    };
  }, [isPreview]);

  useEffect(() => {
    if (errorMessage) {
      const timer = setTimeout(() => {
        setErrorMessage('');
      }, 3000); // 3초 후 메시지 제거
  
      return () => clearTimeout(timer); // 컴포넌트 언마운트 시 클리어
    }
  }, [errorMessage]);

  return (
    <StyleWrap 
      ref={SearchModuleRef}
      className={`search ${isBtn ? 'search-btn': ''}`}
      $maxWidth={typeof $maxWidth === 'number' ? `${$maxWidth}px`: $maxWidth}
    >
      {!isBtn && <i className="icon"><SvgSearch /></i>}
      <InputText 
        ref={inputRef}
        id={`${id}-search`}
        placeholder={placeholder}
        styleOpt={ { $defaultLine:$line, $focusColor:colors.darkNavy} }
        focusEvent={inputFocus}
        keyEnter={handleEnter}
        changeEvent={inputChange}
      />
      {
        errorMessage && <p className="error">{errorMessage}</p>
      }
      {
        (isPreview && resultVal.length > 1)&& (
          filteredData.length > 0 ?
          <PreviewText 
            data={filteredData}  
            matcheVal={resultVal} 
            onKeyword={onKeyword}
          /> : (
            <div className="empyt-wrap">
              <p>일치하는 검색 값이 없습니다.</p>
            </div>
          )
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
  $iconSize?: number,
  $maxWidth:string | undefined
}

const StyleWrap = styled.div<StyleWrapType>`
  display: flex;
  align-items: center;
  position:relative;
  width:100%;
  max-width:${({$maxWidth})=> $maxWidth || '100%'};
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
    z-index:10;
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
  .error {
    position:absolute;
    top:100%;
    padding:10px;
    font-size:14px;
    color:${colors.red};
  }
`;
