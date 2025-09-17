import { ResizeHandle } from "components/common/ResizeHandle"
import { Toast } from "components/common/Toast"
import { LoginStatusCheck } from "components/features/auth/LoginStatusCheck"
import { AlertModule } from "components/modules/AlertModule"

// 🔹 전역 layout
export const HighLayout = () => {
  console.log('High')
  return (
    <>
      <ResizeHandle />
      <AlertModule />
      <Toast />
      <LoginStatusCheck />
    </>
  )
}