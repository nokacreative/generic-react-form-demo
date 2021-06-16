import { Form, ValidationMode } from '@nokacreative/generic-react-form'
import './styles.scss'

import { config, emptyModel } from './data'
import { database } from '../../assets/database'
import { useFakeClient } from './fakeClient'
import { SamplePage } from '../../common/samplePage'
import { UserModel } from '../../domain/user.model'

export const Basic = () => {
  const { upload, remove, fileStatuses, progress } = useFakeClient()

  return (
    <SamplePage
      headerText="Overview"
      description={
        <>
          <p>
            An overview of all the control types and some configuration offered by this
            package.
          </p>
          <p>
            In this particular sample, all fields marked with a red asterisk are required.
          </p>
        </>
      }
      renderForm={(
        onSubmit: (data: UserModel) => void,
        submittedData: UserModel | undefined,
        sampleDataToUse: UserModel | undefined
      ) => (
        <Form
          sections={config(upload, remove, progress, fileStatuses)}
          defaultValues={sampleDataToUse || submittedData || emptyModel}
          onSubmit={onSubmit}
          formatRequiredLabels={(label: string) => (
            <>
              <span className="required-asterisk">*</span>
              {label}
            </>
          )}
          validationMode={ValidationMode.BLUR | ValidationMode.SUBMIT}
          scrollContainerSelector="main"
          isReadOnly={submittedData !== undefined}
        />
      )}
      sampleData={database.users}
      sampleDataName={(user: UserModel) => user.name}
    />
  )
}
