import {
  FormSectionConfig,
  ControlRowWidth,
  FormControlType,
  RadioLayout,
  InputType,
} from '@nokacreative/generic-react-form'
import { TestModel } from './model'

export const emptyModel: TestModel = {
  petType: '',
  breed: '',
  color: [],
  age: 0,
  favFood: 'Nothing when under 1',
}

export const config: FormSectionConfig<TestModel>[] = [
  {
    headerText: 'I am looking for a...',
    controlRows: [
      {
        width: ControlRowWidth.FULL,
        controls: [
          {
            type: FormControlType.RADIO_GROUP,
            label: undefined,
            propertyPath: 'petType',
            isRequired: true,
            selections: [
              { value: 'dog', text: 'Dog' },
              { value: 'cat', text: 'Cat' },
              { value: 'turtle', text: 'Turtle' },
            ],
          },
        ],
      },
    ],
  },
  {
    headerText: 'Dog details',
    isHidden: (data: TestModel) => data.petType !== 'dog',
    controlRows: [
      {
        controls: [
          {
            type: FormControlType.CHECKBOX_GROUP,
            label: "We don't have those",
            propertyPath: 'noDogs',
            selections: [{ value: true, text: 'OK' }],
          },
        ],
      },
    ],
  },
  {
    headerText: 'Cat details',
    isHidden: (data: TestModel) => data.petType !== 'cat',
    controlRows: [
      {
        width: ControlRowWidth.MEDIUM_LARGE,
        controls: [
          {
            type: FormControlType.DROPDOWN,
            label: 'Breed',
            propertyPath: 'breed',
            placeholder: 'Choose...',
            options: [
              {
                text: "I don't",
                value: 'a',
              },
              {
                text: 'actually know',
                value: 'b',
              },
              {
                text: 'any cat breeds',
                value: 'c',
              },
              {
                text: 'but this one is colourless',
                value: 'd',
              },
            ],
          },
        ],
      },
      {
        controls: [
          {
            type: FormControlType.CHECKBOX_GROUP,
            label: 'Colour',
            propertyPath: 'color',
            isDisabled: (data: TestModel) => data.breed === 'd',
            selections: [
              { value: 'black', text: 'Black' },
              { value: 'white', text: 'White' },
              { value: 'gray', text: 'Gray' },
              { value: 'brown', text: 'Brown' },
              { value: 'orange', text: 'Orange' },
              { value: 'yellow', text: 'Yellow' },
            ],
            layout: RadioLayout.GRID,
          },
        ],
      },
    ],
  },
  {
    headerText: 'Turtle details',
    isHidden: (data: TestModel) => data.petType !== 'turtle',
    controlRows: [
      {
        controls: [
          {
            type: FormControlType.INPUT,
            inputType: InputType.NUMBER,
            label: 'Age',
            propertyPath: 'age',
            growthRatio: 0.5,
          },
          {
            type: FormControlType.INPUT,
            label: 'Favourite food',
            propertyPath: 'favFood',
            isReadOnly: (data: TestModel) => data.age < 1,
          },
        ],
      },
    ],
  },
]
