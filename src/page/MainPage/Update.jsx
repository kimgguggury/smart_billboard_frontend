// import React, { useEffect, useState } from 'react';
// import styles from '../../css/Create.module.css';
// import Navbars from '../../components/Nav';
// import Create from './Create';
// import Dropdown from 'react-bootstrap/Dropdown';
// import DropdownButton from 'react-bootstrap/DropdownButton';


// function Update() {
//   const [ads, setAds] = useState([]);
//   const [selectedAdIndex, setSelectedAdIndex] = useState(0);

//   const [formData, setFormData] = useState({
//     title: '',
//     target_sex: '',
//     target_age: '',
//   });

//   const [imageFile, setImageFile] = useState(null);
//   const [existingImagePath, setExistingImagePath] = useState(null);

//   // 1. 로그인 사용자 광고 목록 불러오기
//   useEffect(() => {
//     async function fetchUserAds() {
//       try {
//         const res = await fetch('http://localhost:5000/api/my-ads', {
//           credentials: 'include', // 세션 쿠키 포함
//         });
//         const data = await res.json();
//         setAds(data);
//         if (data.length > 0) {
//           setSelectedAdIndex(0);
//           fillForm(data[0]);
//         }
//       } catch (err) {
//         alert('광고 목록을 불러오는데 실패했습니다.');
//       }
//     }
//     fetchUserAds();
//   }, []);

//   // 2. 선택한 광고 데이터를 폼에 채우는 함수
//   const fillForm = (ad) => {
//     setFormData({
//       title: ad.title,
//       target_sex: ad.target_sex,
//       target_age: ad.target_age,
//     });
//     setExistingImagePath(ad.image_path);
//     setImageFile(null); // 초기화
//   };

//   // 3. 드롭다운 변경 시 폼 데이터 변경
//   const handleSelectChange = (e) => {
//     const index = parseInt(e.target.value, 10);
//     setSelectedAdIndex(index);
//     fillForm(ads[index]);
//   };

