import React from 'react'

const CvDownloadBtn = () => {
  return (
    <a href="/Harshal-Mukte-Resume.pdf" download>
      <button className='p-4 font-bold'>Download CV</button>
      <span className="AncharBtnAnimation"></span>
    </a>
  )
}

export default CvDownloadBtn