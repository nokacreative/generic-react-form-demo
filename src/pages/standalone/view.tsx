import { useState } from 'react'
import './styles.scss'

import { SamplePage } from '../../common/samplePage'
import {
  DateInput,
  DateType,
  Input,
  InputType,
  Checkbox,
  Radio,
  Dropdown,
  InlineError,
} from '@nokacreative/generic-react-form'

export const StandaloneSample = () => {
  const [showError, setShowError] = useState<boolean>(false)

  return (
    <SamplePage
      headerText="Standalone Controls"
      description="All controls, including error messages, can be used independently, outside of forms."
    >
      <label>Text Input</label>
      <Input
        type={InputType.TEXT}
        htmlProps={{ placeholder: 'Type "hello" to see something happen!' }}
        onChange={(value: string) => {
          setShowError(value === 'hello')
        }}
      />
      {showError && <InlineError message="Something happened" />}

      <label>Date Input</label>
      <DateInput
        dateType={DateType.DATE_AND_TIME}
        onChange={() => {
          /* Skip */
        }}
      />

      <br />
      <p>Select your desired option:</p>
      <Dropdown
        options={[
          { value: 'a', text: 'None of these' },
          { value: 'b', text: 'Sample Controls' },
          { value: 'c', text: 'Will do anything' },
          { value: 'd', text: 'FYI' },
        ]}
        id="standalone-dropdown"
        defaultValue="a"
      />

      <br />
      <p>Agree to our terms and conditions:</p>
      <Checkbox label="Sure" />

      <br />
      <p>View this page in:</p>
      <Radio label="Normal mode" name="pageMode" value="normal" />
      <Radio label="Compact mode" name="pageMode" value="compact" />
    </SamplePage>
  )
}
