import { useState } from 'react'
import { Signup } from '../../common/Forms/Signup/Signup'
import { Login } from '../../common/Forms/Login/Login'

export const AuthPage = () => {
  const [isRegisterOpen, setRegisterOpen] = useState(false);

  const handleToggle = () => {
    setRegisterOpen(!isRegisterOpen);
  };

  return (
    <div>
      <div>
        {isRegisterOpen ? (
          <Signup handleToggle={handleToggle} />
        ) : (
          <Login handleToggle={handleToggle} />
        )}
      </div>
    </div>
  )
}
