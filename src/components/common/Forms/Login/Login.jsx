import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../../../store/actions/authActions';
import { MapColombia } from '../../../../utils/constants';
import styles from '../Signup.module.css';

export const Login = ({ handleToggle }) => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  })
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.auth)

  const { username, password } = formData

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const onSubmit = (e) => {
    e.preventDefault()
    dispatch(loginUser({ username, password }))
  }
  return (
    <div className={styles.container}>
      <div className={styles.container_form}>
        <div className={styles.slider}>
          <form
            onSubmit={onSubmit}
            className={styles.form}
          >
            <span className={styles.title}>Login</span>
            {error && <div>{error}</div>}
            <div className={styles.form_control}>
              <input
                type='text'
                name='username'
                value={username}
                onChange={onChange}
                className={styles.input}
                required
              />
              <label className={styles.label}>Username</label>
            </div>
            <div className={styles.form_control}>
              <input
                type='password'
                name='password'
                value={password}
                onChange={onChange}
                className={styles.input}
                required />
              <label className={styles.label}>Password</label>
            </div>
            <button type='submit' disabled={loading}>{loading ? 'cargando...' : 'Login'}</button>

            <div className={styles.bottom_text}>
              Don&apos;t have an account? {' '}
              <span onClick={handleToggle}>Sign Up</span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
