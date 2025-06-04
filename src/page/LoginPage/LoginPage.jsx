import React, { useState } from 'react';
import styles from '../../css/LoginFormCss.module.css';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        'http://localhost:5000/api/login',
        { email, password },
        { withCredentials: true }
      );
      console.log('✅ 로그인 성공:', response.data);
      alert('로그인 성공');
      navigate('/');
    } catch (error) {
      console.error('❌ 로그인 실패:', error.response?.data || error.message);
      alert('이메일 또는 비밀번호 오류');
    }
  };

  return (
    <div className={styles.loginBox}>
      <h2 className={styles.loginTitle}>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className={styles.userBox}>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Email</label>
        </div>
        <div className={styles.userBox}>
          <input
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <label>Password</label>
        </div>
        <Button type="submit" variant="outline-light" style={{ width: '100%' }}>Login</Button>
        <label
          style={{ color: 'white', marginTop: '20px', cursor: 'pointer' }}
          onClick={() => navigate('/register')}
        >
          아직 회원이 아니신가요?
        </label>
      </form>
    </div>
  );
};

export default LoginForm;
