import { Form } from '@/app/components/Form/Form'
import {registerUserAction} from '@/app/data/actions/auth-actions'

const CreateAccount = () => {
  return (
    <Form 
        title='registrate'
        description='Ingresa tus datos para registrarte.'
        btnSubmitText='Registrarme'
        otherFormQuestion='¿Ya tienes una cuenta?'
        otherFormText='Iniciar Sesión'
        otherFormLink='/sign-in'
        userAction={registerUserAction}
    />
  )
}

export default CreateAccount