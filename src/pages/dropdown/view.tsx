import { Form, ValidationMode } from '@nokacreative/generic-react-form'
import './styles.scss'

import { SamplePage } from '../../common/samplePage'
import { config, emptyModel } from './data'
import { TestModel } from './model'

export const DropdownSample = () => (
  <SamplePage
    headerText="Dropdowns"
    description="Dropdowns have many available configurations, though the most basic one only requires a list of options. They are filterable by default."
    renderForm={(
      onSubmit: (data: TestModel) => void,
      submittedData: TestModel | undefined
    ) => (
      <Form
        sections={config(submittedData !== undefined)}
        defaultValues={submittedData || emptyModel}
        validationMode={ValidationMode.BLUR | ValidationMode.SUBMIT}
        onSubmit={onSubmit}
        submitButtonText="OK"
        isReadOnly={submittedData !== undefined}
      />
    )}
  />
)
