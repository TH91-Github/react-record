import { NamingContent } from "components/pages/guide/principles/namingConventions/NamingContent";
import { NamingHeader } from "components/pages/guide/principles/namingConventions/NamingHeader";
import { useState } from "react";

export const NamingConventionsPage = () => {
  const [selectNaming, setSelectNaming] = useState<string | null>(null);

  const updateNaming = (e:string | null) => {
    setSelectNaming(e)
  }
  return (
    <div className="naming-convention">
      <NamingHeader
        selectNaming={selectNaming}
        updateNaming={updateNaming}
      />
      <NamingContent selectNaming={selectNaming} />
    </div>
  )
}
