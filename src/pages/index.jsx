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
          <div className={styles.hugetitle}>🍅Pomosh</div>
          <div className={styles.desc}>
            is your next awesome Pomodoro Technique Assistant. For 📱iOS,
            ⌚️WatchOS and 💻macOS.
          </div>
          <div className={styles.badge}>
            <a
              href="https://apps.apple.com/us/app/pomosh/id1515791898?ls=1"
              title="Download the Pomosoh on the App Store"
            >
              <DownloadBadge />
            </a>
          </div>
        </div>

        <img
          src={image}
          className={styles.productimage}
          alt="Apple Watch Mockup"
          title="Pomosh for Apple Watch"
        />
      </div>
    </>
  )
}

export default memo(Home)
