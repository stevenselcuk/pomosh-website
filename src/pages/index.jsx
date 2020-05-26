import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { useApp } from '../hooks/use-app'
import { useMeta } from '../hooks/use-meta'
import SEO from '../components/atoms/SEO'
import styles from './index.module.css'
import { ReactComponent as DownloadBadge } from '../images/DownloadBadgeDark.svg'

Home.propTypes = {
  pageContext: PropTypes.object.isRequired
}

function Home({ pageContext }) {
  const { basics } = useApp()
  const meta = useMeta()

  const image = `.${meta.img.childImageSharp.resize.src}`

  return (
    <>
      <SEO title={basics.name} description={basics.label} />
      <div className={styles.hero}>
        <div>
          <div className={styles.hugetitle}>🍅 Pomosh</div>
          <div className={styles.desc}>
            is your next awesome Pomodoro Technique Assistant. Lives in your in
            in your menubar.
          </div>
          <div className={styles.badge}>
            <a
              href="https://apps.apple.com/us/app/garlic-for-remote-jobs/id1509031122?ls=1"
              title="Download the Pomosh on the App Store"
            >
              <DownloadBadge />
            </a>
          </div>
        </div>

        <img
          src={image}
          className={styles.productimage}
          alt="iMac Mockup"
          title="Pomosh"
        />
      </div>
    </>
  )
}

export default memo(Home)
