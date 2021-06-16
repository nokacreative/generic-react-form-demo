import { Form, ValidationMode } from '@nokacreative/generic-react-form'
import { SamplePage } from '../../common/samplePage'
import { config, emptyModel } from './data'
import { TestModel } from './model'

export const RadioCheckboxSample = () => (
  <SamplePage
    headerText="Radios And Checkboxes"
    description={
      <>
        <p>
          Both radios and checkboxes allow for a horizontal, vertical, or grid layout.
          When using a grid, the number of columns can be specified to be 2, 3, or 4.
          <br />
          <span className="footnote">
            Note: If viewing on mobile or small screen widths, the grids will
            automatically resize to a column count that best suits the current available
            space.
          </span>
        </p>
        <p>
          Checkboxes have additional properties to specify the minimum and/or maximum
          number of selections required. If either is specified, an overridable
          description is automatically applied to the control. Note that a required
          checkbox with no minimum specified implies that at least one selection is
          required.
        </p>
      </>
    }
    renderForm={(
      onSubmit: (data: TestModel) => void,
      submittedData: TestModel | undefined
    ) => (
      <Form
        sections={config}
        defaultValues={submittedData || emptyModel}
        validationMode={ValidationMode.BLUR | ValidationMode.SUBMIT}
        onSubmit={onSubmit}
        submitButtonText="OK"
        isReadOnly={submittedData !== undefined}
      />
    )}
  />
)
