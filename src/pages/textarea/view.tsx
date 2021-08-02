import { Form, ValidationMode } from '@nokacreative/generic-react-form'
import { SamplePage } from '../../common/samplePage'
import { config, emptyModel } from './data'
import { TestModel } from './model'

export const TextareaSample = () => (
  <SamplePage
    headerText="Textareas"
    description={
      <>
        <p>
          Textareas can be configured to have a character limit and resize directions. A
          character limit stops the user from being able to type past the specified amount
          of characters, as opposed to causing a validation error.
        </p>
        <p>
          A rich textarea supporting markdown can also be created by simply adding{' '}
          <em>useMarkdown: true</em> to the configuration. For images, a full-fledge image
          uploader can be used by specifying <em>allowImageUpload: true</em>. A previewer
          is added below rich textareas and is updated in realtime.
        </p>
        <p>
          <span className="footnote">
            Note: a read-only version of rich textareas currently just render the exact
            text content instead of the preview. A <em>MarkdownRenderer</em> is available
            to render out rich contents.
          </span>
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
