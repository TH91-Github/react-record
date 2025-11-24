/*
  📍 #공통 타입 
*/

export interface KeywordBaseType {
  id: string;
  keyword: string;
}

// input 
export interface InputKeyboardValType {
  e?:React.KeyboardEvent<HTMLInputElement>,
  val?:string
}

// textarea
export interface TextareaKeyboardValType {
  e?:React.KeyboardEvent<HTMLTextAreaElement>,
  val?:string
}