//   // 4. 폼 입력 변경 처리
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleFileChange = (e) => {
//     setImageFile(e.target.files[0]);
//   };

//   // 5. 수정 제출 (선택된 광고 ID를 이용)
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (ads.length === 0) return;

//     const adId = ads[selectedAdIndex].ad_id;
//     const form = new FormData();
//     form.append('title', formData.title);
//     form.append('target_sex', formData.target_sex);
//     form.append('target_age', formData.target_age);
//     if (imageFile) form.append('image', imageFile);

//     try {
//       const res = await fetch(`http://localhost:5000/api/ad/${adId}`, {
//         method: 'PUT',
//         body: form,
//         credentials: 'include',
//       });
//       const result = await res.json();
//       if (res.ok) {
//         alert('✅ 광고 수정 성공!');
//         // 수정 후 광고 리스트 새로 불러오거나 상태 업데이트 필요할 수 있음
//       } else {
//         alert('❌ 수정 실패: ' + result.message);
//       }
//     } catch (err) {
//       alert('❌ 에러 발생: ' + err.message);
//     }
//   };

//   return (
//     <>
//       <Navbars />
//       <div className={styles['login-box']}>
//         <h2>내 광고 수정하기</h2>

//         {ads.length > 0 ? (
//           <>
//             <form onSubmit={handleSubmit}>
//               <div className={styles['user-box']}>
//                 <input
//                   type="text"
//                   name="title"
//                   value={formData.title}
//                   onChange={handleChange}
//                   required
//                 />
//                 <label>광고 제목</label>
//               </div>

//               <div className={styles['user-box']}>
//                 <input type="file" accept="image/*" onChange={handleFileChange} />
//                 <label style={{ top: '-20px', fontSize: '12px', color: '#03e9f4' }}>
//                   이미지 변경 (선택 사항)
//                 </label>

//                 {/* {existingImagePath && !imageFile && (
//                   <img
//                     src={`http://localhost:5000/static/${existingImagePath.replace(/\\/g, '/')}`}
//                     alt="기존 이미지"
//                     style={{ maxWidth: '100%', marginTop: '10px' }}
//                   />
//                 )} */}
//               </div>

//               <div className={styles['user-box']}>
//                 <select
//                   name="target_sex"
//                   value={formData.target_sex}
//                   onChange={handleChange}
//                   required
//                 >
//                   <option value="" disabled hidden></option>
//                   <option value="M">남성</option>
//                   <option value="W">여성</option>
//                 </select>
//                 <label>성별</label>
//               </div>

//               <div className={styles['user-box']}>
//                 <select
//                   name="target_age"
//                   value={formData.target_age}
//                   onChange={handleChange}
//                   required
//                 >
//                   <option value="" disabled hidden></option>
//                   <option value={1}>10대</option>
//                   <option value={2}>20대</option>
//                   <option value={3}>30대</option>
//                   <option value={4}>40대</option>
//                   <option value={5}>50대</option>
//                   <option value={6}>60대 이상</option>
//                 </select>
//                 <label>연령대</label>
//               </div>
//                <select value={selectedAdIndex} onChange={handleSelectChange}>
//               {ads.map((ad, idx) => (
//                 <option key={ad.ad_id} value={idx}>
//                   {ad.title}
//                 </option>
//               ))}
//             </select>

//               <button type="submit" className={styles.btn}>
//                 광고 수정
//               </button>
              
//             </form>
//           </>
//         ) : (
//           <p>등록된 광고가 없습니다.</p>
//         )}
//       </div>
//     </>
//   );
// }

// export default Update;
import React, { useEffect, useState } from 'react';
import styles from '../../css/Create.module.css';
import Navbars from '../../components/Nav';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Button from 'react-bootstrap/Button';
function Update() {
  const [ads, setAds] = useState([]);
  const [selectedAdIndex, setSelectedAdIndex] = useState(0);

  const [formData, setFormData] = useState({
    title: '',
    target_sex: '',
    target_age: '',
  });

  const [imageFile, setImageFile] = useState(null);

  // 1. 로그인 사용자 광고 목록 불러오기
  useEffect(() => {
    async function fetchUserAds() {
      try {
        const res = await fetch('http://localhost:5000/api/my-ads', {
          credentials: 'include', // 세션 쿠키 포함
        });
        const data = await res.json();
        setAds(data);
        if (data.length > 0) {
          setSelectedAdIndex(0);
          fillForm(data[0]);
        }
      } catch (err) {
        alert('광고 목록을 불러오는데 실패했습니다.');
      }
    }
    fetchUserAds();
  }, []);

  // 2. 선택한 광고 데이터를 폼에 채우는 함수
  const fillForm = (ad) => {
    setFormData({
      title: ad.title,
      target_sex: ad.target_sex,
      target_age: ad.target_age,
    });
    setImageFile(null); // 초기화
  };

  // 3. 드롭다운 변경 시 폼 데이터 변경
  const handleSelectChange = (eventKey) => {
    const index = Number(eventKey);
    setSelectedAdIndex(index);
    fillForm(ads[index]);
  };

  // 4. 폼 입력 변경 처리
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setImageFile(e.target.files[0]);
  };

  // 5. 수정 제출 (선택된 광고 ID를 이용)
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (ads.length === 0) return;

    const adId = ads[selectedAdIndex].ad_id;
    const form = new FormData();
    form.append('title', formData.title);
    form.append('target_sex', formData.target_sex);
    form.append('target_age', formData.target_age);
    if (imageFile) form.append('image', imageFile);

    try {
      const res = await fetch(`http://localhost:5000/api/ad/${adId}`, {
        method: 'PUT',
        body: form,
        credentials: 'include',
      });
      const result = await res.json();
      if (res.ok) {
        alert('✅ 광고 수정 성공!');
        // 수정 후 광고 리스트 새로 불러오거나 상태 업데이트 필요할 수 있음
      } else {
        alert('❌ 수정 실패: ' + result.message);
      }
    } catch (err) {
      alert('❌ 에러 발생: ' + err.message);
    }
  };
  const handleDelete = async () => {
  if (ads.length === 0) return;

  const confirmDelete = window.confirm("정말 이 광고를 삭제하시겠습니까?");
  if (!confirmDelete) return;

  const adId = ads[selectedAdIndex].ad_id;

  try {
    const res = await fetch(`http://localhost:5000/api/ad/${adId}`, {
      method: 'DELETE',
      credentials: 'include',
    });
    const result = await res.json();
    if (res.ok) {
      alert("✅ 광고 삭제 성공!");

      // 목록에서 제거
      const updatedAds = [...ads];
      updatedAds.splice(selectedAdIndex, 1);
      setAds(updatedAds);

      if (updatedAds.length > 0) {
        setSelectedAdIndex(0);
        fillForm(updatedAds[0]);
      } else {
        setFormData({ title: '', target_sex: '', target_age: '' });
        setImageFile(null);
      }
    } else {
      alert("❌ 삭제 실패: " + result.message);
    }
  } catch (err) {
    alert("❌ 에러 발생: " + err.message);
  }
};


  return (
    <div 
    style={{
    backgroundColor: '	#e6e9f3',
    minHeight: '100vh',
  }}>
      <Navbars />
      <div className={styles['login-box']}>
        <h2>Update Ad</h2>

        {ads.length > 0 ? (
          <>
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
                <input type="file" accept="image/*" onChange={handleFileChange} />
                <label style={{ top: '-20px', fontSize: '12px', color: '#03e9f4' }}>
                  이미지 변경 (선택 사항)
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
            <div className="d-flex gap-2 align-items-center mb-3">
              <DropdownButton
                id="dropdown-basic-button"
                title={"광고 선택"}
                onSelect={handleSelectChange}
              >
                {ads.map((ad, idx) => (
                  <Dropdown.Item eventKey={idx} key={ad.ad_id}>
                    {ad.title}
                  </Dropdown.Item>
                ))}
              </DropdownButton>

              <Button variant="outline-danger" onClick={handleDelete}>
                광고 삭제
              </Button>
            </div>

              <button type="submit" className={styles.btn}>
                광고 수정
              </button>
            </form>
            
          </>
        ) : (
          <p>등록된 광고가 없습니다.</p>
        )}
      </div>
    </div>
  );
}

export default Update;
