import {
  FormSectionConfig,
  FormControlType,
  ControlRowWidth,
  RadioLayout,
  RadioSelection,
} from '@nokacreative/generic-react-form'
import { TestModel } from './model'

export const emptyModel: TestModel = {
  r1: '',
  r2: '',
  c1: [],
  c2: [],
  c3: [],
  c4: [],
  c5: [],
  c6: [],
}

function generateSelections(numSelections: number): RadioSelection[] {
  return Array.from({ length: numSelections }).map((_, i) => ({
    value: `v${i}`,
    text: `Value ${i + 1}`,
  }))
}

export const config: FormSectionConfig<TestModel>[] = [
  {
    headerText: 'Radios and H/V Layouts',
    controlRows: [
      {
        controls: [
          {
            type: FormControlType.RADIO_GROUP,
            label: 'Horizontal Layout (default)',
            propertyPath: 'r1',
            selections: generateSelections(3),
          },
          {
            type: FormControlType.RADIO_GROUP,
            label: 'Vertical Layout',
            propertyPath: 'r2',
            selections: generateSelections(3),
            layout: RadioLayout.VERTICAL,
          },
        ],
      },
    ],
  },
  {
    headerText: 'Checkboxes and Grid Layout',
    controlRows: [
      {
        width: ControlRowWidth.MEDIUM,
        controls: [
          {
            type: FormControlType.CHECKBOX_GROUP,
            label: '2 columns',
            propertyPath: 'c1',
            selections: generateSelections(4),
            layout: RadioLayout.GRID,
            numGridColumns: 2,
          },
        ],
      },
      {
        width: ControlRowWidth.MEDIUM_LARGE,
        controls: [
          {
            type: FormControlType.CHECKBOX_GROUP,
            label: '3 columns (default)',
            propertyPath: 'c2',
            selections: generateSelections(6),
            layout: RadioLayout.GRID,
            numGridColumns: 3,
          },
        ],
      },
      {
        controls: [
          {
            type: FormControlType.CHECKBOX_GROUP,
            label: '4 columns',
            propertyPath: 'c3',
            selections: generateSelections(8),
            layout: RadioLayout.GRID,
            numGridColumns: 4,
          },
        ],
      },
    ],
  },
  {
    headerText: 'Checkboxes-exclusive validators',
    controlRows: [
      {
        controls: [
          {
            type: FormControlType.CHECKBOX_GROUP,
            label: 'Min selections',
            propertyPath: 'c4',
            isRequired: true,
            selections: generateSelections(4),
            minNumSelections: 2,
          },
          {
            type: FormControlType.CHECKBOX_GROUP,
            label: 'Max selections',
            propertyPath: 'c5',
            selections: generateSelections(4),
            maxNumSelections: 2,
          },
        ],
      },
      {
        controls: [
          {
            type: FormControlType.CHECKBOX_GROUP,
            label: 'Min and Max',
            propertyPath: 'c6',
            isRequired: true,
            selections: generateSelections(6),
            minNumSelections: 2,
            maxNumSelections: 4,
          },
        ],
      },
    ],
  },
]
