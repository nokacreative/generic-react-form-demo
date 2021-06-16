import {
  FormSectionConfig,
  FormControlType,
  ControlRowWidth,
  DropdownOption,
} from '@nokacreative/generic-react-form'
import { TestModel } from './model'

export const emptyModel: TestModel = {
  basic: '',
  pinned: '',
  multi: [],
  multiClear: [],
  noFiltering: '',
  emptyText: '',
  ecn: '',
}

const options: DropdownOption[] = [
  { value: 'a', text: 'Option A' },
  { value: 'b', text: 'Option B' },
  { value: 'c', text: 'Option C' },
  { value: 'd', text: 'Option D' },
  { value: 'e', text: 'Option E' },
  { value: 'f', text: 'Option F' },
  { value: 'g', text: 'Option G' },
]

export const config = (isSubmitted: boolean): FormSectionConfig<TestModel>[] => [
  {
    headerText: 'Common',
    controlRows: [
      {
        controls: [
          {
            type: FormControlType.DROPDOWN,
            label: 'Basic',
            propertyPath: 'basic',
            options,
            placeholder: 'Optional placeholder',
          },
          {
            type: FormControlType.DROPDOWN,
            label: 'With Pinned values',
            propertyPath: 'pinned',
            options,
            pinnedValues: ['c', 'd'],
            placeholder: 'Select...',
          },
        ],
      },
      {
        controls: [
          {
            type: FormControlType.DROPDOWN,
            label: 'Multiple',
            propertyPath: 'multi',
            options,
            placeholder: 'Select multiple...',
            isMultiple: true,
          },
          {
            type: FormControlType.DROPDOWN,
            label: 'Multiple with Clear Button',
            propertyPath: 'multi',
            options,
            placeholder: 'Select multiple...',
            isMultiple: true,
            showClearButton: true,
          },
        ],
      },
    ],
  },
  {
    headerText: 'Special',
    controlRows: [
      {
        controls: [
          {
            type: FormControlType.DROPDOWN,
            label: 'No Filtering',
            propertyPath: 'noFiltering',
            description: 'Good for menu items',
            options: [
              { value: 'print', text: 'Print' },
              { value: 'help', text: 'Help' },
            ],
            allowFiltering: false,
            placeholder: 'Menu',
          },
          {
            type: FormControlType.DROPDOWN,
            label: 'No Filtering + no save',
            propertyPath: '',
            description: (
              <>
                The value is not saved to the form&apos;s data, and not persisted as a
                selection. There is also an <code>onOptionSelected</code> callback here.
              </>
            ),
            options: [
              { value: 'print', text: 'Print' },
              { value: 'help', text: 'Help' },
            ],
            allowFiltering: false,
            saveSelection: false,
            placeholder: 'Menu',
            onOptionSelected: (option: DropdownOption | undefined) => {
              if (option?.value === 'print') {
                alert('Printing!')
              } else if (option?.value === 'help') {
                alert('This is a help modal')
              }
            },
          },
        ],
      },
      {
        controls: [
          {
            type: FormControlType.DROPDOWN,
            label: 'Empty Options text',
            propertyPath: '',
            options,
            placeholder: "Type 'asdf'",
            emptyOptionsText: 'Nothing here!!!',
            description: 'Used when there are no filter results',
          },
          {
            type: FormControlType.DROPDOWN,
            label: 'Extra class name',
            propertyPath: '',
            options,
            description: 'For extra styling',
            placeholder: 'This is a placeholder',
            extraClassName: 'test',
          },
        ],
      },
    ],
  },
  {
    headerText: 'Callbacks',
    onInfoIconClicked: () => alert('This section will be hidden on submit.'),
    isHidden: isSubmitted,
    controlRows: [
      {
        width: ControlRowWidth.MEDIUM,
        controls: [
          {
            type: FormControlType.DROPDOWN,
            label: 'Open and Close',
            propertyPath: '',
            options,
            onOpen: () => alert('Opened'),
            onClose: () => alert('Closed'),
          },
        ],
      },
      {
        controls: [
          {
            type: FormControlType.DROPDOWN,
            label: 'Single Option Selected',
            propertyPath: 'emptyText',
            options,
            showClearButton: true,
            onOptionSelected: (option: DropdownOption | undefined) =>
              option
                ? alert(`You selected ${option.text}`)
                : alert('You cleared the selection'),
          },
          {
            type: FormControlType.DROPDOWN,
            label: 'Options Chanaged',
            propertyPath: 'ecn',
            options,
            showClearButton: true,
            isMultiple: true,
            onOptionsChanged: (options: DropdownOption[] | undefined) =>
              options
                ? alert(`You selected ${options.length} option(s)`)
                : alert('You cleared all selections'),
          },
        ],
      },
    ],
  },
]
