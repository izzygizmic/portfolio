import React from 'react'
import styles from './someExampleComponent.module.scss'

type SomeExampleComponentProps = {
}

const SomeExampleComponent: React.FC<SomeExampleComponentProps> = () => {
  return (
    <div className={styles.container}>
        someExampleComponent
    </div>
  )
}

export default SomeExampleComponent
