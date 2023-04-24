import React from 'react'
import { Link } from 'react-router-dom'

const UpgragePack = () => {
  return (
    <div className="continer">
        <div className="row">
            <div className="upgradePack-box">
                <div className="upgradePack-title">
                    <p>upgrade your package</p>
                </div>

                <div className="upgrade-sub-box">
                    <p>Upgrade your current package to get </p>
                    <p>verified leads and view you lead statistics</p>
                </div>

                <div className="upgrade-button">
                    <Link to='/vendor/plan/subcreation' target='_blank' className='link-button'><button>upgrade</button></Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default UpgragePack