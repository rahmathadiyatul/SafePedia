import React, { useEffect } from 'react'
import { useState } from 'react'
import './stylesheet/karyawan.css'

const Karyawan = (props) => {
    const [pages, setPages] = useState([])
    const [cari, setCari] = useState('')
    const [jumlah, setJumlah] = useState(0)

    useEffect(() => {
        pageCount()
    }, [])

    const pageCount = () => {
        let count = Math.floor(karyawan.length / 8) + 1
        let page = []
        for (let i = 0; i < count; i++) {
            page.push(i + 1)
        }
        setPages(page)
    }


    const { border, karyawan } = props

    const showData = karyawan.filter((post, i) => {
        if (cari === '') {
            console.log(post)
            return post
        }
        else if (post.nama.toLowerCase().includes(cari.toLowerCase())) {
            const result = Object.entries(post).slice(0, jumlah)
            return result;
        }
        else if (post.umur.toString().includes(cari)) {
            const result = Object.entries(post).slice(0, jumlah)
            return result;
        }
        else if (post.jumlahAnak.toString().includes(cari.toLowerCase())) {
            const result = Object.entries(post).slice(0, jumlah)
            return result;
        }
        else if (post.tanggalLahir.slice(0, 10).toString().includes(cari.toLowerCase())) {
            const result = Object.entries(post).slice(0, jumlah)
            return result;
        }
    }).map((item, i) =>
        <tr>
            <td style={{ margin: 0, paddingLeft: "5px", width: '10%', borderRight: border ? '3px solid black' : '' }}>{i + 1}</td>
            <td style={{ margin: 0, paddingLeft: "5px", width: '18%', borderRight: border ? '3px solid black' : '' }}>{item.nama}</td>
            <td style={{ margin: 0, paddingLeft: "5px", width: '27%', borderRight: border ? '3px solid black' : '' }}>{item.tanggalLahir.slice(0, 10)}</td>
            <td style={{ margin: 0, paddingLeft: "5px", width: '18%', borderRight: border ? '3px solid black' : '' }}>{item.umur}</td>
            <td style={{ margin: 0, paddingLeft: "5px", width: '27%' }}>{item.jumlahAnak}</td>
        </tr>)

    return (
        <div style={{ margin: '15px 40px', display: 'flex', flexDirection: 'column' }}>
            <header style={{ fontSize: '22px', textDecoration: 'underline', }}>Data Karyawan</header>
            <div style={{ width: '450px', margin: '50px 0', height: '350px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start' }}>
                <header style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <form>
                        <input id={jumlah} onChange={(e) => setJumlah(e.target.value)} className='jumlah-data' type='number'></input>
                    </form>
                    <form>
                        <input id={cari} onChange={(e) => setCari(e.target.value)} className='cari' type='text'></input>
                    </form>
                </header>
                <table>
                    <thead>
                        <tr>
                            <th style={{ borderRight: '3px solid black', margin: 0, padding: '5px', width: '10%' }}>No</th>
                            <th style={{ margin: 0, padding: '5px', width: '18%', borderRight: border ? '3px solid black' : '', textAlign: 'left' }}>Nama</th>
                            <th style={{ margin: 0, padding: '5px', width: '27%', borderRight: border ? '3px solid black' : '', textAlign: 'left' }}>Tanggal Lahir</th>
                            <th style={{ margin: 0, padding: '5px', width: '18%', borderRight: border ? '3px solid black' : '' }}>Umur</th>
                            <th style={{ margin: 0, padding: '5px', width: '27%' }}>Jumlah Anak</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            showData
                        }
                    </tbody>
                </table>
                <footer>
                    {
                        pages.map((data, index) =>
                            <button className='iterate'>{index + 1}</button>
                        )
                    }
                </footer>
            </div>
        </div >
    )
}

export default Karyawan
