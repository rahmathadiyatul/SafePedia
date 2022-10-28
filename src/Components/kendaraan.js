import React, { useEffect } from 'react'
import { useState } from 'react'
import './stylesheet/karyawan.css'


const Kendaraan = (props) => {
    const [pages, setPages] = useState(0)
    useEffect(() => {
        let count = Math.floor(kendaraan.length / 8) + 1
        setPages(count)
        console.log(pages)
    }, [])

    const { kendaraan } = props
    const show = () => {
        console.log(pages)
    }
    const temp = []
    for (let i = 0; i < 8; i++) {
        temp.push(kendaraan[i])
    }

    return (
        <div style={{ margin: '15px 40px', display: 'flex', flexDirection: 'column' }}>
            <header style={{ fontSize: '22px', textDecoration: 'underline', }}>Data Kendaraan Perusahaan</header>
            <div style={{ width: '450px', margin: '50px 0', height: '350px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start' }}>
                <header style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <form>
                        <input className='jumlah-data' type='text'></input>
                    </form>
                    <form>
                        <input className='cari' type='text'></input>
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
                        {kendaraan.length < 8 ?
                            kendaraan.map((item, i) =>
                                <tr>
                                    <td style={{ borderRight: '3px solid black', width: '10%' }}>{i + 1}</td>
                                    <td style={{ width: '18%' }}>{item.tipe}</td>
                                    <td style={{ width: '18%' }}>{item.warna}</td>
                                    <td style={{ width: '27%' }}>{item.tanggalBeli}</td>
                                    <td style={{ width: '27%' }}>{item.jumlahRoda}</td>
                                </tr>)
                            :
                            temp.map((item, i) =>
                                <tr>
                                    <td style={{ borderRight: '3px solid black', width: '10%' }}>{i + 1}</td>
                                    <td style={{ width: '18%' }}>{item.tipe}</td>
                                    <td style={{ width: '18%' }}>{item.warna}</td>
                                    <td style={{ width: '27%' }}>{item.tanggalBeli}</td>
                                    <td style={{ width: '27%' }}>{item.jumlahRoda}</td>
                                </tr>)
                        }
                    </tbody>
                </table>
                <footer style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <div style={{ margin: 0 }}>
                        <button className='iterate'>1</button>
                        <button className='non-iterate'>2 . . .</button>
                    </div>
                    <div>
                        <select name='tipe' id='tipe' style={{ backgroundColor: 'white', border: '3px solid black', marginTop: '3px', textAlign: 'center', fontSize: 'small', fontWeight: 'bold', height: '25px' }} className='tipe'>Tipe
                            <option value="All">Tipe</option>
                            <option value="Mobil">Mobil</option>
                            <option value="Motor">Motor</option>
                        </select>
                    </div>
                </footer>
            </div>
        </div>
    )
}

export default Kendaraan
