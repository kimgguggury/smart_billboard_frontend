import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';           // ✅ 오타 수정
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Button from 'react-bootstrap/Button'; // ✅ 로그아웃 버튼용

function Navbars() {
  const navigate = useNavigate();

const handleLogout = async () => {
  try {
    await axios.post('http://localhost:5000/api/logout', {}, { withCredentials: true });
    alert('로그아웃 되었습니다.');
    navigate('/login');
  } catch (error) {
    console.error('❌ 로그아웃 실패:', error);
    alert('로그아웃 중 오류가 발생했습니다.');
  }
};

  return (                                       // ✅ return 추가
    <Navbar bg="dark" variant="dark" style={{ height: '7rem' }}>
  <div style={{ width: '100%', display: 'flex', alignItems: 'center', margin : "1rem" }}>
    <Navbar.Brand href="/" style={{ fontSize: '3rem', marginRight: '30px' }}>
      Smart-Bilboard
    </Navbar.Brand>

    <Nav style={{ display: 'flex' }}>
      <Nav.Link href="/create" style={{ margin: '0 2vw', fontSize: '2rem' }}>
        광고신청
      </Nav.Link>
      <Nav.Link href="/update" style={{ margin: '0 2vw', fontSize: '2rem' }}>
        광고수정
      </Nav.Link>

    </Nav>

    <div style={{ marginLeft: 'auto',marginRight: '20px'  }}>
      <Button
  variant="outline-light"
  onClick={handleLogout}
    style={{
      fontSize: '1.5rem',     // 텍스트 크기
      padding: '0.6rem 1.2rem'  // 버튼 크기
    }}
    >
    로그아웃
  </Button>

    </div>
  </div>
</Navbar>

  );
}

export default Navbars;
