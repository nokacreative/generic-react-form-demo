import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

import './styles.scss'

type Props<T> = {
  headerText: string
  description: React.ReactNode
  children?: React.ReactNode
  renderForm?: (
    onSubmit: (data: T) => void,
    submittedData: T | undefined,
    sampleDataToUse: T | undefined
  ) => React.ReactNode
  sampleData?: T[]
  sampleDataName?: (data: T) => string
}

export function SamplePage<T>(props: Props<T>) {
  const [submittedData, setSubmittedData] = useState<T>()
  const [sampleDataToUse, setSampleDataToUse] = useState<T>()
  return (
    <article className="sample-page">
      <h1>{props.headerText}</h1>
      <div className="description">
        {props.description}
        {props.sampleData && (
          <section className="sample-data-section">
            <p>Check out some sample data:</p>
            {props.sampleData.map((d, i) => (
              <button
                type="button"
                className="sample-selection"
                key={`sample-data-${i}`}
                onClick={() => setSampleDataToUse(d)}
              >
                {(props.sampleDataName as Function)(d)}
              </button>
            ))}
          </section>
        )}
      </div>

      {submittedData && (
        <div className="banner">
          <FontAwesomeIcon icon={faCheck} />
          <span>Submitted!</span>
        </div>
      )}
      {props.renderForm &&
        props.renderForm(
          (data: T) => setSubmittedData(data),
          submittedData,
          sampleDataToUse
        )}
      {props.children}
    </article>
  )
}
