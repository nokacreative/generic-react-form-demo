import { useRef, useState } from 'react'
import { FileUploadStatus } from '@nokacreative/generic-react-form'

export function useFakeClient() {
  const [fileStatuses, setFileStatuses] = useState<{
    [filename: string]: FileUploadStatus
  }>({})
  const [progress, setProgress] = useState<{ [filename: string]: number }>({})
  const numTimesUploadedTest = useRef<number>(0)

  function upload(files: File[]) {
    const id = setInterval(() => {
      setProgress((progress: { [filename: string]: number }) => {
        const newProgressMap = { ...progress }
        files.forEach((f) => {
          const currentProgress = newProgressMap[f.name]
          if (
            numTimesUploadedTest.current <= 2 &&
            f.name.split('.')[0].toLowerCase() === 'test'
          ) {
            if (currentProgress === 40) {
              setFileStatuses({
                ...fileStatuses,
                [f.name]: FileUploadStatus.FAILED,
              })
              newProgressMap[f.name] = 0
              numTimesUploadedTest.current += 1
              return
            }
            if (fileStatuses[f.name] === FileUploadStatus.FAILED) {
              setFileStatuses({
                ...fileStatuses,
                [f.name]: FileUploadStatus.IN_PROGRESS,
              })
              numTimesUploadedTest.current += 1
              return
            }
          }
          let newProgress = 100
          if (currentProgress === undefined) {
            newProgress = 0
            setFileStatuses({
              ...fileStatuses,
              [f.name]: FileUploadStatus.IN_PROGRESS,
            })
          } else if (currentProgress < 100) {
            newProgress = currentProgress + 20
          } else {
            setFileStatuses({
              ...fileStatuses,
              [f.name]: FileUploadStatus.UPLOADED,
            })
            clearInterval(id)
          }
          newProgressMap[f.name] = newProgress
        })
        return newProgressMap
      })
    }, 500)
  }

  function remove(filename: string) {
    const { [filename]: _, ...rest } = fileStatuses
    setFileStatuses(rest)
  }

  return { upload, remove, fileStatuses, progress }
}
