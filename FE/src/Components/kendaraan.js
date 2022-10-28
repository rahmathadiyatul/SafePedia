import React, { useEffect } from 'react'
import { useState } from 'react'
import './stylesheet/karyawan.css'


const Kendaraan = (props) => {
    const [pages, setPages] = useState([])
    const [cari, setCari] = useState('')
    const [tipeKendaraan, setTipeKendaraan] = useState('')
    const [jumlah, setJumlah] = useState(0)
    const { kendaraan } = props

    useEffect(() => {
        pageCount()
    }, [])

    const pageCount = () => {
        let count = Math.floor(kendaraan.length / 8) + 1
        let page = []
        for (let i = 0; i < count; i++) {
            page.push(i + 1)
        }
        setPages(page)
    }

    const showData = kendaraan.filter((post, i) => {
        if (cari === '') {
            console.log(post)
            return post
        } else if (post.tipe.toLowerCase().includes(tipeKendaraan.toLowerCase())) {
            if (post.tipe.toLowerCase().includes(cari.toLowerCase())) {
                const result = Object.entries(post).slice(0, jumlah)
                return result;
            }
            else if (post.warna.toLowerCase().includes(cari.toLowerCase())) {
                const result = Object.entries(post).slice(0, jumlah)
                return result;
            }
            else if (post.jumlahRoda.toString().includes(cari.toLowerCase())) {
                const result = Object.entries(post).slice(0, jumlah)
                return result;
            }
            else if (post.tanggalBeli.toString().includes(cari.toLowerCase())) {
                const result = Object.entries(post).slice(0, jumlah)
                return result;
            }
        } else if (post.tipe.toLowerCase().includes(tipeKendaraan.toLowerCase())) {
            if (post.tipe.toLowerCase().includes(cari.toLowerCase())) {
                const result = Object.entries(post).slice(0, jumlah)
                return result;
            }
            else if (post.warna.toLowerCase().includes(cari.toLowerCase())) {
                const result = Object.entries(post).slice(0, jumlah)
                return result;
            }
            else if (post.jumlahRoda.toString().includes(cari.toLowerCase())) {
                const result = Object.entries(post).slice(0, jumlah)
                return result;
            }
            else if (post.tanggalBeli.toString().includes(cari.toLowerCase())) {
                const result = Object.entries(post).slice(0, jumlah)
                return result;
            }
        }
    }).map((item, i) =>
        <tr>
            <td style={{ borderRight: '3px solid black', width: '10%' }}>{i + 1}</td>
            <td style={{ width: '18%' }}>{item.tipe}</td>
            <td style={{ width: '18%' }}>{item.warna}</td>
            <td style={{ width: '27%' }}>{item.tanggalBeli}</td>
            <td style={{ width: '27%' }}>{item.jumlahRoda}</td>
        </tr>)

    return (
        <div style={{ margin: '15px 40px', display: 'flex', flexDirection: 'column' }}>
            <header style={{ fontSize: '22px', textDecoration: 'underline', }}>Data Kendaraan Perusahaan</header>
            <div style={{ width: '450px', margin: '50px 0', height: '350px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start' }}>
                <header style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <form>
                        <input id={jumlah} onChange={(e) => setJumlah(e.target.value)} className='jumlah-data' type='jumlah'></input>
                    </form>
                    <form>
                        <input id={cari} onChange={(e) => setCari(e.target.value)} className='cari' type='text'></input>
                    </form>
                </header>
                <table className='table-headers'>
                    <thead onClick={show}>
                        <tr>
                            <th style={{ borderRight: '3px solid black', width: '10%' }}>No</th>
                            <th style={{ paddingLeft: '10px', width: '18%', textAlign: 'left' }}>Tipe</th>
                            <th style={{ paddingLeft: '10px', width: '18%', textAlign: 'left' }}>Warna</th>
                            <th style={{ paddingLeft: '10px', width: '27%', textAlign: 'left' }}>Tanggal Beli</th>
                            <th style={{ paddingLeft: '10px', width: '27%', textAlign: 'left' }}>Jumlah Roda</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            showData
                        }
                    </tbody>
                </table>
                <footer style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <div style={{ margin: 0 }}>
                        {
                            pages.map((data, index) =>
                                <button className='iterate'>{index + 1}</button>
                            )
                        }
                    </div>
                    <div>
                        <select name='tipe' id='tipe' style={{ backgroundColor: 'white', border: '3px solid black', marginTop: '3px', textAlign: 'center', fontSize: 'small', fontWeight: 'bold', height: '25px' }} className='tipe'>Tipe
                            <option value="All">Tipe</option>
                            <option onChange={(e) => setTipeKendaraan(e.target.value)} value="Mobil">Mobil</option>
                            <option onChange={(e) => setTipeKendaraan(e.target.value)} value="Motor">Motor</option>
                        </select>
                    </div>
                </footer>
            </div>
        </div>
    )
}

export default Kendaraan
