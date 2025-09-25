import { ResizeHandle } from "components/common/ResizeHandle"
import { Toasts } from "components/common/Toasts"
import { LoginStatusCheck } from "components/features/auth/LoginStatusCheck"
import { AlertModule } from "components/modules/AlertModule"

// 🔹 전역 layout
export const HighLayout = () => {
  return (
    <>
      <ResizeHandle />
      <AlertModule />
      <Toasts />
      <LoginStatusCheck />
    </>
  )
}