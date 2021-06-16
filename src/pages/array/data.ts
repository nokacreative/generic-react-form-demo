import {
  FormSectionConfig,
  ControlRowWidth,
  FormControlType,
  DateType,
  InputType,
} from '@nokacreative/generic-react-form'
import { PartyModel } from '../../domain/party.model'

export const emptyModel: PartyModel = {
  venue: '',
  date: new Date().getTime(),
  guests: [
    {
      name: '',
      email: '',
    },
  ],
}

export const config: FormSectionConfig<PartyModel>[] = [
  {
    headerText: 'Booking Details',
    controlRows: [
      {
        width: ControlRowWidth.FULL,
        controls: [
          {
            type: FormControlType.INPUT,
            label: 'Venue Name',
            propertyPath: 'venue',
            isRequired: true,
          },
          {
            type: FormControlType.INPUT,
            label: 'Date',
            propertyPath: 'date',
            inputType: InputType.DATE,
            dateType: DateType.DATE_AND_TIME,
            earliestDate: new Date(),
          },
        ],
      },
    ],
  },
  {
    headerText: 'Guests to invite',
    isArray: true,
    parentPropertyPath: 'guests',
    addEntryWhenEmpty: true,
    allowReordering: true,
    itemName: 'Guest',
    blankValues: emptyModel.guests,
    controlRows: [
      {
        width: ControlRowWidth.FULL,
        controls: [
          {
            type: FormControlType.INPUT,
            label: 'Name',
            propertyPath: 'name',
            isRequired: true,
          },
          {
            type: FormControlType.INPUT,
            label: 'Email',
            propertyPath: 'email',
            inputType: InputType.EMAIL,
          },
        ],
      },
    ],
  },
]
