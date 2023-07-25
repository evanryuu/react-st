import { useTranslation } from 'react-i18next'

const About = () => {
  const { t } = useTranslation()
  return (
    <div>
      { t('about.thisIsAboutPage') }
    </div>
  )
}

export default About
