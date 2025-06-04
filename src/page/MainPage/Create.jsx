import React, { useState } from 'react';
import styles from '../../css/Create.module.css';
import Navbars from '../../components/Nav';

function Create() {
  const [formData, setFormData] = useState({
    title: '',
    target_sex: '',
    target_age: '',
  });

  const [imageFile, setImageFile] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setImageFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!imageFile) {
      alert("이미지 파일을 선택해주세요.");
      return;
    }

    const form = new FormData();
    form.append("title", formData.title);
    form.append("target_sex", formData.target_sex);
    form.append("target_age", formData.target_age);
    form.append("image", imageFile);

    try {
      const res = await fetch("http://localhost:5000/api/create_ad", {
        method: "POST",
        body: form,
        credentials: "include", // 🔒 세션 쿠키 전송 필수!
      });

      // JSON 응답 처리
      const result = await res.json();
      if (res.ok) {
        alert("✅ 광고 등록 성공!");
        // 필요하면 여기서 페이지 이동 가능 (ex: window.location.href = '/')
      } else {
        alert("❌ 등록 실패: " + result.message);
      }
    } catch (err) {
      alert("❌ 에러 발생: " + err.message);
    }
  };

  return (
    <div style={{
      backgroundColor: '	#e6e9f3',
      minHeight: '100vh',
  }}>
      <Navbars/>
      <div className={styles['login-box']}>
        <h2>Create Ad</h2>
        <form onSubmit={handleSubmit}>
          <div className={styles['user-box']}>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
            />
            <label>광고 제목</label>
          </div>

          <div className={styles['user-box']}>
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              required
            />
            <label style={{ top: '-20px', fontSize: '12px', color: '#03e9f4' }}>
              이미지 파일
            </label>
          </div>

          <div className={styles['user-box']}>
            <select
              name="target_sex"
              value={formData.target_sex}
              onChange={handleChange}
              required
            >
              <option value="" disabled hidden></option>
              <option value="M">남성</option>
              <option value="W">여성</option>
            </select>
            <label>성별</label>
          </div>

          <div className={styles['user-box']}>
            <select
              name="target_age"
              value={formData.target_age}
              onChange={handleChange}
              required
            >
              <option value="" disabled hidden></option>
              <option value={1}>10대</option>
              <option value={2}>20대</option>
              <option value={3}>30대</option>
              <option value={4}>40대</option>
              <option value={5}>50대</option>
              <option value={6}>60대 이상</option>
            </select>
            <label>연령대</label>
          </div>

          <button type="submit" className={styles.btn}>
            광고 등록
          </button>
        </form>
      </div>
    </div>
  );
}

export default Create;
