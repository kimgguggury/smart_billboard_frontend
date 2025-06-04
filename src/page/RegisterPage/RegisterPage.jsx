import React, { useState } from 'react';
import styles from '../../css/RegisterFormCss.module.css';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const RegisterForm = () => {
  const [username, setUsername] = useState('');  // 프론트에서만 사용
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        'http://localhost:5000/api/register',
        {
          email,
          password,
          company
        },
        { withCredentials: true }
      );
      console.log('✅ 회원가입 성공:', response.data);
      alert('회원가입 성공! 로그인 페이지로 이동합니다.');
      navigate('/login');
    } catch (error) {
      console.error('❌ 회원가입 실패:', error.response?.data || error.message);
      alert(error.response?.data?.message || '회원가입 실패');
    }
  };

  return (
    <div className={styles.loginBox}>
      <h2 className={styles.loginTitle}>Register</h2>
      <form onSubmit={handleSubmit}>
        <div className={styles.userBox}>
          <input
            type="text"
            required
            value={company}
            onChange={(e) => setCompany(e.target.value)}
          />
          <label>업체 이름</label>
          </div>
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
       
        <Button type="submit" variant="outline-light" style={{ width: '100%' }}>
          Register
        </Button>
        <label
          style={{ color: 'white', marginTop: '20px', cursor: 'pointer' }}
          onClick={() => navigate('/login')}
        >
          이미 계정이 있으신가요?
        </label>
      </form>
    </div>
  );
};

export default RegisterForm;
