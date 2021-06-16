import { Form, ValidationMode } from '@nokacreative/generic-react-form'

import { SamplePage } from '../../common/samplePage'
import { config, emptyModel } from './data'
import { TestModel } from './model'

export const InputsSample = () => (
  <SamplePage
    headerText="Input"
    description="All available input types and their configurations."
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
