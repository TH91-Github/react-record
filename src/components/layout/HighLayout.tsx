import { Toast } from "components/common/Toast"
import { LoginStatusCheck } from "components/features/auth/LoginStatusCheck"
import { AlertModule } from "components/modules/AlertModule"

export const HighLayout = () => {
  console.log('High')
  return (
    <>
      <AlertModule />
      <Toast />
      <LoginStatusCheck />
    </>
  )
}