import { DirectoryContent } from "components/pages/guide/principles/directoryStructure/DirectoryContent"

export const DirectoryStructurePage = () => {
  return (
    <div className="directory-structure">
      <div className="header-wrap">
        <div className="header-inner">
          <div className="heading">
            <h2 className="name-tag">Directory Structure</h2>
            <h3 className="title">
              <span>체계적인 파일 정리로 보기 쉽게!</span>
              <span><span className="color">폴더 구조</span>를 만들어 효율적으로 이해</span>
            </h3>
            <p className="desc">
              <span>
                "중복 생성되는 폴더와 파일을 정리하고,<br />
                일관된 규칙으로 체계적인 폴더 구조를 위한 가이드입니다."
              </span>
            </p>
          </div>
        </div>
      </div>
      <DirectoryContent />
    </div>
  )
}
