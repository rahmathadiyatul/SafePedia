import './App.css';
import Http from './Axios/Config';
import React, { useEffect, useState } from 'react';
import Karyawan from './Components/karyawan';
import Kendaraan from './Components/kendaraan';

function App() {
  const [page, setPage] = useState(true)
  const [karyawan, setKaryawan] = useState([])
  const [kendaraan, setKendaraan] = useState([])

  const getDataKaryawan = () => {
    Http.get('Karyawan').then((res) => {
      if (res.data.length == 0) {
        console.log(res.data)
      } else {
        const datas = res.data
        setKaryawan(datas)
      }
    }).catch((err) => {
      console.log(err)
    })
  }
  const getDataKendaraan = () => {
    Http.get('Kendaraan').then((res) => {
      if (res.data.length == 0) {
        console.log(res.data)
      } else {
        setKendaraan(res.data)
        console.log(kendaraan)
      }
    }).catch((err) => {
      console.log(err)
    })
  }

  const handleClick = () => {
    setPage(true)
    getDataKaryawan()
  }
  const handleClick2 = () => {
    setPage(false)
    getDataKendaraan()
  }

  const datas = { id: 5, jumlahAnak: 0, nama: "Adi", tanggalLahir: "1994-04-17T00:00:00" }
  return (
    <div className='App'>
      <div className='App-menu'>
        <button onClick={handleClick} className='App-menu-li'>Data Karyawan</button>
        <button onClick={handleClick2} className='App-menu-li'>Data Kendaraan Perusahaan</button>
      </div>
      <div className='App-content'>
        {page ?
          <Karyawan karyawan={karyawan} border={page}></Karyawan>
          :
          <Kendaraan kendaraan={kendaraan}></Kendaraan>
        }
      </div>
    </div>
  );
}

export default App;
