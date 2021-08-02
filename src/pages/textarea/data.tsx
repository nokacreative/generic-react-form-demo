import { FormSectionConfig, FormControlType } from '@nokacreative/generic-react-form'
import { TestModel } from './model'

export const emptyModel: TestModel = {
  limit: '',
  resize1: '',
  resize2: '',
  resize3: '',
  md: '',
  md2: '',
}

export const config: FormSectionConfig<TestModel>[] = [
  {
    headerText: '',
    controlRows: [
      {
        controls: [
          {
            type: FormControlType.TEXTAREA,
            label: 'Character limit',
            propertyPath: 'limit',
            characterLimit: 10,
          },
          {
            type: FormControlType.TEXTAREA,
            label: 'Vertical Resize',
            propertyPath: 'resize1',
            allowVerticalResize: true,
          },
        ],
      },
      {
        controls: [
          {
            type: FormControlType.TEXTAREA,
            label: 'Horizontal Resize',
            propertyPath: 'resize2',
            allowHorizontalResize: true,
          },
          {
            type: FormControlType.TEXTAREA,
            label: 'Both Directions Resize',
            propertyPath: 'resize3',
            allowVerticalResize: true,
            allowHorizontalResize: true,
          },
        ],
      },
      {
        controls: [
          {
            type: FormControlType.TEXTAREA,
            label: 'Rich',
            propertyPath: 'md',
            useMarkdown: true,
          },
          {
            type: FormControlType.TEXTAREA,
            label: 'Rich (with image uploader)',
            propertyPath: 'md2',
            useMarkdown: true,
            allowImageUpload: true,
          },
        ],
      },
    ],
  },
]
