import { Form, ValidationMode } from '@nokacreative/generic-react-form'
import { SamplePage } from '../../common/samplePage'
import { useFakeClient } from '../basic/fakeClient'
import { config, emptyModel } from './data'
import { TestModel } from './model'

export const AttachmentSample = () => {
  const { upload, remove, fileStatuses, progress } = useFakeClient()
  return (
    <SamplePage
      headerText="Attachment Controls"
      description={
        <>
          <p>
            Otherwise known as <b>File Uploaders</b>. They support many optional
            configurations, with the basic one only requiring a callback for{' '}
            <em>onUpload()</em> and <em>onRemove()</em>.
          </p>
          <p>
            Instructional messages such as whether or not multiple files can be selected,
            and what the supported file formats are, are automatically added. They can
            also all be overriden.
          </p>
        </>
      }
      renderForm={(
        onSubmit: (data: TestModel) => void,
        submittedData: TestModel | undefined
      ) => (
        <Form
          sections={config(upload, remove, progress, fileStatuses)}
          defaultValues={submittedData || emptyModel}
          validationMode={ValidationMode.BLUR | ValidationMode.SUBMIT}
          onSubmit={onSubmit}
          submitButtonText="OK"
          isReadOnly={submittedData !== undefined}
        />
      )}
    />
  )
}
