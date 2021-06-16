import React from 'react'
import { Form, ValidationMode } from '@nokacreative/generic-react-form'

import { config, emptyModel } from './data'
import { database } from '../../assets/database'
import { SamplePage } from '../../common/samplePage'
import { PartyModel } from '../../domain/party.model'

export const ArraySample = () => (
  <SamplePage
    headerText="Arrays"
    description={
      <>
        The array section in this form is the <em>Guests to invite</em> section. Array
        entries can be added, removed, with the following optional functionality:
        <ul>
          <li>Allow entries to be reordered</li>
          <li>Add an empty entry when the last one is removed</li>
          <li>
            Specification of a name for each entry (&quot;Guest&quot; in this sample)
          </li>
        </ul>
      </>
    }
    renderForm={(
      onSubmit: (data: PartyModel) => void,
      submittedData: PartyModel | undefined,
      sampleDataToUse: PartyModel | undefined
    ) => (
      <Form
        sections={config}
        defaultValues={sampleDataToUse || submittedData || emptyModel}
        onSubmit={onSubmit}
        validationMode={ValidationMode.BLUR}
        scrollContainerSelector="main"
        isReadOnly={submittedData !== undefined}
      />
    )}
    sampleData={database.parties}
    sampleDataName={(party: PartyModel) => party.venue}
  />
)
