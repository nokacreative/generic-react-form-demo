import React from 'react'
import { Form, ValidationMode } from '@nokacreative/generic-react-form'

import { config, emptyModel } from './data'
import { SamplePage } from '../../common/samplePage'
import { TestModel } from './model'

export const ConditionalSample = () => (
  <SamplePage
    headerText="Conditional configurations"
    description={
      <>
        <p>
          All sections and individual fields can be toggled dynamically based off the
          current form data in the following ways:
        </p>
        <ul>
          <li>Show or Hide</li>
          <li>Make required or not required</li>
          <li>Disable or enable</li>
          <li>Make read-only or not</li>
        </ul>
        <p>
          Note that the most specific setting will be used. For example, if the entire
          form is set to read-only, but a specific section or field sets{' '}
          <code>isReadOnly: false</code>, then only that section or field will not be
          read-only.
        </p>
        <p>
          This is demonstrated here with the <em>Favourite food</em> field under the{' '}
          <em>Turtle</em> selection: if you set the age to anything over 0, the field will
          be enabled. On submission, the form is set to read-only, but the condition for
          enabling the field still holds true, thus causing it to still be enabled.
          <br />
          <span className="footnote">
            (Note: To get around this, the configuration should include checks for whether
            or not the form was submitted.)
          </span>
        </p>
        <p>
          The exception to this is for hidden sections, which will not render (and thus go
          through and check) any of its fields for optimization; thus, a section marked as
          hidden with one specific field set to <code>isHidden: false</code> will still be
          entirely hidden.
        </p>
      </>
    }
    renderForm={(
      onSubmit: (data: TestModel) => void,
      submittedData: TestModel | undefined,
      sampleDataToUse: TestModel | undefined
    ) => {
      const isSubmitted = submittedData !== undefined
      return (
        <Form
          sections={config}
          defaultValues={sampleDataToUse || submittedData || emptyModel}
          onSubmit={onSubmit}
          validationMode={
            ValidationMode.LOAD | ValidationMode.BLUR | ValidationMode.SUBMIT
          }
          scrollContainerSelector="main"
          isReadOnly={isSubmitted}
          disableSubmitWhenInvalid
          hideErrorsOnLoad
        />
      )
    }}
  />
)
