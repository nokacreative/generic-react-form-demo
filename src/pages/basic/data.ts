import { FormSectionConfig, ControlRowWidth, FormControlType, DateType, FileUploadStatus, InputType } from '@nokacreative/generic-react-form'
import { UserModel } from '../../domain/user.model'
import { countries } from './countries'

export const config = (
  onUpload: (files: File[]) => void,
  onRemove: (filename: string, index: number) => void,
  fileUploadProgress: { [filename: string]: number },
  fileStatuses: { [filename: string]: FileUploadStatus }
): FormSectionConfig<UserModel>[] => {
  return [
    {
      headerText: 'Login Details',
      onInfoIconClicked: () =>
        alert(
          "You can open up a modal or tooltip here. It's also available next to specific fields, like 'Bio' in this sample."
        ),
      controlRows: [
        {
          width: ControlRowWidth.FULL,
          controls: [
            {
              type: FormControlType.INPUT,
              label: 'Username',
              propertyPath: 'username',
              isRequired: true,
              validator: (fieldValue: string) => {
                if (fieldValue.toLocaleLowerCase().startsWith('a')) {
                  return "Cannot start with 'a'."
                }
              },
            },
            {
              type: FormControlType.INPUT,
              label: 'Password',
              propertyPath: 'password',
              inputType: InputType.PASSWORD,
              isRequired: true,
            },
            {
              type: FormControlType.INPUT,
              label: 'Email',
              propertyPath: 'email',
              inputType: InputType.EMAIL,
              isRequired: true,
            },
          ],
        },
      ],
    },
    {
      headerText: 'Profile',
      controlRows: [
        {
          controls: [
            {
              type: FormControlType.INPUT,
              label: 'Name',
              propertyPath: 'name',
              isRequired: true,
            },
            {
              type: FormControlType.INPUT,
              label: 'Age',
              propertyPath: 'age',
              inputType: InputType.NUMBER,
              growthRatio: 0.3,
            },
            {
              type: FormControlType.INPUT,
              label: 'Date of birth',
              propertyPath: 'dob',
              inputType: InputType.DATE,
              dateType: DateType.DATE_ONLY,
              growthRatio: 0.64,
            },
          ],
        },
        {
          controls: [
            {
              type: FormControlType.RADIO_GROUP,
              label: 'Gender',
              propertyPath: 'gender',
              selections: [
                { value: 'male', text: 'Male' },
                { value: 'female', text: 'Female' },
                { value: 'other', text: 'Other' },
              ],
            },
            {
              type: FormControlType.DROPDOWN,
              label: 'Country',
              propertyPath: 'country',
              options: countries,
              placeholder: 'Select',
              pinnedValues: ['CA', 'US'],
              showClearButton: true,
            },
          ],
        },
        {
          width: ControlRowWidth.MEDIUM_LARGE,
          controls: [
            {
              type: FormControlType.TEXTAREA,
              label: 'Bio',
              propertyPath: 'bio',
              characterLimit: 300,
              onInfoIconClicked: () =>
                alert(
                  "You can open up a modal or tooltip here. It's also available next to section headers."
                ),
            },
          ],
        },
        {
          controls: [
            {
              type: FormControlType.ATTACHMENT,
              label: 'Photo',
              propertyPath: 'photoFilename',
              supportedFileExtensions: ['png', 'jpg', 'bmp'],
              onUpload,
              onRemove,
              messageOverrides: {
                supportedFileFormats: 'Supported file formats: Image Files',
              },
              fileUploadProgress,
              fileStatuses,
              isMultiple: true,
            },
          ],
        },
      ],
    },
    {
      headerText: 'Job Search Details',
      controlRows: [
        {
          width: ControlRowWidth.SMALL,
          controls: [
            {
              type: FormControlType.INPUT,
              label: 'Target Annual Salary',
              propertyPath: 'targetAnnualSalary',
              inputType: InputType.MONEY,
              isRequired: true,
            },
          ],
        },
        {
          controls: [
            {
              type: FormControlType.CHECKBOX_GROUP,
              label: 'Fields',
              propertyPath: 'fields',
              isRequired: true,
              selections: [
                { value: 'engineering', text: 'Engineering' },
                { value: 'architecture', text: 'Architecture' },
                { value: 'art', text: 'Art' },
              ],
            },
          ],
        },
        {
          width: ControlRowWidth.SMALL,
          controls: [
            {
              type: FormControlType.INPUT,
              label: 'Phone Number',
              propertyPath: 'phone',
              isRequired: true,
              inputType: InputType.PHONE,
            },
          ],
        },
      ],
    },
  ]
}

// @ts-expect-error
export const emptyModel: UserModel = {
  username: '',
  password: '',
  email: '',
  name: '',
  gender: 'male',
  fields: [],
}
