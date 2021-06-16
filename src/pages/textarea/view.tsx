import { Form, ValidationMode } from '@nokacreative/generic-react-form'
import { SamplePage } from '../../common/samplePage'
import { config, emptyModel } from './data'
import { TestModel } from './model'

export const TextareaSample = () => (
  <SamplePage
    headerText="Textareas"
    description="Textareas can be configured to have a character limit and resize directions. A character limit stops the user from being able to type past the specified amount of characters, as opposed to causing a validation error."
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
