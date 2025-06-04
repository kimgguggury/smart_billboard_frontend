import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { CDBContainer } from 'cdbreact';
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from 'chart.js';
import axios from 'axios';
import Navbars from '../../components/Nav';

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const Home = () => {
  const [ads, setAds] = useState([]);
  const [selectedAdId, setSelectedAdId] = useState(null);
  const [viewCounts, setViewCounts] = useState({ M: 0, W: 0 });

  // 🔗 절대경로 상수화 (호스트 주소 재사용 가능)
  const BASE_URL = 'http://localhost:5000';

  // 광고 목록 불러오기
  useEffect(() => {
    axios.get(`${BASE_URL}/api/my-ads`, { withCredentials: true })
      .then(res => {
        setAds(res.data);
        if (res.data.length > 0) {
          setSelectedAdId(res.data[0].ad_id); // 기본 선택값
        }
      })
      .catch(err => console.error(err));
  }, []);

  // 광고 선택 시 view count 조회
  useEffect(() => {
  if (selectedAdId === null) return;
    axios.get(`${BASE_URL}/api/ad-view-by-age-gender/${selectedAdId}`)
      .then(res => {
        setViewCounts(res.data);
        console.log("📊 받아온 통계:", res.data);
      })
      .catch(err => console.error(err));
  }, [selectedAdId]);

  const chartData = {
  labels: ['10대', '20대', '30대', '40대', '50대', '60대', '70대 이상'],
  datasets: [
    {
      label: '남성',
      backgroundColor: 'rgba(71, 225, 167, 0.5)',
      borderColor: 'rgb(71, 225, 167)',
      borderWidth: 1,
      data: viewCounts.M || [0, 0, 0, 0, 0, 0, 0],
    },
    {
      label: '여성',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
      borderColor: 'rgb(255, 99, 132)',
      borderWidth: 1,
      data: viewCounts.W || [0, 0, 0, 0, 0, 0, 0],
    },
  ],
};


  return (
    <div style={{ backgroundColor: '#e6e9f3', minHeight: '100vh' }}>
      <Navbars />

      <div style={{ padding: '2rem' }}>
        <h3>📌 광고 선택</h3>
        <select
          onChange={(e) => setSelectedAdId(Number(e.target.value))}
          value={selectedAdId || ''}
          style={{ padding: '0.5rem', fontSize: '1rem' }}
        >
          {ads.map((ad) => (
            <option key={ad.ad_id} value={ad.ad_id}>
              {ad.title}
            </option>
          ))}
        </select>
      </div>

      <CDBContainer>
  <h3 className="mt-3">📊 성별별 조회 수</h3>
  <Bar
    data={chartData}
    options={{
      responsive: true,
      plugins: {
        legend: {
          labels: {
            font: {
              size: 16,
            },
          },
        },
      },
      scales: {
        x: {
          ticks: {
            font: {
              size: 16,
            },
          },
        },
        y: {
          ticks: {
            font: {
              size: 16,
            },
          },
          title: {
            display: true,
            text: '조회 수',
            font: {
              size: 18,
            },
          },
        },
      },
    }}
  />
</CDBContainer>
    </div>
  );
};

export default Home;
