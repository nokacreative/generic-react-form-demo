import { faUpload } from '@fortawesome/free-solid-svg-icons'
import {
  FormSectionConfig,
  FormControlType,
  FileUploadStatus,
} from '@nokacreative/generic-react-form'
import { TestModel } from './model'

export const emptyModel: TestModel = {
  multi: [],
}

const onUpload = (files: File[]) => alert(`You have uploaded ${files.length} file(s).`)
const onRemove = (filename: string) => alert(`You have removed ${filename}.`)

export const config = (
  clientUpload: (files: File[]) => void,
  clientRemove: (filename: string, index: number) => void,
  fileUploadProgress: { [filename: string]: number },
  fileStatuses: { [filename: string]: FileUploadStatus }
): FormSectionConfig<TestModel>[] => [
  {
    headerText: 'Common',
    controlRows: [
      {
        controls: [
          {
            type: FormControlType.ATTACHMENT,
            label: 'Basic',
            propertyPath: 'basic',
            description:
              'In this section, the callbacks do nothing except for show alerts',
            onUpload,
            onRemove,
          },

          {
            type: FormControlType.ATTACHMENT,
            label: 'Supported Extensions',
            propertyPath: 'ext',
            description: 'Whitelists extensions to allow.',
            onUpload,
            onRemove,
            supportedFileExtensions: ['.jpg', '.txt'],
          },
        ],
      },
      {
        controls: [
          {
            type: FormControlType.ATTACHMENT,
            label: 'Multiple',
            propertyPath: 'multi',
            description: 'Can select multiple in the file browser, and add to the list',
            onUpload,
            onRemove,
            isMultiple: true,
          },

          {
            type: FormControlType.ATTACHMENT,
            label: 'Upload Icon',
            propertyPath: 'icon',
            description: 'Any FontAwesome icon',
            onUpload,
            onRemove,
            uploadIcon: faUpload,
          },
        ],
      },
    ],
  },

  {
    headerText: 'Functionality',
    controlRows: [
      {
        controls: [
          {
            type: FormControlType.ATTACHMENT,
            label: 'Validation',
            propertyPath: 'fsl',
            description: 'File size limits (individual and/or total) can be specified.',
            onUpload,
            onRemove,
            individualFileSizeLimit: 2500,
            totalFileSizeLimit: 5000,
          },
        ],
      },
      {
        controls: [
          {
            type: FormControlType.ATTACHMENT,
            label: 'Progress and Statuses',
            propertyPath: 'client',
            description:
              "This fake client will fail to upload files named 'test' for the first time.",
            onUpload: clientUpload,
            onRemove: clientRemove,
            fileUploadProgress,
            fileStatuses,
          },
        ],
      },
    ],
  },
]
