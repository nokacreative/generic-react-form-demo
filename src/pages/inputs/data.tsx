import addDays from 'date-fns/addDays'
import { registerLocale } from 'react-datepicker'
import es from 'date-fns/locale/es'

import {
  FormSectionConfig,
  FormControlType,
  ControlRowWidth,
  DateType,
  InputType,
} from '@nokacreative/generic-react-form'
import { TestModel } from './model'

registerLocale('es', es)

export const emptyModel: TestModel = {
  name: '',
  phone: '',
  email: '',
  age: 0,
  salary: 500,
  dateTime: new Date().getTime(),
  date: new Date().getTime(),
  time: new Date().getTime(),
  rangedDate: [],
  rangedTime: [],
}

export const config: FormSectionConfig<TestModel>[] = [
  {
    headerText: 'Standard Inputs',
    controlRows: [
      {
        controls: [
          {
            type: FormControlType.INPUT,
            label: 'Text',
            propertyPath: 'name',
            placeholder: 'Placeholder',
            minLength: 3,
            maxLength: 10,
            description: (
              <span>
                Between 3 and 10 characters (<b>minLength</b> and <b>maxLength</b>)
              </span>
            ),
          },
          {
            type: FormControlType.INPUT,
            label: 'Number',
            propertyPath: 'age',
            inputType: InputType.NUMBER,
            minValue: 20,
            maxValue: 50,
            description: (
              <span>
                Between 20 and 50 characters (<b>minValue</b> and <b>maxValue</b>)
              </span>
            ),
          },
        ],
      },
      {
        controls: [
          {
            type: FormControlType.INPUT,
            label: 'Email',
            propertyPath: 'email',
            inputType: InputType.EMAIL,
            description: 'Automatically validates when required',
            isRequired: true,
          },
          {
            type: FormControlType.INPUT,
            label: 'Phone',
            propertyPath: 'phone',
            inputType: InputType.PHONE,
            description: 'Automatically validates when required',
            isRequired: true,
          },
        ],
      },
    ],
  },
  {
    headerText: 'Special Inputs',
    controlRows: [
      {
        width: ControlRowWidth.SMALL,
        controls: [
          {
            type: FormControlType.INPUT,
            label: 'Money',
            propertyPath: 'salary',
            inputType: InputType.MONEY,
            currencyCode: 'JPY',
            description: 'Can specify currency code',
          },
        ],
      },
      {
        controls: [
          {
            type: FormControlType.INPUT,
            label: 'Date and Time',
            propertyPath: 'date',
            inputType: InputType.DATE,
            dateType: DateType.DATE_AND_TIME,
          },
          {
            type: FormControlType.INPUT,
            label: 'Date Only',
            propertyPath: 'date',
            inputType: InputType.DATE,
            dateType: DateType.DATE_ONLY,
          },
          {
            type: FormControlType.INPUT,
            label: 'Time Only',
            propertyPath: 'time',
            inputType: InputType.DATE,
            dateType: DateType.TIME_ONLY,
          },
        ],
      },
      {
        controls: [
          {
            type: FormControlType.INPUT,
            label: 'Ranged',
            propertyPath: 'rangeDate',
            inputType: InputType.DATE,
            dateType: DateType.DATE_ONLY,
            earliestDate: new Date(),
            latestDate: addDays(new Date(), 20),
            isRanged: true,
            description: 'With earliest and latest date',
          },
          {
            type: FormControlType.INPUT,
            label: 'Ranged time',
            propertyPath: 'rangedTime',
            inputType: InputType.DATE,
            dateType: DateType.TIME_ONLY,
            description: 'With earliest and latest time',
            earliestTime: (() => {
              const x = new Date()
              x.setHours(8)
              return x
            })(),
            latestTime: (() => {
              const x = new Date()
              x.setHours(17)
              return x
            })(),
          },
        ],
      },
      {
        width: ControlRowWidth.MEDIUM,
        controls: [
          {
            type: FormControlType.INPUT,
            label: 'Formatted',
            propertyPath: 'rangeDate',
            inputType: InputType.DATE,
            dateType: DateType.DATE_AND_TIME,
            dateFormat: 'QQQQ',
            timeFormat: 'H O',
            locale: 'es',
            description: 'Date format, time format, and locale',
          },
        ],
      },
    ],
  },
]
